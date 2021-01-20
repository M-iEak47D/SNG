import React from "react";

function ImageTab(props) {

  return (
    <div>
      <h2>{props.name}</h2>
      <div class="row">
        <div class="col-md-4 lightbox-image room">
          <img
            src={process.env.PUBLIC_URL + "/images/lightbox-roomjpg.jpg"}
            className="hover-shadow"
          />
        </div>
        <div class="col-md-4 lightbox-image room">
          <img
            src={process.env.PUBLIC_URL + "/images/lightbox-roomjpg.jpg"}
            className="hover-shadow"
          />
        </div>
        <div class="col-md-4 lightbox-image room">
          <img
            src={process.env.PUBLIC_URL + "/images/lightbox-roomjpg.jpg"}
            className="hover-shadow"
          />
        </div>
        <div class="col-md-4 lightbox-image room">
          <img
            src={process.env.PUBLIC_URL + "/images/lightbox-roomjpg.jpg"}
            className="hover-shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageTab;
