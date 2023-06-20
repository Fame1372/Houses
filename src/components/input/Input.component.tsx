"use client"
import React, { FunctionComponent, useState } from "react";
import {FormControl,InputAdornment,TextField,createStyles, makeStyles} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles(() => {
  return createStyles({
    search: {
      margin: "0"
    }
  });
});
interface Props {
  // children: any;
}

export default function InputIcon({}: Props) {
  const { search } = useStyles();
  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };
  const handleClick = (): void => {
    // TODO: Clear the search input
    console.log("clicked the clear icon...");
  };

  return (
    <FormControl className={search}>
    <TextField
      className='input'
      size="small"
      variant="outlined"
      onChange={handleChange}
      placeholder='search for a house'
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            position="end"
            style={{ display: showClearIcon }}
            onClick={handleClick}
          >
            <ClearIcon />
          </InputAdornment>
        )
      }}
    />
  </FormControl>
  );
}
