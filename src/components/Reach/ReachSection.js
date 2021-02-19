import React, { useState, useEffect } from "react";
import Axios from "axios";
import axiosInstance from "../../helper/axios";

function ReachSection() {
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
      <div className="reach-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="reach-text">
                <p>
                  Hotel SNG is the connecting link from and for all tourist
                  points in Nepal. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Dolorem eius totam nemo nihil velit. Sunt
                  porro impedit quidem illo debitis quaerat error qui ipsa
                  molestias numquam cupiditate, tenetur magnam enim.
                </p>
                <p>You may reach us using the following routes:</p>
              </div>

              <p className="reach-text-title">By Helicopter/ Charter Service</p>
              <div className="reach-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit dignissimos perspiciatis accusamus, optio dolore
                voluptatem ipsum ipsam dolorem nemo error, iure quia vero
                doloribus ullam molestias voluptas esse itaque voluptate.
              </div>
              <p className="reach-text-title">By Scheduled Flight</p>
              <div className="reach-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, tempore nam facilis tenetur quidem, rem ratione magnam
                doloremque quis facere voluptate repellat reiciendis
                reprehenderit, dolore dolor sint animi. Repellat, doloremque.
              </div>
              <p className="reach-text-title">By Surface Pickup</p>
              <div className="reach-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                laboriosam maiores odio totam ex voluptatibus et veniam officia
                nulla sequi! Atque non nisi reiciendis fugit qui! Eum nostrum
                nulla nam.
              </div>
              <p className="reach-text-title">By Bus</p>
              <div className="reach-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                necessitatibus quia reiciendis, beatae officia molestiae minima
                neque doloribus error atque impedit labore placeat repellat illo
                sapiente dolores corrupti quisquam iste!
              </div>
            </div>
            <div className="col-md-6">
              <div className="map-iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8621268799197!2d85.37760131494571!3d27.721542882786142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bb999675103%3A0x6cb7399caebd476d!2sNarayantar!5e0!3m2!1sen!2snp!4v1607856602614!5m2!1sen!2snp"
                  width="100%"
                  height="400"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReachSection;
