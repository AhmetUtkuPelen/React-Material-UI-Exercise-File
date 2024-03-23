import { Breadcrumbs , Link } from "@mui/material"


function LessonBreadCrumb() {
  return (
    <Breadcrumbs separator='=>' maxItems={4}>
        <Link href='#'>PAGE1</Link>
        <Link href='#' underline="none">PAGE2</Link>
        <Link href='#' underline="hover">PAGE3</Link>
        <Link href='#' underline="hover">PAGE4</Link>
        <Link href='#' underline="hover">PAGE5</Link>
        <Link href='#' underline="hover">PAGE6</Link>
        <Link href='#' underline="hover">PAGE7</Link>
        <Link href='#' underline="hover">PAGE8</Link>
    </Breadcrumbs>
  )
}

export default LessonBreadCrumb
