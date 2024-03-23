import { Stack , Skeleton ,  } from "@mui/material"
import { useState } from "react"


function LessonSkeleton() {
    const [loading , setLoading] = useState(true)
  return (
<Stack>
    {loading ? (<Skeleton width={250} height={150} animation='wave' />) : (<img src="https://source.unsplash.com/random/256*256" alt='skeleton' width={250} height={150} />)}
</Stack>
  )
}

export default LessonSkeleton


// ! skeleton kullanarak yükleme delayı getirebiliyoruz ! \\