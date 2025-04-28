# OBERA DSL Compiler

A compiler for the OBERA Domain-Specific Language (DSL) for UI design.

## Setup Instructions

1. **Install Python 3.10+** (recommended)

2. **Install dependencies**:

   ```bash
   pip install antlr4-python3-runtime==4.13.2
   ```

3. **Download ANTLR tool**:

   Download the ANTLR JAR file: [antlr-4.13.2-complete.jar](https://repo1.maven.org/maven2/org/antlr/antlr4/4.13.2/antlr4-4.13.2-complete.jar)

   Place it in the `antlr/` directory.

## Usage

- **Generate parser code**:

  ```bash
  python scripts/generate_parser.py
  ```

- **Test parser manually**:

  ```bash
  python scripts/test_parser.py
  ```

---

## Notes

- Output files (tokens, parse tree) are saved in the `output/` directory.
- Unit tests and integration tests are located in the `tests/` folder.
- Parser output (Python files) are placed in `src/compiled/`.

---
