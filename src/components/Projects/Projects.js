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
    {  title: "Github", src: github, desc: "You can login with your real github username and the project shows you githup repos, how many stars do you have, when the repos created at,  profile photo, bio, how many people following to you, how many follow people do you. This project shows to data Github allows"},
    {  title: "E-commerce", src: ecommerce,  desc: `You can add  product to box with money and quantity when you want multiple product to box the money  increases with your products after that you can remove your product. Then you can checkout with your products. If the box is empty you can see the "you can added some product to basket" page `},
    
    {  title: "Transparent Video", src: transparent,  desc: "During my internship, this project was given to me for the task. I used to mix-blend-mode for this project. In with this project I improve animation skills"},
    
    {  title: "Wallet", src: visx,  desc: "The project shows to how many coins do you have and total price for dolar, quantity of coins, also when you hover this circle you can see which coins do you have with quantity and how much money for dolars. I used to Visx for this project.  "},
    {  title: "Dashboard", src: dashboard,  desc: "Firstly there is login page you can login with your email and password. If password and username doesn't correct you can't entry the dashboard page.In the Addaccount page you can add a employee  and save the employee in localstorage. In the profile page you can filter the employee name "},
    
    {  title: "Animation", src: aos,  desc: "I started to learned to animation with this project. There is two drinks dropping the table for infinetly also the project includes responsive design when the drinks close to table, drinks speed getting slowly "},
    
    {  title: "Chart", src: chart,  desc: "This project for improve my css and chart skills. When hover the circle the project shows how many voted with related hobby, also improve my layout skills and gradient background color "},
    {  title: "Admin", src: admin,  desc: "This project for improve my Css skills"},
    
    {  title: "Overlay", src: overlay,  desc: "This project for improve my  Responsive design aosjs skills "},
    

    
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