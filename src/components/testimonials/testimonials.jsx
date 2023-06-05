import React from 'react'
import './testimonials.css'
import Avatar1 from "../../assets/avatar1.jpg";
import Avatar2 from "../../assets/avatar2.jpg";
import Avatar3 from "../../assets/avatar3.jpg";
import Avatar4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar:Avatar1,
    Name :"Tina Snow",
    review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nostrum quasi, corrupti quis expedita officiis saepe, praesentium dolore laboriosam qui laborum vel! Illum, odit tempora. Possimus accusantium ullam quos explicabo"
  },
  {
    avatar:Avatar2,
    Name :"Shatta Wale",
    review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nostrum quasi, corrupti quis expedita officiis saepe, praesentium dolore laboriosam qui laborum vel! Illum, odit tempora. Possimus accusantium ullam quos explicabo"
  },
  {
    avatar:Avatar3,
    Name :"kwame Despite",
    review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nostrum quasi, corrupti quis expedita officiis saepe, praesentium dolore laboriosam qui laborum vel! Illum, odit tempora. Possimus accusantium ullam quos explicabo"
  },
  {
    avatar:Avatar4,
    Name :"Nana Ama McBrown",
    review : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nostrum quasi, corrupti quis expedita officiis saepe, praesentium dolore laboriosam qui laborum vel! Illum, odit tempora. Possimus accusantium ullam quos explicabo"
  },
]

const testimonials = () => {
  return (
    <section id="testimonials"> 
    <h5> Review from Companies</h5>
    <h2>Testimonials</h2>

    
    <Swiper className="container testimonials__container"
    // install Swiper modules
    modules={[ Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}
    >
      {
        data.map(({avatar,name,review},index ) => {
          return (
            <SwiperSlide key={index} className='testimonials'>
          <div className="client__avatar">
            <img src={avatar} alt=""/>
          </div>
          <h5 className="client__name">{name}</h5> 
        <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
      })
}
    </Swiper>
    </section>
  )
}

export default testimonials
