import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import rawBookData from '../../public/static/bookdata.json';
import Head from 'next/head';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  {
    field: 'ISBN',
    headerName: 'ISBN',
    width: 150,
  },
  {
    field: 'Author',
    headerName: 'Author',
    width: 150,
  },
  {
    field: 'Title_Translated',
    headerName: 'Title',
    width: 250,
  },
  {
    field: 'Original_Title',
    headerName: 'Original Title',
    width: 250,
  },
  {
    field: 'Translated_By',
    headerName: 'Translated By',
    width: 150,
  },
  {
    field: 'Korean_Publisher',
    headerName: 'Korean Publisher',
    width: 250,
  },
  {
    // field: 'Korean_Edition_Publication_Date',
    field: 'publicationDate',
    headerName: 'Publication Date',
    width: 150,
  },
  {
    field: 'Original_Publication_Year',
    headerName: 'Original Publication Date',
    width: 200,
  },
  {
    field: 'Genre_1',
    headerName: 'Genre 1',
    width: 230,
  },
  {
    field: 'Genre_2',
    headerName: 'Genre 2',
  },
  {
    field: 'Genre_3',
    headerName: 'Genre 3',
  },
  {
    field: 'Genre_4',
    headerName: 'Genre 4',
  },
];

export default function DataSheet() {
  const processedRows = rawBookData.map((row, index) => ({
    ...row,
    id: index, // Assign the index as a unique ID
    publicationDate: new Date(row.Korean_Edition_Publication_Date)
      .toISOString()
      .split('T')[0],
  }));

  // Update getRowId to return this unique 'id'

  return (
    <div>
      <DataGrid
        rows={processedRows}
        rowHeight={50}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20, 50]}
      />
    </div>
    // <TableContainer component={Paper}>
    //   <Table size="small" aria-label="customized table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>ISBN</TableCell>
    //         <TableCell align="right">Author</TableCell>
    //         <TableCell align="right">Title</TableCell>
    //         <TableCell align="right">Original Title</TableCell>
    //         <TableCell align="right">Translated By</TableCell>
    //         <TableCell align="right">Publisher</TableCell>
    //         <TableCell align="right">Publication Date</TableCell>
    //         <TableCell align="right">
    //           Original Publication Date
    //         </TableCell>
    //         <TableCell align="right">Genre 1</TableCell>
    //         <TableCell align="right">Genre 2</TableCell>
    //         <TableCell align="right">Genre 3</TableCell>
    //         <TableCell align="right">Genre 4</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rawBookData.map((row) => (
    //         <TableRow key={row.ISBN}>
    //           <TableCell component="th" scope="row">
    //             {row.ISBN}
    //           </TableCell>
    //           <TableCell align="right">{row.Author}</TableCell>
    //           <TableCell align="right">
    //             {row.Title_Translated}
    //           </TableCell>
    //           <TableCell align="right">
    //             {row.Original_Title}
    //           </TableCell>
    //           <TableCell align="right">{row.Translated_By}</TableCell>
    //           <TableCell align="right">
    //             {row.Korean_Publisher}
    //           </TableCell>
    //           <TableCell align="right">
    //             {row.Korean_Edition_Publication_Date
    //               ? row.Korean_Edition_Publication_Date.slice(0, 10)
    //               : 'N/A'}
    //           </TableCell>
    //           <TableCell align="right">
    //             {row.Original_Publication_Year}
    //           </TableCell>
    //           <TableCell align="right">{row.Genre_1}</TableCell>
    //           <TableCell align="right">{row.Genre_2}</TableCell>
    //           <TableCell align="right">{row.Genre_3}</TableCell>
    //           <TableCell align="right">{row.Genre_4}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}
