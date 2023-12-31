import { Image } from 'antd';
import React from 'react';
import { Images } from '../../Assest/Icons';

export default function CategoryCard({ windowSize }) {
  console.log(windowSize);
  var randomColor = require('randomcolor');
  const category = [
    {
      catName: 'Chicken',
      catImage: Images.imageDish7,
      catColor: randomColor(),
    },
    {
      catName: 'Salad',
      catImage: Images.imageDish6,
      catColor: randomColor(),
    },
    {
      catName: 'Steak',
      catImage: Images.imageDish7,
      catColor: randomColor(),
    },
    {
      catName: 'Salad',
      catImage: Images.imageDish7,
      catColor: randomColor(),
    },
  ];

  const categoryArray = [
    {
      catName: 'Chicken',
      catImage: Images.imageDish7,
      catColor: randomColor(),
    },
    {
      catName: 'Salad',
      catImage: Images.imageDish6,
      catColor: randomColor(),
    },
    {
      catName: 'Steak',
      catImage: Images.imageDish7,
      catColor: randomColor(),
    },
  ];

  return (
    <div className='categoryContainer'>
      {windowSize < 520
        ? categoryArray.map((item) => {
            return (
              <div
                style={{ background: item.catColor }}
                className='catgoryCardContainer'
              >
                <div className='catgoryTextStyle'>{item.catName}</div>
                <Image src={item.catImage} preview={false} />
              </div>
            );
          })
        : category.map((item) => {
            return (
              <div
                style={{ background: item.catColor }}
                className='catgoryCardContainer'
              >
                <div className='catgoryTextStyle'>{item.catName}</div>
                <Image src={item.catImage} preview={false} />
              </div>
            );
          })}
    </div>
  );
}
