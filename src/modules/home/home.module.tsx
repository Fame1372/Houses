'use client';
import Layout from '../../common/components/layout';
import Header from './components/header.component';
import DtaHouse from './components/info.component';
import houseImage from '../../../public/download.jpg';


const houseInfo =[
  {
    houseImage:houseImage ,
    houseName: 'Stokvisstraat',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage:houseImage ,
    houseName: 'Stokvisstraat',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage:houseImage ,
    houseName: 'Stokvisstraat',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage:houseImage ,
    houseName: 'Stokvisstraat',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  }
]
export default function Home() {
  return (
    <Layout effect='fade'>
      <Header/>
      <DtaHouse items={houseInfo}/>
    </Layout>
  );
}
