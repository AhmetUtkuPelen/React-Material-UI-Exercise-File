import { Stack , Alert , AlertTitle } from "@mui/material"


function LessonAlert() {
  return (
<Stack spacing={4}>
    <Alert severity="error">Alert Title</Alert>
    <Alert severity="warning">Alert Title</Alert>
    <Alert severity="info">Alert Title</Alert>
    <Alert severity="success"><AlertTitle>Alert Title</AlertTitle></Alert>
</Stack>
  )
}

export default LessonAlert