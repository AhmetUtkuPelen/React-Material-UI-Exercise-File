import { BottomNavigation , BottomNavigationAction } from "@mui/material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import { useState } from "react";



function LessonBottomNavigation() {
    const [value , setValue] = useState(0)
  return (
<BottomNavigation showLabels sx={{width:'100%',position:'absolute',bottom:'0'}} value={value} onChange={(event,newValue)=>{setValue(newValue)}}>
    <BottomNavigationAction icon={<RestoreIcon/>} label="Something"/>
    <BottomNavigationAction icon={<LocationOnIcon/>} label="Bla Bla"/>
    <BottomNavigationAction icon={<LocationOnIcon/>} label="Falan Filan"/>
</BottomNavigation>
  )
}

export default LessonBottomNavigation