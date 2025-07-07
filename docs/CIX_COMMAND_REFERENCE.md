# CIX Command Reference

This document provides a comprehensive reference for all CIX (Computer Integrated eXchange) commands supported by the VSCode extension. CIX is used for programming BIESSE woodworking machines and contains commands for geometry creation, boring, cutting, milling, and positioning operations.

## Command Categories

### 1. Piece Variables
- **PANEL**: Piece data - defines the basic piece parameters and settings

### 2. Geometry Commands
- **GEO**: Define geometry - creates basic geometric shapes
- **GEOTEXT**: Text - creates text elements
- **OFFGEO**: Geometry offset - creates offset geometry from existing geometry

### 3. Geometric Drawing Commands
- **CIRCLE_3P**: Circle given three points
- **CIRCLE_CR**: Circle given centre and radius
- **ELLIPSE**: Ellipse
- **OVAL**: Oval
- **STAR**: Star
- **CHAMFER**: Chamfer
- **CONNECTOR**: Connector A
- **CONNECTOR2**: Connector B
- **START_POINT**: Starting point
- **LINE_EP**: Line given end point
- **LINE_EPTP**: Line given end point and tangency to previous item
- **LINE_LNAN**: Line given length and angle
- **LINE_LNTP**: Line given length and tangency to previous item
- **ARC_ANCE**: Curve given angle and centre
- **ARC_EPCE**: Curve given end point and centre
- **ARC_EPRA**: Curve given end point and radius
- **ARC_IPEP**: Curve using three points
- **ENDPATH**: End of path definition

### 4. Transformation Commands
- **OFFSET**: Move piece
- **ROTATE**: Rotate geometry
- **SCALE**: Geometry scale
- **SHIFT**: Move geometry

### 5. Boring Commands
- **B_GEO**: Bore from geometry
- **BCA**: Bore with C axis on circular side
- **BCL**: Bore with C axis on straight side
- **BG**: Generic bore
- **BH**: Horizontal bore
- **BV**: Vertical bore
- **S32**: System bore

### 6. Cutting Commands
- **CUT_F**: Format piece
- **CUT_FR**: Rectangular cut
- **CUT_G**: Generic cut
- **CUT_GEO**: Cut from geometry
- **CUT_X**: X cut
- **CUT_Y**: Y cut

### 7. Milling Commands
- **INSERT**: Insertion
- **INSERTG**: Insertion from geometry
- **POCK**: Pocketing
- **ROUT**: Milling
- **ROUTG**: Milling from geometry
- **TT**: Tracer

### 8. Positioning Commands
- **WAIT**: Wait for piece positioning
- **WFC**: Circular side
- **WFG**: Sides from geometry
- **WFGL**: Side from geometry on side faces
- **WFGPS**: Side from geometry using section plan
- **WFL**: Straight side
- **WTCARRIAGE**: Carriage transfer
- **WTEND**: End of parallel unit
- **WTGROUP**: Start parallel unit
- **WTLIFT**: Bar support
- **WTMOVING**: Repositioning work table
- **WTPLANE**: Mobile support transfer
- **WTUNICLAMP**: Open/Close clamp
- **WTVACUM**: Enable/Disable vacuum

## Parameter Reference

### Coordinate Parameters
- **X, Y, Z**: Position coordinates
- **XE, YE, ZE**: End coordinates
- **XS, YS, ZS**: Start coordinates
- **XC, YC**: Center coordinates
- **XI, YI**: Incremental coordinates
- **XRC, YRC**: Repetition center coordinates

### Geometry Parameters
- **R**: Radius
- **DIA**: Diameter
- **L**: Length
- **ANG**: Angle
- **CRN**: Number of corners
- **GID**: Geometry identification
- **ID**: Machining operation identification
- **LAY**: Layer identification string

### Machining Parameters
- **DP**: Depth
- **WSP**: Work speed [mm/min]
- **RSP**: Rotation speed [rpm]
- **DSP**: Piercing/lowering speed
- **IOS**: Approach/output speed
- **THR**: Through operation (0=disabled, 1=enabled)
- **BFC**: Chip cleaning by blowing (0=NO, 1=YES)
- **CRC**: Correction type
- **AP**: Approach type
- **AZS**: Additional Z safety
- **CSP**: Corner speed

### Tool Parameters
- **TNM**: Tool name/code
- **TTP**: Tool type
- **TCL**: Tool class
- **AGG**: Aggregate identification
- **SPI**: Spindle
- **TOS**: Channel (0=NO, 1=YES)

### Control Parameters
- **RTY**: Repetition type
- **NRP**: Number of repeats
- **DX, DY**: Step distances
- **DA**: Angular step
- **LRP**: Linear step
- **ER**: First item flag
- **RDL**: Radial flag
- **RV**: Reverse flag

## Value Enumerations

### Boolean Values
- **0** = NO
- **1** = YES

### Tool Classes (TCL)
- **0**: C_DRILLING (drilling operations)
- **1**: C_ROUTING (routing operations)
- **2**: C_CUTTING (cutting operations)

### Tool Types (TTP)

**For C_DRILLING class:**
- **0**: NORMALE (normal drill)
- **1**: LANCIA (lance drill)
- **2**: SVASATA (countersink)
- **3**: NORMALEG (normal drill with guide)

**For C_ROUTING class:**
- **100**: CANDELA (candle router)
- **101**: SAGOMATA (shaped router)
- **102**: ROUT0 (router type 0)
- **103**: ROUT1 (router type 1)

**For C_CUTTING class:**
- **200**: CUTT0 (cutter type 0)
- **201**: CUTT1 (cutter type 1)
- **250**: HEAD0 (head type 0)
- **251**: HEAD1 (head type 1)

### Repetition Types (RTY)
- **-1**: rpNO (no repetition)
- **0**: rpX (repeat in X direction)
- **1**: rpY (repeat in Y direction)
- **2**: rpXY (repeat in XY directions)
- **3**: rpCIR (circular repetition)
- **5**: rpAL (along path repetition)

### Correction Types (CRC)
- **0**: Central
- **1**: Right
- **2**: Left
- **5**: Internal
- **6**: External
- **7**: From geometry

### Direction Values
- **dirCW**: Clockwise
- **dirCCW**: Counter-clockwise
- **drX**: X direction
- **drY**: Y direction

### Inclination Types (CKA)
- **azrNO**: No inclination
- **azrABS**: Absolute inclination
- **azrINC**: Incremental inclination

### System Bore Types (TYP for S32)
- **0**: sysCorr (system correct)
- **1**: sysHole (system hole)
- **2**: sysSpace (system space)
- **3**: sysOffset (system offset)

### Cut Types (TYP for CUT commands)
- **2**: cutXY (cut XY)
- **3**: cutXA (cut X angle)
- **4**: cutYA (cut Y angle)
- **5**: cutLA (cut length angle)

## Example Usage

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

This reference provides the foundation for understanding and working with CIX files in your VSCode environment.