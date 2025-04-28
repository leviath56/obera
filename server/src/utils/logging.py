import logging
import os
import sys
from pathlib import Path

current_file_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.dirname(os.path.dirname(current_file_dir))
sys.path.append(project_root)

from config import LOGS_DIR

def get_logger(name):
    """Create a logger with the given name"""
    logger = logging.getLogger(name)
    
    # Check if logger already has handlers to avoid duplicate logs
    if not logger.handlers:
        logger.setLevel(logging.INFO)
        
        # Create console handler
        console_handler = logging.StreamHandler()
        console_handler.setLevel(logging.INFO)
        
        # Create formatter
        formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
        console_handler.setFormatter(formatter)
        
        # Add handler to logger
        logger.addHandler(console_handler)
        
        # Create file handler
        os.makedirs(LOGS_DIR, exist_ok=True)
        
        file_handler = logging.FileHandler(os.path.join(LOGS_DIR, f'{name}.log'))
        file_handler.setLevel(logging.INFO)
        file_handler.setFormatter(formatter)
        logger.addHandler(file_handler)
    
    return logger