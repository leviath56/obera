# config.py
from pathlib import Path

# Project structure
PROJECT_ROOT = Path(__file__).parent.absolute()

# Grammar configuration
GRAMMAR_NAME = "OberaDSL"
GRAMMAR_FILE = f"{GRAMMAR_NAME}.g4"

# Directory structure
SRC_DIR = PROJECT_ROOT / "src"
GRAMMAR_DIR = SRC_DIR / "grammar"
COMPILED_DIR = SRC_DIR / "compiled"
UTILS_DIR = SRC_DIR / "utils"
VISITORS_DIR = SRC_DIR / "visitors"
TESTS_DIR = PROJECT_ROOT / "tests"
OUTPUT_DIR = PROJECT_ROOT / "output"
LOGS_DIR = PROJECT_ROOT / "logs"

# ANTLR configuration
ANTLR_DIR = PROJECT_ROOT / "antlr"
ANTLR_JAR = ANTLR_DIR / "antlr4-4.13.2-complete.jar"
ANTLR_VERSION = "4.13.2"
ANTLR_DOWNLOAD_URL = f"https://repo1.maven.org/maven2/org/antlr/antlr4/{ANTLR_VERSION}/antlr4-{ANTLR_VERSION}-complete.jar"

def ensure_directories():
    """Create all required directories if they don't exist"""
    directories = [
        SRC_DIR, GRAMMAR_DIR, COMPILED_DIR, UTILS_DIR, VISITORS_DIR,
        TESTS_DIR, OUTPUT_DIR, LOGS_DIR, ANTLR_DIR
    ]
    for directory in directories:
        directory.mkdir(parents=True, exist_ok=True)