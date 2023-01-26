import {
  Box,
  Typography,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material";
import React,{useState} from "react";
import { TableCell } from "@mui/material";

import AddRow from "./AddRow";
import styled from "@emotion/styled";


const Cells= styled(TableCell)`
        padding: 7px 5px;
        border: 1px solid rgba(224, 224, 224, 1);
        border-collapse: collapse;
`

export default function CreateTable({ text, data , setData }) {
const [rows,addRows]= useState([0]);

  return (
    <Box>
      <Typography mt={2} mb={2}>
        {text}
      </Typography>

      <Table
        sx={{ minWidth: "100%", border: "1px solid rgba(224, 224, 224, 1)" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <Cells ></Cells>
            <Cells >KEY</Cells>
            <Cells >VALUE</Cells>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              rows.map((row,index) =>(
                <AddRow
                 addRows={addRows} 
                 rowId={index}
                 key={index}
                 data={data}
                 setData={setData}

                />
              ))
            }
        </TableBody>
      </Table>
    </Box>
  );
}
