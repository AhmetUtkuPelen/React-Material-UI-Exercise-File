import { Button , Stack , ButtonGroup } from "@mui/material"


function LessonButtonGroup() {
  return (
<Stack direction='row'>
    <ButtonGroup variant="contained">
        <Button>BUTONUM</Button>
        <Button>BUTONUM</Button>
        <Button>BUTONUM</Button>
    </ButtonGroup>
    <ButtonGroup variant="outlined">
        <Button>BUTONUM</Button>
        <Button>BUTONUM</Button>
        <Button>BUTONUM</Button>
    </ButtonGroup>
    <ButtonGroup variant="text">
        <Button>BUTONUM</Button>
        <Button>BUTONUM</Button>
        <Button>BUTONUM</Button>
    </ButtonGroup>
    <ButtonGroup variant="contained" orientation="vertical">
        <Button>BUTONUM</Button>
        <Button>BUTONUM</Button>
        <Button>BUTONUM</Button>
    </ButtonGroup>
    <ButtonGroup variant="contained" orientation="vertical" size="large" color="warning">
        <Button>BUTONUM</Button>
        <Button>BUTONUM</Button>
        <Button>BUTONUM</Button>
    </ButtonGroup>
</Stack>
  )
}

export default LessonButtonGroup