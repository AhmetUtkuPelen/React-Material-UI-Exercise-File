import { Accordion , AccordionDetails , AccordionSummary , Paper } from "@mui/material"
import { Masonry } from "@mui/lab"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function LessonMasonry() {
const heights = [150,30,90,70,90,100,150,30,50,80]
  return (
<Masonry spacing={2} columns={3}>{heights.map((height,index)=>
    <Paper key={index}>
        <Accordion sx={{minHeight:height}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                ACCORDION {index +1}
            </AccordionSummary>
            <AccordionDetails>Accordion Details</AccordionDetails>
        </Accordion>
    </Paper>
)}</Masonry>
  )
}

export default LessonMasonry