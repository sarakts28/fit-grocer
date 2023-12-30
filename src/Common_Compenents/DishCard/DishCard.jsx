import React from 'react'
import { Card, Image } from 'antd';
import "./DishCard.css"
export default function DishCard(props) {
const bodyConatiner={padding: "2%", display: "flex"}

  return (
    <Card className='cardStyle' bodyStyle={bodyConatiner}>
        <div className='imageContainer'>
   <Image  src={props.imageSrc} height={90} width={90}/>
   </div>
<div className='cardDetailContainer'>


<div >Green salad with mashed potatots</div>
<div className='cardQuantityContainer'><div className='cardQuantityStyle'>Quantity 2</div>
<div><span style={{color:"#E74C1B", marginLeft: "10px"}}>$</span> 24.44</div>
</div>

</div>
  </Card>
  )
}
