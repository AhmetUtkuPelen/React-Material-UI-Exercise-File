import { Tab , Tabs , TabPanel , TabList  } from "@mui/joy"

function LessonTabs() {
  return (
<Tabs defaultValue={0}>
    <TabList>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
    </TabList>
    <TabPanel value={0}>First</TabPanel>
    <TabPanel value={1}>Second</TabPanel>
    <TabPanel value={2}>Third</TabPanel>
</Tabs>
  )
}

export default LessonTabs

// ! npm install @mui/joy @emotion/react @emotion/styled ! \\