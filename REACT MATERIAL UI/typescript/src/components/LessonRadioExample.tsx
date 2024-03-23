import { FormControl , FormLabel , FormControlLabel , Radio , RadioGroup , FormHelperText , Button } from "@mui/material"
import { useState } from "react"



function LessonRadioExample() {
    const [value , setValue] = useState('')
    const [helperText , sethelperText] = useState('')
    const [error , setError] = useState(false)

    const handleRadioChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()

        if(value === '1'){
            sethelperText('yanlıs secim')
            setError(false)
        }else if(value === '2'){
            sethelperText('dogru secim')
            setError(false)
        }else{
            sethelperText('Lutfen Bir Secim Yap')
            setError(true)
        }


    }
return (
<form onSubmit={handleSubmit}>
    <FormControl error={error}>
        <FormLabel>Alttan Seçim Yap</FormLabel>
        <RadioGroup onChange={handleRadioChange}>
            <FormControlLabel label='1' value={1} control={<Radio />}/>
            <FormControlLabel label='2' value={2} control={<Radio />}/>
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined">Gönder</Button>
    </FormControl>
</form>
  )
}

export default LessonRadioExample