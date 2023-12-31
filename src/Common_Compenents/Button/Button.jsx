import { Button, ConfigProvider } from 'antd';
import React from 'react';
import './Button.css';

export default function ButtonComponent({ buttonText, buttonClick }) {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: '#E74C1B',
            colorText: '#fff',
            colorPrimaryHover: 'black',
          },
        }}
      >
        <Button shape='round' className='buttonStyle' onClick={buttonClick}>
          {buttonText}
        </Button>
      </ConfigProvider>
    </div>
  );
}
