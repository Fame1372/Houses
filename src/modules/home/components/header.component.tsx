'use client';
import React from 'react';
import AddSharpIcon from '@mui/icons-material/AddSharp';

interface Props {
  onClick?: () => void
}

export default function Header({onClick}: Props) {

  return (
        <div className="header">
          <h3 className="header__title"> Houses </h3>
          <div className="header__icon">
            <AddSharpIcon onClick={onClick} />
          </div>
        </div>
  );
}
