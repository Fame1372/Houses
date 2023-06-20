"use client"
import React from 'react';
import  ButtonGroup  from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@mui/styles';


interface Props {
  // children: any;
}


//   const useStyles = () => makeStyles({
//   root: {
//     background: "#A5A4A3",
//     borderRadius: 10,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 40,
//     width : '100px',
//     padding: '10px 140px',
//     borderRight: 'black',
//     "&:focus": {
//       background: "#BF4825"
//     },
//     "&:hover": {
//       background:  "#7F7C7A"
//     },
//     "&:not(:last-of-type)" : {
//       borderColor:"#BF4825"
//     }
//   },
// });



export default function ButtonGroop({}: Props) {

  // const classes: any = useStyles();


  return (
        <ButtonGroup
          disableElevation
          className='button'
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button > price </Button>
          <Button > size </Button>
        </ButtonGroup>
     );
  }
