import { Button, FormControl, styled, Table, TextField } from '@mui/material';


export const StyledTextField = styled(TextField) `
  width: 400px;
    '& p': {
      color: red!important;
    },
`

export  const StyledFormControl = styled(FormControl) `
  margin-top: 10px;
  width: 400px;
`

export const StyledButton = styled(Button) `
  width: 400px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #f5e5e5;
  color: #0c0808;

  &:hover {
    background-color: #e1cfcf;
  }
`
export const StyledTable = styled(Table) `
  
`