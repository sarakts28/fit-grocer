import React, { useState } from 'react';
import './Product.css';
import { BottomFooter } from '../../Common_Compenents';
import { Image } from 'antd';
import { Images } from '../../Assest/Icons';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const buttonClick = () => {
    navigate('/bucket');
  };

  return (
    <div className='productMainContainer'>
      <div className='productSubContainer'>
        <div className='productHeaderElements'>
          <div>
            <Image src={Images.leftArrow} preview={false} onClick={() => {}} />
          </div>
          <div>
            <Image
              src={Images.heart}
              preview={false}
              onClick={() => {
                navigate(-1);
              }}
            />
          </div>
        </div>

        <div className='productTextContainer'>
          <div>Grilled Beef Steak with Mushroom sauce</div>
          <div className='productSubText'>By Steak house</div>
          <div className='productRatingContainer'>
            <Image
              src={Images.filledStart}
              preview={false}
              width={25}
              height={25}
            />
            <div className='productRatingText'>4.5</div>
          </div>
        </div>
        <div className='productQuantityContainer'>
          <div className='productQuantityDetail'>
            <Image
              src={Images.addSign}
              preview={false}
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            />

            <div className='productNumStyle'>{quantity}</div>
            <Image
              src={Images.minusSign}
              preview={false}
              onClick={() => {
                setQuantity(quantity - 1);
              }}
            />
          </div>
          <div className='productImageContainer'>
            <Image
              src={Images.imageHalfDish}
              preview={false}
              className='productImageStyle'
            />
          </div>
        </div>
        <div className='productDescriptionContainer'>
          <div className='productDescriptionStyle'>Description</div>
          <div className='productDescriptionDetailsStyle'>
            Indulge in the mouthwatering delight of a perfectly grilled beef
            steak generously topped with a rich and savory mushroom sauce.
          </div>
        </div>
      </div>
      <div>
        <BottomFooter
          footerText={'Price'}
          footerAmount={25.27}
          buttonText={'Add to Cart'}
          buttonClick={buttonClick}
        />
      </div>
    </div>
  );
}
