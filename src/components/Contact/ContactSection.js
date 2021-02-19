import React, { useState, useEffect } from "react";

import Axios from "axios";
import axiosInstance from "../../helper/axios";
import ContactForm from "./ContactForm";

function ContactSection() {
  const [settings, setSettings] = useState();
  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get(`/contact_page`, {
          cancelToken: source.token,
        });
        setSettings((await response).data);
      } catch (error) {
        if (!Axios.isCancel(error)) {
          throw error;
        }
      }
      return () => {
        source.cancel();
      };
    };
    loadData();
    window.scrollTo(0, 0);

    document.getElementById("mySidenav").style.width = "0";
  }, []);
  return (
    <div>
      <div className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="hotel-image-in-contact"></div>
            </div>
            <div className="col-md-6">
              
              <div className="need-help-title">NEED HELP?</div>
              <div className="read-our-faq">
                <p>
                  Please take the time to read our
                  <br />
                  Frequently Asked Questions.
                </p>
              </div>
              <div className="read-our-faq-description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  est, soluta culpa fugit adipisci perferendis, hic sequi et
                  consequatur laborum laudantium. Voluptas temporibus modi odio
                  minus debitis excepturi eligendi quam?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio nesciunt obcaecati possimus quae dolore ducimus
                  nihil nemo, ex, unde quas ratione aut corrupti consequatur,
                  animi cupiditate nobis amet. Mollitia, debitis. Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Modi est, soluta
                  culpa fugit adipisci perferendis, hic sequi et consequatur
                  laborum laudantium. Voluptas temporibus modi odio minus
                  debitis excepturi eligendi quam?
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-panel">
                <div className="contact-panel-item">
                  <p>
                    <i className="fa fa-map-marker"></i>Our Location
                  </p>
                  <div className="contact-panel-item-description">
                    Mid Baneswor, Kathmandu <br />
                    Bagmati, Nepal.
                  </div>
                </div>

                <div className="contact-panel-item">
                  <p>
                    <i className="fa fa-phone"></i>Contact Us
                  </p>
                  <div className="contact-panel-item-description">
                    Phone:&nbsp;+977-01-4612345 <br />
                    Mobile:&nbsp;+977-9812345678 <br />
                    Fax:&nbsp;+977-014612345
                  </div>
                </div>

                <div className="contact-panel-item">
                  <p>
                    <i className="fa fa-paper-plane"></i>Write some words
                  </p>
                  <div className="contact-panel-item-description">
                    support24/7@hotelsng.com <br />
                    info@hotelsng.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="leave-message-section">
          <div className="leave-message-title">Leave a message</div>
          <div className="leave-message-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
            ducimus facere dignissimos voluptatibus dolore recusandae. Assumenda
            sapiente distinctio molestiae! Velit suscipit doloribus est, ut
            nostrum facilis. Illum, minus. Fuga, corporis.
          </div>
          <div className="leave-message-input-fields">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="map-iframe">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8621268799197!2d85.37760131494571!3d27.721542882786142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bb999675103%3A0x6cb7399caebd476d!2sNarayantar!5e0!3m2!1sen!2snp!4v1607856602614!5m2!1sen!2snp"
          width="100%"
          height="300"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactSection;
