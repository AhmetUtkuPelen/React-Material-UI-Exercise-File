import { Box,TextField,MenuItem } from "@mui/material"
import { useState } from "react"



function LessonSelect() {
    const [country , setCountry] = useState('')

    // const handleChange = () => {}

  return (
<Box width='250px'>
    <TextField select label='Secim Yap' fullWidth value={country} onChange={(e)=>setCountry(e.target.value)}>
        <MenuItem value='Secim1'>Secim 1</MenuItem>
        <MenuItem value='Secim2'>Secim 2</MenuItem>
        <MenuItem value='Secim3'>Secim 3</MenuItem>
        <MenuItem value='Secim4'>Secim 4</MenuItem>
    </TextField>
</Box>
  )
}

export default LessonSelect