import React from 'react';
import { Card } from 'antd';
import Country from '../interface/extentedInterface';




export interface Travel{
    Countries: Country[];
}



const Card_box = ({Countries}:Travel) =>{

    return(
    <div className='grid-3'>
        {Countries.map((card: any) => (
            <div className="site-card-border-less-wrapper ">
                <Card title={card.country} bordered={false} style={{ textAlign: "left", width: 500 }}>
                    <img className="imagine" src={card.photo} alt="image"/>
                    <p> City: {card.city}</p>
                    <p> Attraction: {card.attrcations}</p>
                    <p> Hotel: {card.hotel}</p>
                    <p> Stars: {card.stars}</p>
                </Card>
            </div>
        ))}

    </div>

    )
}

export default  Card_box;