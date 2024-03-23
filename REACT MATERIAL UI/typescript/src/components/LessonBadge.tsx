import { Stack , Badge } from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';


function LessonBadge() {
  return (
<Stack direction='row' spacing={5}>
    <Badge badgeContent={15} color="secondary">
        <MailIcon color="warning"/>
    </Badge>

    <Badge max={40} badgeContent={50} color="secondary">
        <MailIcon color="warning"/>
    </Badge>

    <Badge badgeContent={15} color="secondary" anchorOrigin={{vertical:'bottom',horizontal:'right'}}>
        <MailIcon color="warning"/>
    </Badge>
</Stack>
  )
}

export default LessonBadge