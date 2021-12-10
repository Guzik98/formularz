import React from 'react';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { DisplayDataType } from '../types';
import { StyledTable } from './buttonStyle';

const Display = ( { books }: DisplayDataType): JSX.Element => {
    return (
        <div className='display-book'>
            <TableContainer component={Paper}>
                <StyledTable sx={{ width: 'inherit' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Author</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">Priority</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{index}</TableCell>
                                <TableCell align="center">{row.title}</TableCell>
                                <TableCell align="center">{row.author}</TableCell>
                                <TableCell align="center">{row.category}</TableCell>
                                <TableCell align="center">{row.priority}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </StyledTable>
            </TableContainer>
        </div>
    );
};

export default Display;