'use client';
import {useRouter} from 'next/router';
import Layout from '../../common/components/layout';
import Header from './components/header.component';
import DataHouse from './components/info.component';
import houseImage from '../../../public/home.jpg';

const houseInfo = [
  {
    houseImage: houseImage,
    houseName: 'Stokvisstraat',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage: houseImage,
    houseName: 'Stokvisstraat',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage: houseImage,
    houseName: 'Stokvisstraat',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage: houseImage,
    houseName: 'Stokvisstraat',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage: houseImage,
    houseName: 'Stokvisstraat',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage: houseImage,
    houseName: 'Stokvisstraat',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage: houseImage,
    houseName: 'Stokvisstraat',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage: houseImage,
    houseName: 'Stokvisstraat',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
];
export default function Home() {
  const router = useRouter();

  const handelRegister = () => {
    router.push({
      pathname: '/register',
    });
  };

  return (
    <Layout effect="fade">
      <Header handelRegister={handelRegister} />
      <div  className='house-card'>
        <DataHouse items={houseInfo} />
      </div>
    </Layout>
  );
}
