import React from 'react';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useRouter } from 'next/router';

type Props = {};

export default function Menu({}: Props) {

    const router = useRouter();

    const handleOnClick = () => {
      router.push({
        pathname: '/about',
      });
    };

    const handleOnClicks = () => {
      router.push({
        pathname: '/home',
      });
    };
  
  return (
    <>
      <div className="menu">
        <HomeRoundedIcon className='menu__home' color={'disabled'} onClick={handleOnClicks}/>
        <InfoRoundedIcon className='menu__about' color={'disabled'} onClick={handleOnClick} />
      </div>
    </>
  );
}
