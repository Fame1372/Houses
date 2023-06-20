"use client"
import React from 'react';
import Image from 'next/image'


// interface Props {
//   imageHouse: any;
//   houseName: string;
//   price : string;
//   location: string;
//   area : string;
//   CountBedroom : number;
// }

export default function House({houseName ,price,location,area, CountBedroom}: Props) {
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
            <p>stokvisstraat132</p>
            <p>$ 5000</p>
            <p>1011AAAmsterdam</p>
            <div className='card__house__info__options'>
              <p>1</p>
              <p>120 m2</p>
            </div>
          </div>
        </div>
    </div>
  </>

}
