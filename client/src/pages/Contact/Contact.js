import React, { useRef } from "react";
import { toast } from "react-toastify";

import "./Contact.css";
import Zoom from "react-reveal/Zoom";
import LightSpeed from "react-reveal/LightSpeed";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();
  
    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;
  
    if (!userName || !userEmail || !message) {
      toast.error("All fields are required");
      return;
    }
  
    emailjs
      .sendForm(
        "service_r9syz3s",
        "template_j67l6vj",
        form.current,
        "tpeTz-jaXlnOd8XUo"
      )
      .then(
        (result) => {
          toast.success("Message sent");
        },
        (error) => {
          toast.error("Try another method to contact");
        }
      );
  };
  


  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="ocontact"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Zoom>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>
                        Contact With
                        <a href="https://www.linkedin.com/in/saksham-chopra-320b3022a/">
                          <BsLinkedin color="blue" size={30} className="ms-2" />
                        </a>
                        <a href="https://github.com/saksham-chopra">
                          {" "}
                          <BsGithub color="black" size={30} className="ms-2" />
                        </a>
                        <a href="https://www.instagram.com/its_saksham1308/">
                          <BsInstagram
                            color="blue"
                            size={30}
                            className="ms-2"
                          />
                        </a>
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                      <label>Name</label>
                      <input
                      
                        type="text"
                        name="user_name"
                      />
                      <label>Email</label>
                      <input
                      
                        type="email"
                        name="user_email"
                      />
                      <label>Message</label>
                      <textarea name="message" />
                      <input type="submit" value="Send" />
                    </form>
                  </div>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
