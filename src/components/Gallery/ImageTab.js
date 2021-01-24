import React, { useState } from "react";

function ImageTab({ imageItem }) {
  const [imgUrl, setImgUrl] = useState();

  function handleClick(e) {
    var imgSrc = e.target.src;
    setImgUrl(imgSrc);
  }
  return (
    <>
      <div class="row">
        {imageItem &&
          imageItem.images.map((image) => (
            <div class="col-md-4 image_gallery">
              <img
                src={image.image}
                data-toggle="modal"
                data-target="#imageModal"
                className="img-fluid"
                onClick={handleClick}
              />
            </div>
          ))}
      </div>

      <div
        class="modal fade"
        id="imageModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              {" "}
              <img src={imgUrl} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageTab;
