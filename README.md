# CIX Language Support for VS Code

A Visual Studio Code extension that provides syntax highlighting and language support for CIX (Computer Integrated eXchange) files used in CNC machining and woodworking automation.

## Features

- **Syntax Highlighting**: Full syntax highlighting for CIX files with proper colorization of keywords, parameters, strings, numbers, and comments
- **Language Configuration**: Proper bracket matching, auto-closing pairs, and comment toggling
- **Code Folding**: Collapse and expand code blocks defined by `BEGIN` and `END` keywords
- **File Association**: Automatic language detection for `.cix` files

## What is CIX?

CIX (Computer Integrated eXchange) is a programming language used in CNC machining, particularly in woodworking automation systems like Biesse machines. It's a structured language that defines machining operations, tool paths, and manufacturing processes.

### Language Similarities

CIX shares characteristics with several other languages:

- **INI Files**: Similar key-value pair structure with sections
- **G-code**: Both are CNC-related languages for manufacturing
- **Configuration Languages**: Block-based structure similar to configuration files
- **Assembly Languages**: Low-level commands for machine operations

## Syntax Overview

### Basic Structure
```cix
BEGIN ID CID3
    REL=5.0
END ID

BEGIN MAINDATA
    LPX=800
    LPY=500
    LPZ=30
    MATERIAL="wood"
END MAINDATA
```

### Key Components

#### 1. **Blocks**
Defined by `BEGIN` and `END` keywords:
- `ID` - File identification
- `MAINDATA` - Main panel data
- `MACRO` - Machining operations
- `VB` - Visual Basic code
- `WORKTABLETOOLING` - Tool configuration

#### 2. **Parameters**
Key-value pairs within blocks:
```cix
PARAM,NAME=DIA,VALUE=20
PARAM,NAME=TNM,VALUE="FRESAD20"
```

#### 3. **Macros/Commands**
Machining operations:
- `ROUT` - Routing operations
- `BG` - Boring operations
- `LABEL` - Labeling operations
- `START_POINT` - Path start point
- `LINE_EP` - Line endpoint
- `ARC_EPRA` - Arc with endpoint, radius, and angle

#### 4. **Data Types**
- **Numbers**: `800`, `5.0`, `-10.5`
- **Strings**: `"wood"`, `"FRESAD20"`
- **Booleans**: `YES`, `NO`
- **Enums**: `dirCW`, `dirCCW`, `scOFF`, `rpNO`

#### 5. **Comments**
Single-line comments start with `-`:
```cix
- This is a comment
- Working name: CUT_BG
```

## Installation

### From VS Code Marketplace
1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "CIX Language Support"
4. Click Install

### From VSIX File
1. Download the `.vsix` file
2. In VS Code, go to Extensions
3. Click "..." → "Install from VSIX..."
4. Select the downloaded file

## Usage

1. Open any `.cix` file in VS Code
2. The extension will automatically activate and provide syntax highlighting
3. Use Ctrl+/ to toggle line comments
4. Use folding controls to collapse/expand code blocks

## Common CIX Parameters

### Panel Dimensions
- `LPX` - Panel length (X-axis)
- `LPY` - Panel width (Y-axis)
- `LPZ` - Panel thickness (Z-axis)

### Tool Parameters
- `DIA` - Tool diameter
- `TNM` - Tool name
- `DP` - Depth of cut
- `TTP` - Tool type

### Position Parameters
- `X`, `Y`, `Z` - Coordinates
- `XE`, `YE`, `ZE` - End coordinates
- `R` - Radius
- `A` - Angle

### Machine Parameters
- `CRN` - Corner reference
- `SIDE` - Side of panel
- `DIR` - Direction (dirCW/dirCCW)
- `THR` - Through cut

## Examples

### Basic Routing Operation
```cix
BEGIN MACRO
    NAME=ROUT
    PARAM,NAME=ID,VALUE="P1001"
    PARAM,NAME=SIDE,VALUE=0
    PARAM,NAME=DIA,VALUE=20
    PARAM,NAME=DP,VALUE=5
    PARAM,NAME=TNM,VALUE="FRESAD20"
END MACRO
```

### Path Definition
```cix
BEGIN MACRO
    NAME=START_POINT
    PARAM,NAME=X,VALUE=100
    PARAM,NAME=Y,VALUE=100
    PARAM,NAME=Z,VALUE=0
END MACRO

BEGIN MACRO
    NAME=LINE_EP
    PARAM,NAME=XE,VALUE=300
    PARAM,NAME=YE,VALUE=100
END MACRO
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Press F5 to run the extension in a new Extension Development Host window
4. Open a `.cix` file to test the syntax highlighting

## License

This extension is licensed under the MIT License. See the LICENSE file for details.

## Changelog

### 1.0.0
- Initial release
- Basic syntax highlighting for CIX files
- Language configuration for comments and brackets
- Code folding support

## Related

- [Biesse Group](https://www.biesse.com/) - CNC machinery manufacturer
- [CNC Programming](https://en.wikipedia.org/wiki/Numerical_control) - Wikipedia article on CNC
- [G-code](https://en.wikipedia.org/wiki/G-code) - Related CNC programming language

## Support

If you encounter any issues or have feature requests, please file an issue on the [GitHub repository](https://github.com/yourusername/vscode-cix-extension/issues).