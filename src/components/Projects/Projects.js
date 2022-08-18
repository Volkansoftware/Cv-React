import React from 'react'
import HeaderCSS from  '../Header/Header.module.css'

import chart from '../../assets/chart.mp4'
import visx from '../../assets/visx.mp4'
import github from '../../assets/github.mp4'
import dashboard from '../../assets/dashboard.mp4'
import ecommerce from '../../assets/ecommerce.mp4'
import admin from '../../assets/admin.mp4'
import aos from '../../assets/aos.mp4'
import overlay from '../../assets/overlay.mp4'
import transparent from '../../assets/transparent.mp4'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Projects = () => {
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
  const Menus = [
    {  title: "Github", src: github, desc: "Looking for a dynamic Software Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search  Engineer? Search no further, because I am ready for the job. With"},
    {  title: "Visx", src: visx,  desc: "Looking Looking for a dynamic Software Engineer? Search  Looking for a dynamic Software Engineer? Search  Looking for a dynamic Software Engineer? Search  for a dynamic Software Engineer? Search no further, because I am ready for the job. With"},
    {  title: "Dashboard", src: dashboard,  desc: "Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search no further, because I am ready for the job. With"},
    {  title: "Chartjs", src: chart,  desc: "Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search no further, because I am ready for the job. With"},
    {  title: "E-commerce", src: ecommerce,  desc: "Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search no further, because I am ready for the job. With"},
    {  title: "Admin", src: admin,  desc: "Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search no further, because I am ready for the job. With"},
   
    {  title: "Aos", src: aos,  desc: "Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search no further, because I am ready for the job. With"},
    {  title: "Overlay", src: overlay,  desc: "Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search no further, because I am ready for the job. With"},
    {  title: "Transparent Video", src: transparent,  desc: "Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search Looking for a dynamic Software Engineer? Search no further, because I am ready for the job. With"},
  

    
  ];
  return (
    <div className=''>
      <div className={`${HeaderCSS.title} flex justify-center items-center mb-12 text-7xl`}>Projects </div>
      <Slider {...settings}>
      {Menus.map((Menu, title) => (
         <div  key={Menu.title}>
          <div  className={`${HeaderCSS.title  }  ml-56 text-4xl`}> {Menu.title}</div>
            <video autoPlay loop muted 
            style={{
              transform: "scale(0.7)",
                 }}>
                <source src={Menu.src} type="video/mp4" />
            </video>
            <div className={`text-white text-l mx-4 mb-4 `}> {Menu.desc} </div>
         
       
           
           
         </div>
       ))}
       </Slider>
    </div>
  )
}

export default Projects