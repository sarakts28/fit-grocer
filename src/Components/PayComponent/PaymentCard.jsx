import React, { useState } from 'react';
import { Card, Image, Radio, Divider } from 'antd';
import './Payment.css';
import { Images } from '../../Assest/Icons';
export default function PaymentCard() {
  const [value, setValue] = useState(1);

  const bodyConatiner = {
    padding: '2%',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const paymentList = [
    { payImage: Images.payment1, payTitle: 'Debit/Credit card', radioValue: 1 },
    { payImage: Images.payment2, payTitle: 'PayPal', radioValue: 2 },
    { payImage: Images.payment3, payTitle: 'Payoneer', radioValue: 3 },
  ];

  return (
    <Card className='paymentCardStyle' bodyStyle={bodyConatiner}>
      {paymentList.map((item, index) => {
        return (
          <>
            <div className='paymentEachCardStyle'>
              <Image src={item.payImage} preview={false} />

              <div className='paymentCardNameStyle'>{item.payTitle}</div>
              <Radio.Group
                onChange={onChange}
                value={value}
                className='paymentCardRadioStyle'
              >
                <Radio value={item.radioValue} />
              </Radio.Group>
            </div>
            {index < 2 ? <Divider /> : ''}
          </>
        );
      })}
    </Card>
  );
}
