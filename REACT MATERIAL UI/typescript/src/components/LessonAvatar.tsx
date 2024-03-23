import { Stack , Avatar , AvatarGroup } from "@mui/material"


function LessonAvatar() {
  return (
<Stack>

<Stack direction='row' spacing={4}>
    <AvatarGroup>
        <Avatar sx={{marginRight:10}} src="https://randomuser.me/api/portraits/women/56.jpg"/>
        <Avatar sx={{marginRight:10}} src="https://randomuser.me/api/portraits/men/56.jpg"/>
        <Avatar sx={{marginRight:10}} src="https://randomuser.me/api/portraits/women/51.jpg"/>
        <Avatar sx={{marginRight:10}} src="https://randomuser.me/api/portraits/women/6.jpg"/>
    </AvatarGroup>

    <AvatarGroup>
        <Avatar variant="square" sx={{marginRight:10,bgcolor:'primary.light',width:50,height:50}}>Name</Avatar>
        <Avatar sx={{marginRight:10,bgcolor:'success.light',width:70,height:70}}>Name2</Avatar>
        <Avatar src="https://randomuser.me/api/portraits/women/36.jpg" />
    </AvatarGroup>
</Stack>

<Stack>
<AvatarGroup max={4}>
        <Avatar src="https://randomuser.me/api/portraits/women/34.jpg"/>
        <Avatar src="https://randomuser.me/api/portraits/women/35.jpg"/>
        <Avatar src="https://randomuser.me/api/portraits/women/36.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/women/37.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/women/38.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/women/39.jpg" />
    </AvatarGroup>
</Stack>

</Stack>

  )
}

export default LessonAvatar