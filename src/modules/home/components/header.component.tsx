'use client';
import React from 'react';
import Image from 'next/image';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import InputIcon from 'common/components/input';
import ButtonGroop from 'common/components/button-group';

interface Props {
  handelRegister?: any;
}

export default function Header({handelRegister}: Props) {

  return (
    <>
      <div className="header">
        <div className="header__firstLine">
          <h3 className="header__firstLine__title"> Houses </h3>
          <div className="header__firstLine__icon">
            <AddSharpIcon onClick={handelRegister} />
          </div>
        </div>
        <div className="header__input-search">
          <InputIcon />
        </div>
        <div className="header__button-group">
          <ButtonGroop />
        </div>
      </div>
    </>
  );
}
