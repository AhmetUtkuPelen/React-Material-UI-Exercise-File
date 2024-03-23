import { AppBar , Toolbar , IconButton , Typography , Stack , Button , MenuItem, Menu} from "@mui/material"
import AppsIcon from '@mui/icons-material/Apps';
import { useState } from "react";


function LessonAppBar() {
    const [anchorEl , setAnchorEl] = useState<null | HTMLElement>(null)
    const opeNControl = Boolean(anchorEl)
    const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
  return (
<AppBar>
    <Toolbar>
        <IconButton><AppsIcon sx={{color:'black'}}/></IconButton>
        <Typography variant="h6">AppBar Example</Typography>

        <Stack direction='row' marginLeft='auto'>
            <Button sx={{color:'orange'}}>MainPage</Button>
            <Button sx={{color:'orange'}}>About Us</Button>
            <Button sx={{color:'orange'}}>Products</Button>
            <Button sx={{color:'orange'}}>Prices</Button>
            <Button sx={{color:'orange'}} onClick={handleClick}>Discount</Button>
        </Stack>

        <Menu anchorEl={anchorEl} open={opeNControl} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Product1</MenuItem>
            <MenuItem onClick={handleClose}>Product2</MenuItem>
        </Menu>

    </Toolbar>
</AppBar>
  )
}

export default LessonAppBar
