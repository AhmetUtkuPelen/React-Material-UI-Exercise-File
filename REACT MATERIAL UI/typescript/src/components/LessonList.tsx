import { List , ListItem , ListItemButton , ListItemText, ListItemIcon , Divider, Stack } from "@mui/material"
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';



function LessonList() {
  return (
    <Stack>

<List>
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <InboxIcon />
                <ListItemText primary='BOX'/>
            </ListItemIcon>

            <ListItemIcon>
                <DraftsIcon />
                <ListItemText primary='BOX2'/>
            </ListItemIcon>
        </ListItemButton>
    </ListItem>
</List>
<Divider/>

<List>
    <ListItem>
        <ListItemButton>
            <ListItemIcon>

                <ListItemText primary='BOX3'/>
            </ListItemIcon>

            <ListItemIcon>

                <ListItemText primary='BOX4'/>
            </ListItemIcon>
        </ListItemButton>
    </ListItem>
</List>

</Stack>
  )
}

export default LessonList
