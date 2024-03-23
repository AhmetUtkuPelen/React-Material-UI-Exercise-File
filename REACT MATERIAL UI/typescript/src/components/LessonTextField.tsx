import { Stack , TextField ,InputAdornment } from "@mui/material"
import { useState } from "react"

function LessonTextField() {
    const [value , SetValue] = useState('')
  return (
<Stack spacing={2}>
    <Stack direction='row' spacing={2}>
        <TextField variant="standard" label='AD'/>
        <TextField variant="filled" label='AD'/>
        <TextField variant="outlined" label='AD'/>
        <TextField variant="outlined" size="small" color="error" label='AD'/>
        <TextField variant="outlined" helperText='Lütfen adınızı giriniz' type="password" label='AD'/>
        <TextField variant="outlined" helperText='Lütfen adınızı giriniz' disabled type="password" label='AD'/>
        <TextField variant="outlined" helperText='Lütfen adınızı giriniz' InputProps={{readOnly:true}} type="password" label='AD'/>
        <TextField variant="outlined" helperText='Lütfen adınızı giriniz' InputProps={{startAdornment:(<InputAdornment position="start">Selam</InputAdornment>)}} type="text" label='TOPLAM'/>
    </Stack>
    <Stack direction='row'>
        <TextField variant="outlined" type="password" label='bişeyler' helperText={!value ? 'Lutfen Sifrenizi giriniz' : 'Sifrenizi Kimseyle Paylaşmayın' } onChange={(e)=>SetValue(e.target.value)} value={value}/>
    </Stack>
</Stack>
  )
}

export default LessonTextField
