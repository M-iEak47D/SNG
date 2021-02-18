import { React, useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { format } from "date-fns";
import Skeleton from "react-loading-skeleton";

function Invoice() {
  const [booking, setBooking] = useState();
  const [room, setRoom] = useState();
  const [form, setForm] = useState();
  const history = useHistory();
  const location = useLocation();
  const [newDate, setNewDate] = useState(new Date());

  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById("mySidenav").style.width = "0";
  }, []);

  useEffect(() => {
    if (location.state) {
      setBooking(location.state.bookingData);
      setRoom(location.state.roomData);
      setForm(location.state.formData);
    } else {
      history.push("/");
    }
  }, [location]);

  return (
    <div>
      {booking ? (
        <div class="receipt-content">
          <div class="container bootstrap snippets bootdey">
            <div class="row">
              <div class="col-md-12">
                <div class="invoice-wrapper">
                  <div class="intro">
                    Hi{" "}
                    <strong>
                      {booking.data.first_name} {booking.data.last_name}
                    </strong>
                  </div>

                  <div class="payment-info">
                    <div class="row">
                      <div class="col-sm-6">
                        <span>Payment No.</span>
                        <strong>{booking.data.id}</strong>
                      </div>
                      <div class="col-sm-6 text-right">
                        <span> Date</span>
                        <strong>{format(newDate, "yyyy-MM-d")}</strong>
                      </div>
                    </div>
                  </div>

                  <div class="payment-details">
                    <div class="row">
                      <div class="col-sm-6">
                        <span>Client</span>
                        <strong>
                          {booking.data.first_name} {booking.data.last_name}
                        </strong>
                        <p>
                          {booking.data.country} <br />
                          <a href="#">{booking.data.email}</a>
                        </p>
                      </div>
                      <div class="col-sm-6 text-right">
                        <span>Payment To</span>
                        <strong>SNG Hotel</strong>
                        <p>
                          Anamnagar, Kathmandu <br />
                          99383 <br />
                          Nepal <br />
                          <a href="#">sng@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="line-items">
                    <div class="headers clearfix">
                      <div class="row">
                        <div class="col-md-4">Description</div>
                        <div class="col-md-3">Quantity</div>
                        <div class="col-md-5 text-right">Amount</div>
                      </div>
                    </div>
                    <div class="items">
                      {room && (
                        <div class="row item">
                          <div class="col-md-4 desc">{room.title}</div>
                          <div class="col-md-3 qty">
                            {form && form.occupancy.length}{" "}
                          </div>

                          <div class="col-md-5 amount text-right">
                            Rs.{" "}
                            {(form && form.occupancy.length) > 0
                              ? (form && form.occupancy.length) *
                                (room && room.price)
                              : room && room.price}{" "}
                          </div>
                        </div>
                      )}
                    </div>

                    <div class="total text-right">
                      <p class="extra-notes">
                        <div className="extra_date">
                          <strong>Check-in : </strong>{" "}
                          <span> {booking.data.check_in}</span>
                        </div>
                        <div className="extra_date">
                          <strong>Check-out : </strong>{" "}
                          <span>{booking.data.check_out}</span>
                        </div>
                        <div className="extra_date">
                          <strong>Occupancy : </strong>{" "}
                          <span>
                            {" "}
                            {`${form && form.occupancy.length} Room ${
                              form &&
                              form.occupancy
                                .map((item) => item.adult)
                                .reduce((curval, newval) => curval + newval)
                            } Adult `}{" "}
                            {form &&
                            form.occupancy
                              .map((item) => item.child)
                              .reduce((curval, newval) => curval + newval) > 0
                              ? form.occupancy
                                  .map((item) => item.child)
                                  .reduce((curval, newval) => curval + newval) +
                                " Child"
                              : ""}{" "}
                          </span>
                        </div>

                        <div className="extra_date">
                          <strong>Extra Notes </strong>
                          <br />
                          {booking.data.message}
                        </div>
                      </p>
                      <div class="field">
                        Subtotal{" "}
                        <span>
                          Rs.{" "}
                          {(form && form.occupancy.length) > 0
                            ? (form && form.occupancy.length) *
                              (room && room.price)
                            : room && room.price}{" "}
                        </span>
                      </div>

                      <div class="field">
                        Discount <span>0%</span>
                      </div>
                      <div class="field grand-total">
                        Total{" "}
                        <span>
                          {" "}
                          Rs.{" "}
                          {(form && form.occupancy.length) > 0
                            ? (form && form.occupancy.length) *
                              (room && room.price)
                            : room && room.price}{" "}
                        </span>
                      </div>
                    </div>

                    {/* <div class="print">
                      <a href="#">
                        <i class="fa fa-print"></i>
                        Print this receipt
                      </a>
                    </div> */}
                    <div class="print">
                      <Link to="/">Back to Home Page</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Skeleton height={400} />
      )}
    </div>
  );
}

export default Invoice;
