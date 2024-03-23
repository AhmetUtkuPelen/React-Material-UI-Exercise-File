import { CircularProgress, Stack , LinearProgress } from "@mui/material"


function LessonProgress() {
  return (
<Stack spacing={2}>
    <CircularProgress/>
    <CircularProgress color="warning"/>
    <CircularProgress variant="determinate" value={50}/>
    <LinearProgress/>
    <LinearProgress color="warning" variant="determinate" value={25}/>
</Stack>
  )
}

export default LessonProgress