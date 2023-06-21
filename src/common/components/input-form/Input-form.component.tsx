import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

interface Props {
  label : string;
  placeholder: string
}


const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor : '#ffff',
    border: '1px solid',
    borderColor: '#E0E3E7',
    fontSize: 16,
    // width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
  },
}));



export default function CustomizedInputsStyled( {label , placeholder} : Props) {
  return (
    <Box
      component="form"
      noValidate
    >
      <FormControl variant="standard" required className='input-form'>
        <InputLabel shrink htmlFor="bootstrap-input" >
          {label}
        </InputLabel>
        <BootstrapInput defaultValue={placeholder} id="bootstrap-input" />
      </FormControl>
    </Box>
  );
}