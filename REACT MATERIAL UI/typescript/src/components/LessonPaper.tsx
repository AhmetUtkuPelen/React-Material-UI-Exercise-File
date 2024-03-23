import { Paper , Box } from "@mui/material"


function Lessonpaper() {
  return (
<Box sx={{display:'flex',gap:'50px'}}>
<Paper sx={{width:100,height:100}}></Paper>
<Paper sx={{width:200,height:200}} elevation={10}></Paper>
<Paper sx={{width:150,height:150}} elevation={5}></Paper>
<Paper sx={{width:250,height:250}} variant="outlined"></Paper>
<Paper sx={{width:250,height:250}} variant="outlined" square></Paper>
</Box>
  )
}

export default Lessonpaper
