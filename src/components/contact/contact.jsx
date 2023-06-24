import React,{ useState} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import {MdCancel} from 'react-icons/md' 
import { set } from 'mongoose'


// import {css} from "@emotion/react "


const Contact = () => {
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
})

const handleChange = (event) =>{
  const {name, value} = event.target
  setFormData(prevValue =>{
    return {
      ...prevValue,
      [name]: value,
    }
  })
}
console.log(formData);
const [showForm, setShowForm] = useState(false);

const isShow = () =>{
  setShowForm(true)
}
const notIsShow = () =>{
  setShowForm(false);
}


const handleSubmit = async (e) =>{
  e.preventDefault();
  const response = await fetch("http://localhost:3000/api/new-re iew",{
    method: "POST",
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      message: formData.message
    }),
    headers:{
      Accept: "application/json",
      'Content-Type': 'application/json'
    }
  });
  if(!response.ok){
    throw new Error(response.error)
  }
  else{
    const data = await response.json();
    console.log(data, response);
  }
}
  return (
    <section id="contact">
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option__icon'/>
            <h4>Email</h4>
            <h5>mbungaigeorge95@gmail.com</h5>
            <a href='mailto:mbungaigeorge95@gmail.com' target='blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option__icon'/>
            <h4>Messenger</h4>
            <h5>Mbungai</h5>
            <a href='https://m.me/ernest.achiever'target='blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option__icon'/>
            <h4>Whatsapp</h4>
            <h5>+237681046346</h5>
            <a href='https://api.whatsapp.com/send?phone=237681046346'target='blank'>Send a Message</a>
          </article>
        </div>
        {/*end of contact options*/}
        <form  className='relative'>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required> </textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
          <button className='btn btn-primary' onClick={isShow}>Hire Me</button>
        <div className={showForm ? "showForm" : "hidden"}>
          <div className=''>
          <dialog className="hire__me"  open>
            <button type=' button' className='btn btn-cls'onClick={notIsShow} >  <MdCancel/>
</button>
          <form  method='dialog'>
          <input type="text" name='name' onChange={handleChange} value={formData.name} placeholder='COMPANY NAME' required />
          <input type="email" name='email' onChange={handleChange} value={formData.email} placeholder='COMPANY Email' required />
          <textarea name='message' onChange={handleChange} rows="7" value={formData.message} placeholder='Your Message(Vacant postion)' required> </textarea>
          <button className='btn btn-primary' onClick={handleSubmit}> Send Message</button>
        </form>
          </dialog>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact