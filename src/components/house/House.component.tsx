"use client"
import React from 'react';
import Image from 'next/image'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import CropSharpIcon from '@mui/icons-material/CropSharp';



// interface Props {
//   imageHouse: any;
//   houseName: string;
//   price : string;
//   location: string;
//   area : string;
//   CountBedroom : number;
// }

// export default function House({houseName ,price,location,area, CountBedroom}: Props) {
  export default function House() {

  return <>
  <div className='card'>
      <div className='card__house'>
        <Image
            className='card__house__image'
            src="/download.jpg"
            width={130}
            height={110}
            alt="Picture of the author"
          />
          <div className='card__house__info'>
            <div className='card__house__info__edit'>
                <p>stokvisstraat132</p>
                <div className='card__house__info__edit-icon'>
                    <DeleteOutlineIcon/>
                    <EditIcon/>
                </div>
            </div>
            <p>$ 5000</p>
            <p>1011AAAmsterdam</p>
            <div className='card__house__info__options'>
              <div style={{display: 'flex',flexDirection:'row'}}>
              <BathtubOutlinedIcon/>
              <p style={{marginLeft:5 , alignItems:'center'}}>1</p>
              </div>
              <div style={{display: 'flex',flexDirection:'row' }}>
              <BedOutlinedIcon />
              <p style={{marginLeft:5 , alignItems:'center'}}>150</p>
              </div>
              <div style={{display: 'flex',flexDirection:'row'}}>
              <CropSharpIcon/>
              <p style={{marginLeft:5 , alignItems:'center'}}>m3</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </>

}
