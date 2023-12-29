import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function Second({}) {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      
      const images = [
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/brand/partner-3.png",
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/brand/partner-4.png",
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/brand/partner-5.png",
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/brand/partner-1.png",
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/brand/partner-2.png",
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/brand/partner-3.png",
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/brand/partner-4.png",
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/brand/partner-5.png",
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/brand/partner-1.png",
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/brand/partner-2.png",
      ];
     
      return (
        <div className="container py-5">
            <Slider {...sliderSettings}>
          {images.map((image, index) => (
              <>
               <div key={index}>
              <img src={image} style={{width:"100px"}}alt={`Slide ${index + 1}`} />
            </div>
              </>
          ))}
        </Slider>
        </div>
      );
}

export default Second;
