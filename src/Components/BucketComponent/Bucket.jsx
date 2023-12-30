import React from 'react';
import './Bucket.css';
import { Image } from 'antd';
import { Images } from '../../Assest/Icons';
import { BottomFooter, DishCard } from '../../Common_Compenents';

export default function Bucket() {
  const dishList = [
    {
      title: 'Green salad with mashed potatots',
      price: 24.44,
      quantity: 2,
      imageSrc: Images.imageDish1,
    },
    {
      title: 'Fresh vegetable salad',
      price: 11.22,
      quantity: 1,
      imageSrc: Images.imageDish2,
    },
    {
      title: 'Mixed salad with strawberries and watermelon',
      price: 12.44,
      quantity: 1,
      imageSrc: Images.imageDish3,
    },
    {
      title: 'Grilled beef steak with mushroom sauce',
      price: 75.81,
      quantity: 3,
      imageSrc: Images.imageDish4,
    },
    {
      title: 'Vegan strawberry cake',
      price: 10.12,
      quantity: 1,
      imageSrc: Images.imageDish5,
    },
  ];

  const buttonClick = () => {
    console.log('Working');
  };

  return (
    <div className='bucketMainContainer'>
      <div className='bucketHeaderElements'>
        <div>
          <Image src={Images.leftArrow} preview={false} onClick={() => {}} />
        </div>
        <div className='bucketHeader'>My Bucket</div>
      </div>

      <div className='bucketDishContainer'>
        {dishList.map((item, index) => {
          return (
            <div id={index} className='bucketEachDish'>
              <DishCard
                imageSrc={item.imageSrc}
                dishName={item.title}
                dishAmount={item.price}
                dishQuantity={item.quantity}
              />
            </div>
          );
        })}
      </div>
      <div>
        <BottomFooter
          footerText={'Total'}
          footerAmount={133.03}
          buttonText={'Checkout'}
          buttonClick={buttonClick}
        />
      </div>
    </div>
  );
}
