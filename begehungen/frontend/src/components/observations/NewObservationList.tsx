import { topics } from "../../assets/mocks/mockData.tsx"
import ListHeader from "./ListHeader.tsx"
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Stack, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import CheckListItem from "./CheckListItem.tsx"
import { type SyntheticEvent, useState } from "react"

function NewObservationList() {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleAccordionChange = (panel: string) => (_: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box sx={{ mb: "32px" }}>
      {topics.map((topic) => {
        return (
          <div key={topic.title}>
            <ListHeader title={topic.title} link={topic.link} />
            {topic.sections.map((section, index) => {
              return section.title ? (
                <Accordion
                  key={index}
                  expanded={expanded === section.title}
                  onChange={handleAccordionChange(section.title)}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight={"bold"} component={"b"}>
                      {section.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ListHeader link={section.link} />
                    <Stack direction="column" spacing={2}>
                      {section.checklistItems.map((checkListItem, index) => {
                        return <CheckListItem checkListItem={checkListItem} key={index} />
                      })}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              ) : (
                <Stack direction="column" key={index}>
                  {section.checklistItems.map((checkListItem, index) => {
                    return <CheckListItem checkListItem={checkListItem} key={index} />
                  })}
                </Stack>
              )
            })}
            <Divider sx={{ mt: "32px", mb: "32px" }} />
          </div>
        )
      })}
    </Box>
  )
}

export default NewObservationList
