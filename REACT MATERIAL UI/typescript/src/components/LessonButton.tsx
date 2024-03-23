import { Button,Stack } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';


function LessonButton() {
  return (
<Stack spacing={4}>
    <Stack direction='row' spacing={3}>
        <Button variant="text">YAZI</Button>
        <Button variant="outlined">OUTLINED</Button>
        <Button variant="contained">CONTAINED</Button>
    </Stack>
    <Stack direction='row' spacing={4} >
        <Button variant="text" color="success">Success</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="info">Info</Button>
    </Stack>
    <Stack direction='column' spacing={4} >
        <Button variant="contained" color="success">Success</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="info">Info</Button>
    </Stack>
    <Stack direction='row' spacing={2} display='block' >
        <Button variant="contained" color="info" size="small">Success</Button>
        <Button variant="contained" color="info" size="medium">Success</Button>
        <Button variant="contained" color="info" size="large">Success</Button>
    </Stack>
    <Stack direction='row' spacing={3}>
        <AddIcon color="error"/>
        <Button variant="contained" startIcon={<AddIcon />}>ARTTIR SOLDA</Button>
        <Button variant="contained" endIcon={<AddIcon/>} onClick={()=>alert('TIKLADIM')}>ARTTIR SAĞDA</Button>
    </Stack>
</Stack>
  )
}

export default LessonButton