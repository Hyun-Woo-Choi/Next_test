import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DataSheet() {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>ISBN</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Original Title</TableCell>
            <TableCell align="right">Translated By</TableCell>
            <TableCell align="right">Publisher</TableCell>
            <TableCell align="right">Publication Date</TableCell>
            <TableCell align="right">
              Original Publication Date
            </TableCell>
            <TableCell align="right">Genre 1</TableCell>
            <TableCell align="right">Genre 2</TableCell>
            <TableCell align="right">Genre 3</TableCell>
            <TableCell align="right">Genre 4</TableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ISBN}>
              <TableCell component="th" scope="row">
                {row.ISBN}
              </TableCell>
              <TableCell align="right">{row.Author}</TableCell>
              <TableCell align="right">{row.Title}</TableCell>
              <TableCell align="right">
                {row.OriginalTitle}
              </TableCell>
              <TableCell align="right">
                {row.TranslatedBy}
              </TableCell>
              <TableCell align="right">{row.Publisher}</TableCell>
              <TableCell align="right">
                {row.PublicationDate ? row.PublicationDate.slice(0, 10) : "N/A"}
              </TableCell>
              <TableCell align="right">
                {row.OriginalPublicationDate}
              </TableCell>
              <TableCell align="right">{row.Genre1}</TableCell>
              <TableCell align="right">{row.Genre2}</TableCell>
              <TableCell align="right">{row.Genre3}</TableCell>
              <TableCell align="right">{row.Genre4}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  );
}
