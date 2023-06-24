import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import {useForm } from "react-hook-form";
import axios from "axios";

// import {css} from "@emotion/react "

const Contact = () => {
  const form = useRef();
  const {register, handleSubmit} = useForm();
  const reviewSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:3034/", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, PUT, POST, DELETE, OPTIONS, PATCH",
        },
      })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }
  const sendEmail = (e) => {
    e.preventDefault();
    handleSubmit(reviewSubmit);

    emailjs
      .sendForm(
        "service_789epoh",
        "template_1tgfn2n",
        form.current,
        "A5krLOWD-M5vCaVaC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  // const openDialog = (e) => {
  //   dialog.current.display = "block";
  // };
  // const closeDialog = (e) => (dialog.current.display = "none");

  return (
    <section id="contact">
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>mbungaigeorge95@gmail.com</h5>
            <a href="mailto:mbungaigeorge95@gmail.com" target="blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option__icon" />
            <h4>Messenger</h4>
            <h5>Mbungai</h5>
            <a href="https://m.me/ernest.achiever" target="blank">
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>Whatsapp</h4>
            <h5>+237681046346</h5>
            <a
              href="https://api.whatsapp.com/send?phone=237681046346"
              target="blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/*end of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            {...register("name")}
          />
          <input type="email" name="email" placeholder="Your Email" required {...register("email")}/>
          <textarea name="review" rows="7" placeholder="Your Message" required {...register("review")}>
          </textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {/* <button
            type="button"
            className="btn btn-primary"
            onClick={openDialog}
          >
            Hire Me
          </button> */}
        </form>
        {/* <div className="dialog__container">
          <dialog className="hire__me" ref={dialog} open>
            <button
              type=" button"
              className="btn btn-cls"
              onClick={closeDialog}
            >
              {" "}
              <MdCancel />
            </button>
            <form ref={form} onSubmit={sendEmail} method="dialog">
              <input
                type="text"
                name="name"
                placeholder="COMPANY NAME"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="COMPANY Email"
                required
              />
              <textarea
                name="review"
                rows="7"
                placeholder="Your Message"
                required
              >
                {" "}
              </textarea>
              <button type="submit" className="btn btn-primary">
                {" "}
                Send Message
              </button>
            </form>
          </dialog>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
