import React from 'react';
import { InputAdornment, TextField } from '../lib/mui';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


interface Props {
  // children: any;
}

export default function InputIcon({}: Props) {
  return (
    <TextField
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
  );
}
