# Change Log

All notable changes to the "CIX Language Support" extension will be documented in this file.

## [1.0.0] - 2024-01-07

### Added
- Initial release of CIX Language Support extension
- Comprehensive syntax highlighting for CIX files
- Support for all major CIX language constructs:
  - Block structures (BEGIN/END)
  - Macro definitions (ROUT, BG, LABEL, etc.)
  - Parameter definitions (PARAM, NAME, VALUE)
  - Data types (strings, numbers, booleans, enums)
  - Comments (lines starting with -)
- Language configuration features:
  - Comment toggling with Ctrl+/
  - Bracket matching for BEGIN/END blocks
  - Auto-closing pairs for quotes and brackets
  - Code folding for block structures
- File association for .cix files
- Comprehensive documentation and examples

### Language Features Supported
- **Block Keywords**: BEGIN, END, ID, MAINDATA, MACRO, VB, WORKTABLETOOLING
- **Macro Commands**: ROUT, BG, LABEL, START_POINT, LINE_EP, ARC_EPRA, ENDPATH, GEO, LINC_EP, ISO, WAIT, WTPLANE, WTTOOL, WTCARRIAGE
- **Parameter Names**: Over 100 common CIX parameters including coordinates, tool settings, and machine parameters
- **Data Types**: Numeric values, quoted strings, boolean values (YES/NO), enumerated values (dirCW, dirCCW, etc.)
- **Special Syntax**: Custom string patterns for CUSTSTR values

### Technical Details
- Built with TypeScript for VS Code
- Uses TextMate grammar for syntax highlighting
- Follows VS Code extension best practices
- Comprehensive test coverage with real CIX files

## [Unreleased]

### Planned Features
- Auto-completion for common CIX commands and parameters
- Code snippets for common CIX patterns
- Error detection and validation
- Hover information for parameters
- Go-to-definition for macro references
- Outline view for CIX file structure