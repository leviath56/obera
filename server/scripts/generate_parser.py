import sys
import os
import subprocess
from datetime import datetime
import os.path

# Add project root to path
current_file_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.dirname(current_file_dir)
sys.path.append(project_root)

# Import từ config và utils
from config import (
    PROJECT_ROOT, GRAMMAR_NAME, GRAMMAR_FILE, 
    GRAMMAR_DIR, COMPILED_DIR, ANTLR_DIR, ANTLR_JAR,
    ANTLR_DOWNLOAD_URL, ensure_directories
)
from src.utils.logging import get_logger

# Get logger
logger = get_logger("generate_parser")

class ParserGenerator:
    """Handles the generation of parser code from ANTLR grammar"""
    
    def __init__(self, grammar_name, grammar_path, output_dir, antlr_jar):
        self.grammar_name = grammar_name
        self.grammar_path = grammar_path
        self.output_dir = output_dir
        self.antlr_jar = antlr_jar
        self.grammar_file = f"{grammar_name}.g4"

    def check_antlr_jar(self):
        """Check if ANTLR JAR exists, download if needed"""
        if not os.path.exists(self.antlr_jar):
            logger.info(f"ANTLR JAR not found at {self.antlr_jar}. Please download it.")
            logger.info(f"You can download from: {ANTLR_DOWNLOAD_URL}")
            logger.info(f"Place the JAR file at: {self.antlr_jar}")
            return False
        return True
    
    def generate_parser(self):
        """Generate parser from grammar file"""
        if not self.check_antlr_jar():
            return False
        
        # Full path to grammar file
        grammar_file_path = os.path.join(self.grammar_path, self.grammar_file)
        
        if not os.path.exists(grammar_file_path):
            logger.error(f"Grammar file not found: {grammar_file_path}")
            return False
        
        logger.info(f"Generating parser from grammar: {grammar_file_path}")
        logger.info(f"Output directory: {self.output_dir}")
        
        # Build the ANTLR command
        cmd = [
            'java',
            '-jar', str(self.antlr_jar),
            '-o', str(self.output_dir),
            '-Dlanguage=Python3',
            '-visitor',       # Generate visitor pattern
            '-no-listener',   # Don't generate listener pattern
            str(grammar_file_path)
        ]
        
        try:
            # Run ANTLR command
            process = subprocess.run(
                cmd, 
                stdout=subprocess.PIPE, 
                stderr=subprocess.PIPE,
                text=True,
                check=True
            )
            
            logger.info("Parser generation successful!")
            logger.debug(f"ANTLR Output: {process.stdout}")
            
            # Create __init__.py file in the output directory
            init_file = os.path.join(self.output_dir, "__init__.py")
            with open(init_file, "w") as f:
                f.write(f"# Generated ANTLR parser files for {self.grammar_name}\n")
                f.write(f"# Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            
            return True
            
        except subprocess.CalledProcessError as e:
            logger.error(f"Error generating parser: {e}")
            logger.error(f"STDERR: {e.stderr}")
            return False
    
    def generate_package_info(self):
        """Generate a package info file with import helpers"""
        package_file = os.path.join(self.output_dir, "package_info.py")
        
        content = f"""# Auto-generated package info for {self.grammar_name}
# Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

import os
import sys

# Add the generated directory to sys.path if not already present
current_dir = os.path.dirname(os.path.abspath(__file__))
if current_dir not in sys.path:
    sys.path.append(current_dir)

# Import the generated lexer and parser
from .{self.grammar_name}Lexer import {self.grammar_name}Lexer
from .{self.grammar_name}Parser import {self.grammar_name}Parser
from .{self.grammar_name}Visitor import {self.grammar_name}Visitor

# Helper function to create a parser from input text
def create_parser(input_text):
    from antlr4 import InputStream, CommonTokenStream
    input_stream = InputStream(input_text)
    lexer = {self.grammar_name}Lexer(input_stream)
    token_stream = CommonTokenStream(lexer)
    parser = {self.grammar_name}Parser(token_stream)
    return parser, lexer, token_stream

# Helper function to parse a file
def parse_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return create_parser(file.read())
"""
        
        with open(package_file, "w") as f:
            f.write(content)
        
        logger.info(f"Generated package info file: {package_file}")

def main():
    """Main function to generate parser"""
    # Ensure all required directories exist
    ensure_directories()
    
    # Create the parser generator
    generator = ParserGenerator(
        grammar_name=GRAMMAR_NAME,
        grammar_path=GRAMMAR_DIR,
        output_dir=COMPILED_DIR,
        antlr_jar=ANTLR_JAR
    )
    
    # Generate parser
    if generator.generate_parser():
        # Generate package info
        generator.generate_package_info()
        logger.info("Parser generation complete")
    else:
        logger.error("Parser generation failed")
        sys.exit(1)

if __name__ == "__main__":
    main()