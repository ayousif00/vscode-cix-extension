# Change Log

All notable changes to the "CIX Language Support" extension will be documented in this file.

## [1.1.0] - 2024-01-07

### Added
- **Comprehensive Command Support**: Added support for all 73+ CIX commands from official BIESSE documentation
- **Enhanced Syntax Highlighting**: Categorized highlighting for different command types:
  - Geometry commands (GEO, GEOTEXT, OFFGEO)
  - Drawing commands (CIRCLE_*, LINE_*, ARC_*, etc.)
  - Machining commands (ROUT, BG, CUT_*, INSERT, etc.)
  - Positioning commands (WAIT, WT*, WF*)
- **Advanced Parameter Categorization**: 100+ parameters organized by function:
  - Coordinate parameters (X, Y, Z, XE, YE, etc.)
  - Tool parameters (TNM, TTP, TCL, etc.)
  - Machining parameters (DP, WSP, RSP, etc.)
  - Control parameters (RTY, NRP, CRC, etc.)
- **Complete Value Enumerations**: Support for all CIX enum values:
  - Tool types (drilling, routing, cutting)
  - Repetition types (rpNO, rpX, rpY, etc.)
  - Direction values (dirCW, dirCCW)
  - Correction types and system values
- **Comprehensive Documentation**: Added detailed command reference with examples
- **Enhanced Examples**: More realistic CIX code examples with proper parameter usage

### Improved
- **TextMate Grammar**: Completely restructured for better command categorization
- **README Documentation**: Expanded with comprehensive parameter reference
- **Command Examples**: Added boring, geometry, and advanced routing examples

### Technical
- Updated syntax highlighting rules to match official CIX specification
- Added support for all BIESSE machine-specific parameters
- Improved parameter validation patterns

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