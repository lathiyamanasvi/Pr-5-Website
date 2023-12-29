import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function Third() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        width: "60%",
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
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/instagram/instagram-1.jpg",
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/instagram/instagram-2.jpg",
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/instagram/instagram-3.jpg",
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/instagram/instagram-4.jpg",
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/instagram/instagram-5.jpg",
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/instagram/instagram-6.jpg",
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/instagram/instagram-7.jpg",
        "https://htmldemo.net/bakerfresh/bakerfresh/assets/images/instagram/instagram-8.jpg",
    ];
    return (
        <div>
            <div className="">
                <div className="">
                    {/* <div className="text-left">
                    
                    </div> */}
                    <div className="d-flex">
                    <div className='p-5'>
                            <h1>INSTAGRAM</h1>
                        <p className='text-muted fs-5'>@BakerFreshCakeshop </p>
                            </div>
                        <div className="container py-5 overflow-hidden">
                            <Slider {...sliderSettings}>
                                {images.map((image, index) => (
                                    <div className="w-33"key={index}>
                                        <img src={image} style={{ width: "100%"}} alt={`Slide ${index + 1}`} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third
