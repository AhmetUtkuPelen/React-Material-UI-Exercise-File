import { TableHead , TableBody , TableRow , TableCell, Table  } from "@mui/material"

const rows = [
    {name : 'Frozen Yoghurt', calories : 159 , fat : 6 , carbs : 24 , protein : 24},
    {name : 'Sandwich' , calories : 250 , fat : 10 , carbs : 15 , protein : 21},
    {name : 'Eclair' , calories : 220 , fat : 5 , carbs : 25 , protein : 11},
    {name : 'Cupcake' , calories : 150 , fat : 2 , carbs : 12 , protein : 61},
    {name : 'Gingerbread' , calories : 130 , fat : 4 , carbs : 15 , protein : 221},
]


function LessonTable() {
  return (
<Table>
    <TableHead>
        <TableRow>
            <TableCell>Dessert</TableCell>
            <TableCell>Calories</TableCell>
            <TableCell>Fat</TableCell>
            <TableCell>Carbs</TableCell>
            <TableCell>Protein</TableCell>
        </TableRow>
    </TableHead>

    <TableBody>
        {rows.map((row)=>(
            <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
            </TableRow>
        ))}
    </TableBody>

</Table>
  )
}

export default LessonTable