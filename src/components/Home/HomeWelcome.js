import React from "react";
import Skeleton from "react-loading-skeleton";

function HomeWelcome({welcome}) {
  return (
    <>
      <div className="welcome">
        <div className="container">
          <p className="welcome-title">Welcome to Hotel SNG</p>
          <p className="welcome-message">
            {welcome ? welcome.welcome_message : <Skeleton width={100} height={60}/> }
          </p>
          
          <img src={process.env.PUBLIC_URL + "/images/signature-gm.png"} />

          <div className="general-manager">
            <p className="manager-name">{welcome ? welcome.head_person : <Skeleton/> }</p>
             {welcome ? welcome.head_person_designation : <Skeleton/>}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeWelcome;
