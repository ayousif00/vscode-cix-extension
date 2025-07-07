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

#### 3. **Command Categories** (73+ commands total)
**Geometry Commands:**
- `GEO`, `GEOTEXT`, `OFFGEO` - Geometry definition and manipulation

**Drawing Commands:**
- `CIRCLE_3P`, `CIRCLE_CR`, `ELLIPSE`, `OVAL`, `STAR` - Shape creation
- `START_POINT`, `LINE_EP`, `ARC_EPRA`, `ENDPATH` - Path definition

**Machining Commands:**
- `ROUT`, `ROUTG` - Routing/milling operations
- `BG`, `BH`, `BV`, `BCA`, `BCL` - Boring operations  
- `CUT_F`, `CUT_G`, `CUT_GEO` - Cutting operations
- `INSERT`, `POCK`, `TT` - Insertion and pocketing

**Positioning Commands:**
- `WAIT`, `WFC`, `WFG`, `WFL` - Workpiece positioning
- `WTPLANE`, `WTCARRIAGE`, `WTUNICLAMP` - Work table control

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

## Comprehensive CIX Parameters (100+ parameters)

### Coordinate Parameters
- `X`, `Y`, `Z` - Position coordinates
- `XE`, `YE`, `ZE` - End coordinates  
- `XS`, `YS`, `ZS` - Start coordinates
- `XC`, `YC` - Center coordinates
- `XI`, `YI` - Incremental coordinates
- `XRC`, `YRC` - Repetition center coordinates

### Geometry Parameters
- `R` - Radius
- `DIA` - Diameter
- `L` - Length
- `ANG` - Angle
- `CRN` - Number of corners
- `GID` - Geometry identification
- `ID` - Machining operation identification
- `LAY` - Layer identification string

### Tool Parameters
- `TNM` - Tool name/code
- `TTP` - Tool type (0-3 for drilling, 100-103 for routing, 200-251 for cutting)
- `TCL` - Tool class (0=drilling, 1=routing, 2=cutting)
- `AGG` - Aggregate identification
- `SPI` - Spindle
- `TOS` - Channel (0=NO, 1=YES)

### Machining Parameters
- `DP` - Depth
- `WSP` - Work speed [mm/min]
- `RSP` - Rotation speed [rpm]
- `DSP` - Piercing/lowering speed
- `IOS` - Approach/output speed
- `THR` - Through operation (0=disabled, 1=enabled)
- `BFC` - Chip cleaning by blowing (0=NO, 1=YES)
- `CRC` - Correction type (0=central, 1=right, 2=left, 5=internal, 6=external)

### Control Parameters
- `RTY` - Repetition type (-1=none, 0=X, 1=Y, 2=XY, 3=circular)
- `NRP` - Number of repeats
- `DX`, `DY` - Step distances
- `DA` - Angular step
- `ER` - First item flag
- `RV` - Reverse flag

### Panel Dimensions
- `LPX` - Panel length (X-axis)
- `LPY` - Panel width (Y-axis)
- `LPZ` - Panel thickness (Z-axis)

## Examples

### Basic Routing Operation
```cix
BEGIN MACRO
    NAME=ROUT
    PARAM,NAME=ID,VALUE="P1001"
    PARAM,NAME=SIDE,VALUE=0
    PARAM,NAME=CRN,VALUE="1"
    PARAM,NAME=DIA,VALUE=20
    PARAM,NAME=DP,VALUE=5
    PARAM,NAME=TNM,VALUE="FRESAD20"
    PARAM,NAME=TTP,VALUE=100
    PARAM,NAME=TCL,VALUE=1
    PARAM,NAME=CRC,VALUE=2
    PARAM,NAME=WSP,VALUE=5000
    PARAM,NAME=RSP,VALUE=18000
END MACRO
```

### Boring Operation
```cix
BEGIN MACRO
    NAME=BG
    PARAM,NAME=ID,VALUE="P101"
    PARAM,NAME=SIDE,VALUE=0
    PARAM,NAME=CRN,VALUE="2"
    PARAM,NAME=X,VALUE=82.5
    PARAM,NAME=Y,VALUE=419.0
    PARAM,NAME=Z,VALUE=0.0
    PARAM,NAME=DIA,VALUE=8.0
    PARAM,NAME=DP,VALUE=13.0
    PARAM,NAME=THR,VALUE=NO
    PARAM,NAME=RTY,VALUE=rpNO
END MACRO
```

### Path Definition with Arc
```cix
BEGIN MACRO
    NAME=START_POINT
    PARAM,NAME=ID,VALUE=91343360
    PARAM,NAME=X,VALUE=400
    PARAM,NAME=Y,VALUE=0
    PARAM,NAME=Z,VALUE=0
END MACRO

BEGIN MACRO
    NAME=ARC_EPRA
    PARAM,NAME=ID,VALUE=121002416
    PARAM,NAME=XE,VALUE=0
    PARAM,NAME=YE,VALUE=20
    PARAM,NAME=R,VALUE=20
    PARAM,NAME=DIR,VALUE=dirCCW
END MACRO

BEGIN MACRO
    NAME=ENDPATH
    PARAM,NAME=ID,VALUE=90952432
END MACRO
```

### Geometry Creation
```cix
BEGIN MACRO
    NAME=CIRCLE_CR
    PARAM,NAME=ID,VALUE="CIRCLE1"
    PARAM,NAME=XC,VALUE=400
    PARAM,NAME=YC,VALUE=250
    PARAM,NAME=R,VALUE=50
    PARAM,NAME=LAY,VALUE="GEOMETRY"
END MACRO
```

## Documentation

For a comprehensive reference of all CIX commands and parameters, see:
- [CIX Command Reference](docs/CIX_COMMAND_REFERENCE.md) - Complete documentation of all 73+ CIX commands

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