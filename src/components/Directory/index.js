import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';


import Cake1 from './../../assets/cake_1.png';

import Muffin1 from './../../assets/muffin_1.png';

import Donut1 from './../../assets/donut_1.png';

import Cake from './../../assets/cake.png';

import Muffin from './../../assets/muffin.png';

import Donut from './../../assets/donut.png';

import Facebook from './../../assets/facebook.png';

import Instagram from './../../assets/instagram.png';

import Twitter from './../../assets/twitter.png';
import Button from './../../components/forms/Button';

import './styles.scss';

const sliderImages = [{ image: Cake }, { image: Donut }, { image: Muffin }];

// function imgSlider(anything) {
//   document.querySelector('.3dBakery').src = anything;
// }

const Directory = (props) => {
  const history = useHistory();
  const[buttonValue, setButtonValue]=useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const handleClick = (index) => 
  {setSelectedImageIndex(index);
    setButtonValue(index)
    // if (index ==1){
    // return "Cake";}
    // if (index ==2){
    //   return "Donut";
    // }
    // if(index==3){
    //   return "Muffin"
    // };
  }

  const handlenextPage=(buttonValue)=>{

  if (buttonValue ==0){
    history.push(`/Cake`);}
    if (buttonValue==1){
      history.push(`/Donut`);
    }
    if(buttonValue==2){
      history.push(`/Muffin`);
    }
  }

  return (
    <div className='directory'>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Viga&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap'
        rel='stylesheet'
      />
      <title>Bake Factory</title>
      <link rel='stylesheet' href='css/styles.css' />
      <header>
        <div className='left-side'></div>
        <div className='title'>
          <h1>BAKE FACTORY</h1>
        </div>
        <br></br>
      </header>
      <div className='container'>
        <div className='left-side'>
          <h1>
            Design your Cake, Donut, and Muffin <br />
            Customize it in<span className='green'> 3D Model </span>
          </h1>
          <br></br>
          <p>
            We are the top bakery online business, providing a wide range of
            beautifully adorned and delicious cakes. Our bakery is well-known in
            the neighbourhood for providing exquisite pastries for any special
            occasion, big or small.
            <br />
            <br></br>
            Experience and dedication are what make us popular among our loyal
            consumers.
            <br />
            <br></br>
            We utilise only the finest ingredients to create cakes that not only
            look beautiful but also taste divine. To provide a wonderful
            patisserie experience, all of our baked goods are created fresh to
            order.
          </p>
        </div>
        <div className='right-side'>
          <img src={sliderImages[selectedImageIndex].image} alt='' />
          <div className='buttons'>
            <div className='buttons1'>
          <Button onClick={() => history.push(`/Search`)}>
        All Product
      </Button>
      </div>
      <div className='buttons2'>
          <Button onClick={() => handlenextPage(buttonValue)} >
        customise
      </Button>
      </div>
      </div>
          <div className='box'>
            <a href='www.facebook.com'>
              <img className='facebook' src={Facebook} alt='' />
            </a>
            <a href='#'>
              {' '}
              <img src={Instagram} alt='' />
            </a>
            <a href='#'>
              {' '}
              <img src={Twitter} alt='' />
            </a>
          </div>
        </div>
      </div>
      <div className='thumb'>
        {sliderImages.map((sliderImage, index) => (
          <a href='#bottom' onClick={() => handleClick(index)}>
            <img src={sliderImage.image} />

          </a>
        ))}
      </div>
    </div>
  );
};

export default Directory;
