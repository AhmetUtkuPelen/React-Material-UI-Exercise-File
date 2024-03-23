import { Stack , Divider } from "@mui/material"


function LessonStack() {
  return (
<Stack direction={{xs:'column',sm:'row'}} spacing={{xs:1, sm:2 , md:4}} justifyContent='center' alignItems='center' divider={<Divider orientation="vertical" flexItem/>}>
    <div>İTEM1</div>
    <div>İTEM2</div>
    <div>İTEM3</div>
</Stack>
  )
}

export default LessonStack


// !stack te box a göre default olarak display özelliği var => display => column ! \\

//  ! stackteki direction a direk '' yazıp vermememizin sebebi mobil ve bilgisayarda farklı görüntü istemem ! \\