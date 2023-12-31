import React, { useEffect, useState } from 'react';
import { Image } from 'antd';
import { Images } from '../../Assest/Icons';
import './Dashboard.css';
import CategoryCard from './CategoryCard';
import { ProductCard } from '../../Common_Compenents';
export default function Dashboard() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const productList = [
    {
      productName: 'Green salad with mashed potatots',
      productImag: Images.imageDish8,
      productPrice: 25.5,
    },
    {
      productName: 'Fresh vegetable salad',
      productImag: Images.imageDish9,
      productPrice: 11.5,
    },
    {
      productName: 'Green salad',
      productImag: Images.imageDish1,
      productPrice: 12.5,
    },
    {
      productName: 'Green salad with mashed potatots',
      productImag: Images.imageDish3,
      productPrice: 25.5,
    },
    {
      productName: 'Fresh Cake',
      productImag: Images.imageDish5,
      productPrice: 28.5,
    },
  ];

  const renderMobMenuBar = () => {
    return (
      <div className='mobMenu'>
        <div className='mobMenuContainer'>
          <Image src={Images.icon1} />
          <Image src={Images.heart} />
          <Image src={Images.icon2} />
          <Image src={Images.icon4} />
          <Image src={Images.icon3} />
        </div>
      </div>
    );
  };

  const renderMenuBar = () => {
    return (
      <div className='desktopMenu'>
        <Image src={Images.icon3} width={50} height={50} />
      </div>
    );
  };

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, [windowSize]);

  return (
    <div className='dashMainContainer'>
      <div className='dashHeaderElements'>
        <div className='dashHeaderStyle'>
          <div className='dashNameStyle'>
            <span style={{ marginRight: '10px' }}>Hey Danyal</span>
            <Image src={Images.wavingHand} preview={false} />
          </div>
          <div className='dashSubNameStyle'>It’s dinner time!</div>
        </div>
        <div>
          <Image src={Images.searchIcon} preview={false} />
        </div>
      </div>

      <div className='dashHeaderElements'>
        <div className='dashCatStyle'>Categories</div>
        <div className='dashSeeStyle dashCatStyle'>See All</div>
      </div>

      {/* render category card */}
      <div className=''>
        <CategoryCard windowSize={windowSize} />
      </div>

      <div className='dashHeaderElements'>
        <div className='dashCatStyle'>Recommended Items</div>
        <div className='dashSeeStyle dashCatStyle'>Filter</div>
      </div>
      <div className='dashProductContainer'>
        {productList.map((item) => {
          return <ProductCard item={item} />;
        })}
      </div>

      {renderMobMenuBar()}
      {renderMenuBar()}
    </div>
  );
}
