import React from "react";
import CheckoutForm from "./CheckoutForm";

function CheckoutSection({ room, form }) {
  return (
    <div>
      <div className="checkout_section room-section">
        <div className="container">
          <div className="room-row">
            <div className="row">
              <div className="col-md-5">
                <div className="room-section-details">
                  <div className="room-image">
                    <img
                      className="img-fluid"
                      src={room && room.feature_image}
                    />
                  </div>
                  <div className="room-pricing">
                    FROM <span>Rs. {room && room.price}</span>/PER NIGHT
                  </div>
                  <p className="room-title">{room && room.title}</p>
                  <div className="room-facility">
                    <div className="facility-item">
                      <img
                        src={process.env.PUBLIC_URL + "/images/png/guests.png"}
                      />
                      &nbsp;
                      {form &&
                        form.occupancy
                          .map((item) => item.adult)
                          .reduce((curval, newval) => curval + newval)}{" "}
                      Adult &nbsp;
                      {form &&
                      form.occupancy
                        .map((item) => item.child)
                        .reduce((curval, newval) => curval + newval) > 0
                        ? form.occupancy
                            .map((item) => item.child)
                            .reduce((curval, newval) => curval + newval) +
                          " Child"
                        : ""}{" "}
                    </div>
                    <div className="facility-item">
                      <img
                        src={process.env.PUBLIC_URL + "/images/png/bed.png"}
                      />
                      &nbsp;{form && form.occupancy.length} Rooms
                    </div>
                  </div>

                  <div className="my-booking">
                    <div className="heading">
                      <h2>My booking</h2>
                    </div>

                    <div>
                      <h3>Occupancy</h3>
                      <p>
                        {form && form.occupancy.length} Room{" "}
                        {form &&
                          form.occupancy
                            .map((item) => item.adult)
                            .reduce((curval, newval) => curval + newval)}{" "}
                        Adult &nbsp;
                        {form &&
                        form.occupancy
                          .map((item) => item.child)
                          .reduce((curval, newval) => curval + newval) > 0
                          ? form.occupancy
                              .map((item) => item.child)
                              .reduce((curval, newval) => curval + newval) +
                            " Child"
                          : ""}{" "}
                      </p>
                    </div>
                    <div>
                      <h3>Check-in</h3>
                      <p>{form && form.startDate}</p>
                    </div>
                    <div>
                      <h3>Check-out</h3>
                      <p>{form && form.endDate}</p>
                    </div>
                    <div>
                      <h3>{room && room.title}</h3>
                      <p>Dream Deals - Superior Room - Breakfast included</p>
                    </div>
                    <div>
                      <h3>Total Price </h3>
                      <p>
                        Rs.{" "}
                        {(form && form.occupancy.length) > 0
                          ? (form && form.occupancy.length) *
                            (room && room.price)
                          : room && room.price}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="room-form">
                  <div class="register-form-container">
                    <div class="register-form">
                      <div class="form-header">
                        <h2>Personal information</h2>
                      </div>
                      <CheckoutForm roomData={room} formData={form} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSection;
