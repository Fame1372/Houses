import React from 'react';
import { Button , ButtonGroup} from  "../lib/mui";

interface Props {
  // children: any;
}

export default function ButtonGroop({}: Props) {
  return (
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
          <Button>price</Button>
          <Button>size</Button>
        </ButtonGroup>
     );
  }
