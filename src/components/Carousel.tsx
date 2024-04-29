"use client"

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../app/img/img1.webp';
import img2 from '../app/img/img2.webp';
import img3 from '../app/img/img3.webp';
import img4 from '../app/img/img4.webp';
import img5 from '../app/img/img5.webp';
import img6 from '../app/img/img6.webp';
import img7 from '../app/img/img7.webp';
import img8 from '../app/img/img8.webp';
import img9 from '../app/img/img9.webp';
import img10 from '../app/img/img10.webp';
import img11 from '../app/img/img11.webp';

const ImgCarousel = () => {
  const images = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10, img11
  ];

  return (
    <div className='bg-dark'>
      
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
        emulateTouch={true}
      
      >
        {images.map((image, index) => (
          <div className='' key={index}>
            <img className='carouselImgStyle' src={image.src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      
    </div>
  );
};

export default ImgCarousel;