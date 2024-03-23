import {  AccordionSummary , AccordionDetails , Typography, Accordion ,  } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";


function LessonAccordion() {
    const [expanded , setExpanded] = useState<string | false>(false)
    const handleChange = (panel:string) => (event:React.SyntheticEvent,isExpanded:boolean) => {
        setExpanded(isExpanded ? panel : false)
    }
  return (
<div>
    <div>
    <Accordion>
        <AccordionSummary>
            {<ExpandMoreIcon/>}
            <Typography>First Title</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus fugiat omnis sequi? Quae, nam repellat. Cupiditate facere atque perferendis?</AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary>
            {<ExpandMoreIcon/>}
            <Typography>Second Title</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus fugiat omnis sequi? Quae, nam repellat. Cupiditate facere atque perferendis?</AccordionDetails>
    </Accordion>
    <Accordion disabled>
        <AccordionSummary>
            {<ExpandMoreIcon/>}
            <Typography>Third Title</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus fugiat omnis sequi? Quae, nam repellat. Cupiditate facere atque perferendis?</AccordionDetails>
    </Accordion>
    </div>
    {/* ! SECOND ACCORDION  */}
    <div>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary>
            {<ExpandMoreIcon/>}
            <Typography>First Title</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus fugiat omnis sequi? Quae, nam repellat. Cupiditate facere atque perferendis?</AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary>
            {<ExpandMoreIcon/>}
            <Typography>Second Title</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus fugiat omnis sequi? Quae, nam repellat. Cupiditate facere atque perferendis?</AccordionDetails>
    </Accordion>
    <Accordion disabled>
        <AccordionSummary>
            {<ExpandMoreIcon/>}
            <Typography>Third Title</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ducimus fugiat omnis sequi? Quae, nam repellat. Cupiditate facere atque perferendis?</AccordionDetails>
    </Accordion>
    
    </div>
</div>

  )
}

export default LessonAccordion