import { Stack , Dialog , DialogContent , DialogContentText , Button , DialogActions, DialogTitle } from "@mui/material"
import { useState } from "react"


function LessonDialog() {
    const [dialogOpen , setDialogOpen] = useState(false)
  return (
<Stack>
    <Button onClick={()=>setDialogOpen(true)}>OPEN</Button>
    <Dialog open={dialogOpen} onClose={()=>setDialogOpen(false)}><DialogTitle>Hello There</DialogTitle><DialogContent><DialogContentText>Some Explanation</DialogContentText><DialogActions><Button onClick={()=>setDialogOpen(false)}>Choice1</Button><Button onClick={()=>setDialogOpen(false)}>Choice2</Button></DialogActions></DialogContent></Dialog>
</Stack>
  )
}

export default LessonDialog