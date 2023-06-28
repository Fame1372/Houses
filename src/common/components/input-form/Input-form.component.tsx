// import * as React from 'react';
// import { alpha, styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import  classnames  from 'classnames';

// interface Props {
//   label : string;
//   placeholder: string;
//   className?: string
// }

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   'label + &': {
//     marginTop: theme.spacing(3),
//   },
//   '& .MuiInputBase-input': {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor : '#ffff',
//     border: '1px solid',
//     borderColor: '#E0E3E7',
//     fontSize: 16,
//     // width: 'auto',
//     padding: '10px 12px',
//     transition: theme.transitions.create([
//       'border-color',
//       'background-color',
//       'box-shadow',
//     ]),
//   },
// }));

// export default function CustomizedInputsStyled( {label , placeholder ,className} : Props) {
//   return (
//     <Box
//       component="form"
//       noValidate
//     >
//       <FormControl variant="standard" required  className={classnames('input-form' , className)}>
//         <InputLabel shrink htmlFor="bootstrap-input" >
//           {label}
//         </InputLabel>
//         <BootstrapInput defaultValue={placeholder} id="bootstrap-input" />
//       </FormControl>
//     </Box>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import classnames from 'classnames';

interface Props {
  id?: string;
  label: string;
  placeholder?: string;
  className?: string;
  onchange?: any;
}

export default function HelperTextMisaligned({
  placeholder,
  label,
  className,
  id,
  onchange,
}: Props) {
  return (
    <div className='input-form' >
      <label className='input-form__label'>{label}</label>
      <input
        className={classnames(className, 'input-form__text')}
        placeholder={placeholder}
        id={id}
        onChange={onchange}
      />
    </div>
  );
}
