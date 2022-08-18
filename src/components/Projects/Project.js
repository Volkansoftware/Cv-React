import React from 'react'
import HeaderCSS from  '../Header/Header.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Project = ({Menus}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className=' flex  '>
<Slider {...settings}>
{Menus.map((Menu, title) => (
         <div className='asd' key={Menu.title}>
          <div  className={`${HeaderCSS.title  }  ml-56 text-4xl`}> {Menu.title}</div>
            <video autoPlay loop muted 
            style={{
              transform: "scale(0.7)",
                 
                 }}>
                <source src={Menu.src} type="video/mp4" />
            </video>
            <div className={`text-white text-l mx-4 `}> {Menu.desc} </div>
         </div>
       ))}
       </Slider>
    </div>
  )
}

export default Project