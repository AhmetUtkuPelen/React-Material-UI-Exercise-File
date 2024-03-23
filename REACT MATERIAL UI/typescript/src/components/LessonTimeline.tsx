import { Timeline , TimelineItem , TimelineSeparator , TimelineConnector , TimelineDot , TimelineContent } from "@mui/lab"



function LessonTimeline() {
  return (
<Timeline>
    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot/>
            <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>Do Something</TimelineContent>
    </TimelineItem>

    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot/>
            <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>Write Code</TimelineContent>
    </TimelineItem>

    <TimelineItem>
        <TimelineSeparator>
            <TimelineDot/>
        </TimelineSeparator>
        <TimelineContent>Go Sleep</TimelineContent>
    </TimelineItem>
</Timeline>
  )
}

export default LessonTimeline
