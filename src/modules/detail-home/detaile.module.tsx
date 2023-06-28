'use client';
import Layout from 'common/components/layout';
import React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import houseInfo from '../../../public/home.jpg';
import { styled } from '@mui/material/styles';
import Content from './components/content.component';


export default function DetailHome() {

  const router = useRouter();
  const {
    // houseImage,
    housePrice,
    houseSize,
    houseName,
    houseLocation,
    countBedroom,
    countBathtub,
  } = router.query;  
  
  return (
    <Layout effect="fade">
      <div className="detail">
        <Image
          className="detail__image"
          src={houseInfo}
          width={130}
          height={5}
          alt="Picture of the author"
        />
        <div className='detail__context'>
          <Content
              housePrice={housePrice}
              houseSize={houseSize}
              houseName={houseName}
              houseLocation={houseLocation}
              countBedroom={countBedroom}
              countBathtub={countBathtub}
          />
        </div>
      </div>
    </Layout>
  );
}
