import React from 'react';
import { Card, Image } from 'antd';
import './ProductCard.css';
import { Images } from '../../Assest/Icons';
import { useNavigate } from 'react-router-dom';

export default function ProductCard(props) {
  const navigator = useNavigate();
  const bodyConatiner = {
    padding: '0%',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  };

  return (
    <Card
      className='prodCardStyle'
      bodyStyle={bodyConatiner}
      onClick={() => {
        navigator('/product');
      }}
    >
      <Image src={props.item.productImag} preview={false} />
      <div className='prodNameStyle'>{props.item.productName}</div>
      <div className='prodTextStyle prodNameStyle'>
        <div>
          <span style={{ color: '#E74C1B', marginRight: '5px' }}>$</span>
          {props.item.productPrice}
        </div>
        <div>
          <Image src={Images.heart} preview={false} width={18} height={18} />
        </div>
      </div>
    </Card>
  );
}
