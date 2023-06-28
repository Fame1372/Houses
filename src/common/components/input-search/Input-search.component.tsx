'use client';
import React, {FunctionComponent, useState , useEffect} from 'react';
import {
  FormControl,
  InputAdornment,
  TextField,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import HouseInfoItem from './../../../modules/home/types/house';

// const useStyles = makeStyles(() => {
//   return createStyles({
//     search: {
//       margin: '0',
//     },
//   });

// });

interface Props{
  handleOnchange : (searchKey : string , mode : boolean) => void
}

export default function InputSearch({ handleOnchange } : Props) {
  const [value, setValue] = useState('');
  const [showClearIcon, setShowClearIcon] = useState('none');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === '' ? 'none' : 'flex');
    setValue(event.target.value);
    handleOnchange(event.target.value , event.target.value === '' ? false : true)
  };

  const handleClick = (): void => {
    // TODO: Clear the search input
    setValue('');
    handleOnchange('' , false)
  };

  return (
    <FormControl className="input-search ">
      <TextField
        size="small"
        variant="outlined"
        value={value}
        onChange={handleChange}
        placeholder="search for a house"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" >
              <SearchIcon style ={ {color: 'gray'}} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              style={{display: showClearIcon}}
              onClick={handleClick}>
              {value && <ClearIcon />}
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
}
