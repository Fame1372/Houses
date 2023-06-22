'use client';
import {useRouter} from 'next/router';
import Image from 'next/image';
import Layout from '../../common/components/layout';
import Header from './components/header.component';
import DataHouse from './components/info.component';
import houseImage from '../../../public/house.png';
import {useState} from 'react';
import InputSearch from 'common/components/input-search';
import ButtonGroop from 'common/components/button-group';
import HouseInfoItem from './types/house';
import img from '../../../public/notFound.png';
import Menu from '../../common/components/menu'

const houseInfo = [
  {
    houseImage: houseImage,
    houseName: 'Stokvisstraat1',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage: houseImage,
    houseName: 'Stokvisstraat2',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage: houseImage,
    houseName: 'Stokvisstraat3',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage: houseImage,
    houseName: 'Stokvisstraat4',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage: houseImage,
    houseName: 'aaa',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage: houseImage,
    houseName: 'Stokvisstraat6',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage: houseImage,
    houseName: 'Stokvisstraat7',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
  {
    houseImage: houseImage,
    houseName: 'aaaaaa',
    housePrice: '$ 5000.00',
    houseLocation: '1011AA Amsterdam',
    houseArea: '120 m2',
    countBedroom: 1,
    countBathtub: 1,
  },
];
export default function Home() {
  const [data, setData] = useState(houseInfo);
  const [searchData, setSearchData] = useState<
    Array<HouseInfoItem> | undefined
  >([]);
  const [showCountResults, setShowCountResults] = useState(false);
  // const [size , setSize]= useState();
  // const [price , setPrice]= useState();

  const router = useRouter();

  const handleOnClick = () => {
    router.push({
      pathname: '/register',
    });
  };

  const search = (searchKey: string , mode: boolean) => {
    let result;
    result = data.filter((item: HouseInfoItem) =>
      item.houseName.includes(searchKey)
    );
    setSearchData(result && result.length > 0 ? result : undefined);
    setShowCountResults(mode)
  };

  const sort = (id: number) => {
    // if (id === 2) {
    //   const housesSize = data.map((item) => ({
    //     size: item.houseArea,
    //   }));
    //   return console.log(housesSize);
    // } else if (id === 1) {
    //   const housesPrice = data.map((item) => ({
    //     price: item.housePrice,
    //   }));
    //   return console.log(housesPrice);
    // }
  };

  return (
    <Layout effect="fade">
      <Header onClick={handleOnClick} />
      <div className="search">
        <div className="search__input-search">
          <InputSearch handleOnchange={search}  />
        </div>
        <div className="search__button-group">
          <ButtonGroop HandleSort={sort} />
        </div>
      </div>
      <div className="house-card">
        {searchData ? (
          <>
            {showCountResults && (
              <div className="count-results">
                <p>{`${searchData.length} results found`}</p>
              </div>
            )}

            <DataHouse
              items={searchData && searchData.length > 0 ? searchData : data}
            />
          </>
        ) : (
          <div className="notif">
            <Image
              className="notif__image"
              src={img}
              width={300}
              height={200}
              alt="Picture of the author"
            />
            <div className="notif__text">
              <p style={{marginBottom: 2}}>No results found.</p>
              <p style={{marginTop: 0}}>Please try another keyword.</p>
            </div>
          </div>
        )}
      </div>
      <Menu/>
    </Layout>
  );
}
