'use client';
import React from 'react';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import CropSharpIcon from '@mui/icons-material/CropSharp';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

interface Props {
  housePrice: any;
  houseSize: any;
  houseName: any;
  houseLocation: any;
  countBedroom: any;
  countBathtub: any;
}

export default function Content({
  housePrice,
  houseSize,
  houseName,
  houseLocation,
  countBedroom,
  countBathtub,
}: Props) {
  return (
    <div className="content">
      <p className="content__name">{houseName}</p>
      <p className="content__price">{`$ ${housePrice}`}</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 5,
          marginBottom: 5
        }}>
        <PlaceOutlinedIcon />
        <p style={{margin: 5, alignItems: 'center', color: 'gray'}}>
          {houseLocation}
        </p>
      </div>
      <div className="content__options">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          }}>
          <BathtubOutlinedIcon />
          <p style={{margin: 5, alignItems: 'center'}}>{countBathtub}</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          }}>
          <BedOutlinedIcon />
          <p style={{margin: 5, alignItems: 'center'}}>{countBedroom}</p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <CropSharpIcon />
          <p style={{margin: 5, alignItems: 'center'}}>{houseSize}</p>
        </div>
      </div>
      <div></div>
      <p className="content__text">
        We gather for about 90-minutes as a group. During this time, we
        introduce ourselves, briefly discuss a verse or passage from the Bible,
        and participate in conversation topics like travel, gardening, pets,
        culture, food, or hobbies. We gather for about 90-minutes as a group.
        During this time, we introduce ourselves,gardening, pets, culture, food,
        or hobbies. We gather for about 90-minutes as a group. During this time,
        we introduce ourselves,
      </p>
    </div>
  );
}
