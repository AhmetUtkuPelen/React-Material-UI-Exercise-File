import { Box , Drawer , IconButton , Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";


function LessonDrawer() {
    const[isOpen,setIsOpen] = useState(false)
  return (
<Box>
    <IconButton size="large" onClick={()=>setIsOpen(true)}>
        <MenuIcon/>
    </IconButton>
    <Drawer open={isOpen} anchor="right" onClose={()=>setIsOpen(false)}>
        <Box width='250px' textAlign='center'>
            <Typography component='div' variant="h6">LEFT PANEL</Typography>
        </Box>
    </Drawer>
</Box>
  )
}

export default LessonDrawer


//  ! Drawer da default olarak açılma özelliği soldadır ! \\
//  ! bunun açılma yönünü anchor ile kontrol ediyoruz ! \\