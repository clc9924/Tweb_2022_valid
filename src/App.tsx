import React from 'react';
import './App.css';
import { LayoutCustom } from './Layouts/LayoutCustom'
import { Forms } from './Form/Forms';
import { FooterNow } from './Layouts/FooterFor';
import Card_box from './Layouts/Card_box';

const countriesList = [
  {
    
    country:"Switzerland",
    city:"Dachsen",
    attrcations:"The Rhine Falls",
    hotel:"Rooms-Zimmer",
    stars:"Five",
    photo:"https://s1.1zoom.me/prev/595/Switzerland_Mountains_Lake_Autumn_Trees_Reflection_594910_600x300.jpg"

  },
  {
    
    country:"Italy",
    city:"Cefalù",
    attrcations:"Catedrala Cefalù",
    hotel:"Hotel Como",
    stars:"Four",
    photo:"https://www.vacationstravel.com/wp-content/uploads/2020/05/hero-2-Sicily-copy.jpeg"

  },
  {
    
    country:"Norway",
    city:"Kristiansand",
    attrcations:"Odderøya",
    hotel:"Citybox Lite Kristiansand",
    stars:"Five",
    photo:"https://miro.medium.com/max/1400/1*cbjT-JtrNb-0FtjxS_we-g@2x.jpeg"
  }
]

  function App() {
    return (
        <>
          <LayoutCustom></LayoutCustom>
          <Card_box
          Countries={countriesList}
          />
          <FooterNow></FooterNow>
        </>
    );
  }
  
  export default App;