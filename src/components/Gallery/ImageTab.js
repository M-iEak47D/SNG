import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

function ImageTab({ imageItem }) {
  const [imgUrl, setImgUrl] = useState();
  const arr = [0, 1, 2, 3, 4, 5];

  function handleClick(e) {
    var imgSrc = e.target.src;
    setImgUrl(imgSrc);
  }
  return (
    <>
      <div class="row">
        {imageItem ? (
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
          ))
        ) : (
          <>
            {[0, 1, 2, 3, 4, 5].map((a) => (
              <div class="col-md-4 image_gallery">
                <Skeleton height={200} />
              </div>
            ))}
          </>
        )}
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
