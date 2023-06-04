import React from 'react'
import './about.css'
import Changer from '../../assets/changer.png'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderOpened} from 'react-icons/vsc'

const about = () => {
  return (
    <section id= "about">
      <h5>Get to know me</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Changer} alt='MBUNGAI GEORGE BERINYUY'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FiAward className="about__icon"/> 
              <h5>Experience</h5>
              <small>3+ years working </small>
            </article>
            <article className="about__card">
            <FiUsers className="about__icon"/> 
              <h5>Clients</h5>
              <small>I've built systems for over 50+ companies worldwide</small>
            </article>
            <article className="about__card">
            <VscFolderOpened className="about__icon"/> 
              <h5>Experience</h5>
              <small>80+ completed projects </small>
            </article>
          </div>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate et modi laudantium similique nihil aspernatur molestiae fuga? Et nostrum magni est, nisi esse necessitatibus illum quidem in eius, non tempora.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default about