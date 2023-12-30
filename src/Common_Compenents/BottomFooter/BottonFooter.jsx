import React from 'react';
import { Layout } from 'antd';
import './BottomFooter.css';
import ButtonComponent from '../Button/Button';
const { Footer } = Layout;

export default function BottomFooter(props) {
  console.log(props.footerAmount);
  return (
    <div>
      <Footer
        className='footerStyle'
        style={{
          justifyContent: props.footerAmount ? 'space-between' : 'center',
        }}
      >
        {props.footerAmount ? (
          <div className='footerTextContainer'>
            <div className='footertext'>{props.footerText}</div>
            <div className='footerAmount'>
              {props.footerAmount}
              <span style={{ color: '#E74C1B', marginLeft: '10px' }}>$</span>
            </div>
          </div>
        ) : (
          ''
        )}

        <ButtonComponent buttonText={'Checkout'} />
      </Footer>
    </div>
  );
}
