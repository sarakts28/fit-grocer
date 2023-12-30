import React from 'react';
import './Order.css';
import { Image } from 'antd';
import { Images } from '../../Assest/Icons';
import { BottomFooter } from '../../Common_Compenents';

export default function Order() {
  const buttonClick = () => {
    console.log('Working');
  };

  return (
    <div className='orderMainContainer'>
      <div className='orderHeaderElements'>
        <Image src={Images.leftArrow} preview={false} onClick={() => {}} />
      </div>
      <div className='orderSubElement'>
        <div className='orderTextStyle'>
          "Congratulations! Your Order Has Been Placed!"
        </div>
        <Image src={Images.rider} preview={false} className='orderImageStyle' />
        <div className='orderDetailTextStyle'>
          Thank you for choosing our services! Your order has been successfully
          placed and is now being processed. We appreciate your trust in us and
          look forward to serving you.
        </div>
      </div>
      <div>
        <BottomFooter buttonText={'Return Home'} buttonClick={buttonClick} />
      </div>
    </div>
  );
}
