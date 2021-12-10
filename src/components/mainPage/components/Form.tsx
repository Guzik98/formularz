import React from 'react';
import { InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { StyledTextField, StyledFormControl, StyledButton } from './buttonStyle';
import { FormDataType } from '../types';

const Form = ({ book, setBook, submit, error }: FormDataType): JSX.Element => {
    const firstCharToUpperCase = (value : string) => {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    return (
        <div className={error ? 'form error' : 'form'}>
            <h2>
                Add new book
            </h2>
            <StyledTextField
                required
                label='Book Title'
                margin='dense'
                variant='outlined'
                error={(error && book.title.length < 1) && true}
                value={book.title}
                helperText={(error && book.title.length < 1) && 'This field is required' }
                onChange={(e)=> {
                    setBook((prev) => ({ ...prev, title: firstCharToUpperCase(e.target.value) }))
                }}
            />
            <StyledTextField
                label='Book Author'
                margin='dense'
                variant='outlined'
                value={book.author}
                required
                error={(error && book.author.length < 3) && true}
                helperText={(error && book.author.length < 3) && 'This field need at least 3 characters' }
                onChange={(e)=> {
                    setBook((prev) => ({ ...prev, author: firstCharToUpperCase(e.target.value) }))
                }}
            />
            <StyledFormControl>
                <InputLabel id="demo-multiple-name-label">Category</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={book.category}
                    defaultValue={'Biology'}
                    onChange={(e)=> {
                        setBook((prev) => ({...prev, category: e.target.value }))
                    }}
                    input={<OutlinedInput label="Name" />}
                >
                    <MenuItem value='Biology'>Biology</MenuItem>
                    <MenuItem value='It'>It</MenuItem>
                    <MenuItem value='Fantasy'>Fantasy</MenuItem>
                </Select>
            </StyledFormControl>
            <StyledFormControl>
                <InputLabel id="demo-multiple-name-label">Priority</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={book.priority}
                    label="piority"
                    onChange={(e)=> {
                        setBook((prev) => ({...prev, priority: e.target.value as number}))
                    }}
                    input={<OutlinedInput label="Name" />}
                >
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Three</MenuItem>
                    <MenuItem value={4}>Four</MenuItem>
                    <MenuItem value={5}>Five</MenuItem>
                </Select>
            </StyledFormControl>
            <StyledButton onClick={()=> submit()}>
                submit
            </StyledButton>
        </div>
    );
};

export default Form;