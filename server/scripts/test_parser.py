import sys
import os
from pathlib import Path
from antlr4 import InputStream, CommonTokenStream, Token

current_file_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.dirname(current_file_dir)
sys.path.append(project_root)

from config import (
    PROJECT_ROOT, GRAMMAR_NAME, TESTS_DIR, OUTPUT_DIR, 
    COMPILED_DIR, ensure_directories
)
from src.utils.logging import get_logger

# Get logger
logger = get_logger("test_parser")

def test_parser():
    """Test the parser with sample files"""
    try:
        # Dynamically import parser modules
        import importlib
        package_info = importlib.import_module(f"src.compiled.package_info")
        create_parser = package_info.create_parser
        
        parser_module = importlib.import_module(f"src.compiled.{GRAMMAR_NAME}Parser")
        ParserClass = getattr(parser_module, f"{GRAMMAR_NAME}Parser")
    except ImportError as e:
        logger.error(f"Error importing parser: {e}")
        logger.error("Make sure you've generated the parser first with 'python scripts/generate_parser.py'")
        return False

    # Create output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Process each test file
    success = True
    for test_file in TESTS_DIR.glob("*.txt"):
        logger.info(f"Testing file: {test_file}")
        
        try:
            # Read the test file
            with open(test_file, 'r', encoding='utf-8') as f:
                input_text = f.read()
            
            # Create parser
            parser, lexer, tokens = create_parser(input_text)
            
            # Create output file
            output_file = OUTPUT_DIR / f"{test_file.stem}_tokens.txt"
            with open(output_file, 'w', encoding='utf-8') as f:
                # Reset lexer to print all tokens
                lexer.reset()
                token = lexer.nextToken()
                while token.type != Token.EOF:
                    token_type = lexer.symbolicNames[token.type] if token.type > 0 else 'EOF'
                    f.write(f"Token: {token.text!r}, Type: {token_type}, Line: {token.line}, Column: {token.column}\n")
                    token = lexer.nextToken()
            
            logger.info(f"Tokens written to: {output_file}")
            
            # Try parsing the input
            parser, lexer, tokens = create_parser(input_text)
            tree = parser.program()
            
            # If we get here without exceptions, parsing succeeded
            logger.info(f"Successfully parsed {test_file}")
            
            # Write parse tree as string representation
            tree_file = OUTPUT_DIR / f"{test_file.stem}_tree.txt"
            with open(tree_file, 'w', encoding='utf-8') as f:
                f.write(str(tree.toStringTree(recog=parser)))
            
            logger.info(f"Parse tree written to: {tree_file}")
            
        except Exception as e:
            logger.error(f"Error parsing file {test_file}: {e}")
            success = False
    
    return success

def main():
    """Main function"""
    # Ensure all required directories exist
    ensure_directories()
    
    if test_parser():
        logger.info("All parser tests completed successfully")
        return 0
    else:
        logger.error("Some parser tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())