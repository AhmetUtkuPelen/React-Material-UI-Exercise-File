import { Grid , Box} from '@mui/material'


function LessonGrid() {
  return (
    <Box>
<Grid container>
    <Grid xs={6} md={8}>XS=6 BİRİM YER MD=8 BİRİM YER</Grid>
    <Grid xs={6} md={4}>XS=6 BİRİM YER MD=8 BİRİM YER</Grid>

</Grid>

<Grid container marginTop={10}>
    <Grid xs={5}>5 BİRİMLİK YER</Grid>
    <Grid xs={7}>7 BİRİMLİK YER</Grid>
</Grid>

</Box>
  )
}

export default LessonGrid

// ! eğer 12 birimlik yer gridte aşılırsa otomatik olarak aşağıdan devam edip gridlemeye başlar ! \\