import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import { useState } from "react"

export const AccordionMui = () => {

  const [expanded, setExpanded] = useState<string | false>(false)
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <div>
      <Accordion expanded={expanded === 'panel1'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}>
        <AccordionSummary id='panel1-header'
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Iste eius, blanditiis
            natus impedit deleniti libero similique
            explicabo, nesciunt veritatis repellat
            quibusdam id doloremque obcaecati alias
            numquam iusto, unde eaque quo.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>

      <Accordion expanded={expanded === 'panel2'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}>
        <AccordionSummary id='panel2-header'
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Iste eius, blanditiis
            natus impedit deleniti libero similique
            explicabo, nesciunt veritatis repellat
            quibusdam id doloremque obcaecati alias
            numquam iusto, unde eaque quo.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>

      <Accordion expanded={expanded === 'panel3'}
        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}>
        <AccordionSummary id='panel3-header'
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Iste eius, blanditiis
            natus impedit deleniti libero similique
            explicabo, nesciunt veritatis repellat
            quibusdam id doloremque obcaecati alias
            numquam iusto, unde eaque quo.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br></br>
    </div>
  )
}