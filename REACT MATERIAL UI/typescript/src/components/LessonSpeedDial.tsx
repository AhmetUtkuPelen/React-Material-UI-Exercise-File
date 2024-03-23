import { SpeedDial , SpeedDialAction , SpeedDialIcon  } from "@mui/material"
import PrintIcon from '@mui/icons-material/Print';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IosShareIcon from '@mui/icons-material/IosShare';
import EditIcon from '@mui/icons-material/Edit';



function LessonSpeedDial() {
  return (
<SpeedDial ariaLabel="navigation" icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}>
    <SpeedDialAction icon={<ContentCopyIcon/>} tooltipTitle="COPY" tooltipOpen/>
    <SpeedDialAction icon={<IosShareIcon/>} tooltipTitle="SHARE" tooltipOpen/>
    <SpeedDialAction icon={<PrintIcon/>} tooltipTitle="PRINT" tooltipOpen/>
    <SpeedDialAction icon={<EditIcon/>} tooltipTitle="EDIT" tooltipOpen/>
</SpeedDial>
  )
}

export default LessonSpeedDial