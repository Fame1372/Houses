'use client';
import {useRouter} from 'next/router';
import Image from 'next/image';
import Layout from '../../common/components/layout';
import Header from './components/header.component';
import DataHouse from './components/info.component';
import {useState, useEffect} from 'react';
import InputSearch from 'common/components/input-search';
import ButtonGroop from 'common/components/button-group';
import HouseInfoItem from './types/house';
import img from '../../../public/notFound.png';
import Swal from 'sweetalert2';
import {houseInfo} from './../../common/data/houseInfo';

export default function Home() {
  const [data, setData] = useState(houseInfo);
  const [sortType, setSortType] = useState(0);
  const [searchData, setSearchData] = useState<Array<HouseInfoItem> | undefined>([]);
  const [showCountResults, setShowCountResults] = useState(false);

  const router = useRouter();

  const handleOnClick = () => {
    router.push({
      pathname: '/register',
    });
  };

  const handleSearch = (searchKey: string, mode: boolean) => {
    let result;
    result = data.filter((item: HouseInfoItem) =>
      item.houseName.includes(searchKey)
    );
    setSearchData(result && result.length > 0 ? result : undefined);
    setShowCountResults(mode);
  };

  const handleDelete = (id: number) => {
    Swal.fire({
      text: ' Are you sure?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      customClass: {
        confirmButton: 'confirmButton',
        cancelButton: 'cancelButton',
      },
      buttonsStyling: false,
      backdrop: true,
    }).then((result) => {
      if (result.isConfirmed) {
        let result;
        result = data.filter((item: HouseInfoItem) => item.id !== id);
        setData(result);
      }
    });
  };

  function compare(
    firstItem: HouseInfoItem,
    secondItem: HouseInfoItem
  ) {
    let result = 0;
    if (sortType === 2) {
      result = firstItem.housePrice < secondItem.housePrice ? -1 : 1;
    } else {
      result = firstItem.houseSize < secondItem.houseSize ? -1 : 1;
    }
    return result;
  }

  const sortItem = (id: number) => {
    setSortType(id);
    houseInfo.sort(compare);
    setData(houseInfo);
  };

  return (
    <Layout effect="fade">
      <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        <Header onClick={handleOnClick} />
        <div className="search">
          <div className="search__input-search">
            <InputSearch handleOnchange={handleSearch} />
          </div>
          <div className="search__button-group">
            <ButtonGroop onItemActive={sortItem} />
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
                handleDelete={handleDelete}
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
      </div>
    </Layout>
  );
}
