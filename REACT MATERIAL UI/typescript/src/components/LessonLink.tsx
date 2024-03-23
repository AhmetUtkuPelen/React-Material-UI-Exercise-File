import { Link , Box } from "@mui/material"


function LessonLink() {
  return (
<Box display='grid'>
     <Link href='https://www.sporx.com/'>Link1</Link>
     <Link href='https://www.sporx.com/' color='error'>Link2</Link>
     <Link href='https://www.sporx.com/' color='inherit'>Link3</Link>
     <Link href='https://www.sporx.com/' color='inherit' underline="hover">Link4</Link>
     <Link href='https://www.sporx.com/' color='inherit' underline="hover" onClick={()=>{alert('TIKLADIN')}}>Link5</Link>
</Box>
  )
}

export default LessonLink