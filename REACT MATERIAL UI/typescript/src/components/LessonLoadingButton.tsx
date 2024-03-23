import { Stack } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import { useState } from "react"


function LessonLoadingButton() {
  const [value , setValue] = useState(false)
  return (
<Stack direction='row'>
    <LoadingButton loading>SAVE</LoadingButton>
    <LoadingButton loading={value} variant="outlined" onClick={()=>setValue(true)}>SAVE</LoadingButton>
</Stack>
  )
}

export default LessonLoadingButton


//  ! npm install @mui/lab ! \\