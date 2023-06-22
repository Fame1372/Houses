'use client';
import React from 'react';
import Image from 'next/image';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import CropSharpIcon from '@mui/icons-material/CropSharp';
import HouseInfoItem from './../types/house';

interface Props {
  items: Array<HouseInfoItem>;
}

export default function House({items}: Props) {
  return (
    <>
      {items?.map((item: any) => (
        <div className="info">
          <Image
            className="info__image"
            src={item.houseImage}
            width={130}
            height={110}
            alt="Picture of the author"
          />
          <div className="info__text">
            <div className="info__text__title">
              <p>{item.houseName}</p>
              <div className="info__text__title__edit-icon">
                <DeleteOutlineIcon />
                <EditIcon />
              </div>
            </div>
            <p style={{color:'gray'}}>{item.housePrice}</p>
            <p style={{color:'gray'}}>{item.houseLocation}</p>
            <div className="info__text__options">
              <div style={{display: 'flex', flexDirection: 'row' , alignItems:'center',marginRight: 10}}>
                <BathtubOutlinedIcon />
                <p style={{margin: 5, alignItems: 'center'}}>
                  {item.countBathtub}
                </p>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', alignItems:'center' , marginRight: 10}}>
                <BedOutlinedIcon />
                <p style={{margin: 5, alignItems: 'center'}}>
                  {item.countBedroom}
                </p>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', alignItems:'center'}}>
                <CropSharpIcon />
                <p style={{margin: 5, alignItems: 'center'}}>
                  {item.houseArea}
                </p>
              </div>
            </div> 
          </div> 
        </div>
      ))}
    </>
  );
}
