import React from 'react';
import './Payment.css';
import { Image } from 'antd';
import { Images } from '../../Assest/Icons';
import { BottomFooter } from '../../Common_Compenents';
import PaymentCard from './PaymentCard';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const navigate = useNavigate();

  const buttonClick = () => {
    navigate('/order');
  };

  const orderList = [
    '1x Green salad ',
    '1x fresh vegetable',
    '1x Mixed salad',
    '3x Grilled steak',
    '1x vegan cake',
  ];

  return (
    <div className='paymentMainContainer'>
      <div className='paymentHeaderElements'>
        <div>
          <Image
            src={Images.leftArrow}
            preview={false}
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <div className='paymentHeader'>Checkout</div>
      </div>
      <div className='paymentContainer'>
        <div className='paymentDetailContainer'>
          <div className='paymentSubHeader'>Payment</div>
          <div className='paymentCardComponentStyle'>
            <PaymentCard />
          </div>

          <div className='paymentDeliverDStyle'>Delivery Detail</div>
          <div className='paymentSubDStyle'>
            789 Maple Street, Los Angeles, CA 90001 (888) 987-6543
          </div>
          <div className='paymentDeliverDStyle'>Order details</div>
          <div className='paymentOrdDContainer'>
            {orderList.map((item) => {
              return <div className='paymentOrderItemTextStyle'>{item}</div>;
            })}
          </div>
        </div>

        <div className='paymentImageContainer'>
          <Image src={Images.rider} preview={false} width={500} />
        </div>
      </div>
      <div>
        <BottomFooter
          footerText={'Total'}
          footerAmount={133.03}
          buttonText={'Pay Now'}
          buttonClick={buttonClick}
        />
      </div>
    </div>
  );
}
