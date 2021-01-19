import React from "react";
import $ from "jquery";

const CommingSoon = () => {
  const closeModal = () => {
    $("#commingModal").toggle();
  };
  return (
    <div className="comming-soon-section">
      <div className="modal" id="commingModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="text-right pr-2">
              <button
                type="button"
                className="close"
                onClick={() => closeModal()}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <img
                src={process.env.PUBLIC_URL + "/images/OpeningSoon.png"}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommingSoon;
