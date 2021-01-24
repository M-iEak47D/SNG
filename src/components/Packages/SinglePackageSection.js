import React, { useEffect, useState } from "react";
import Axios from "axios";
import axiosInstance from "../../helper/axios";
import { useParams } from "react-router-dom";

function SinglePackageSection() {
  let { slug } = useParams();
  const [packages, setPackages] = useState();

  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get(`/package/single/${slug}`, {
          cancelToken: source.token,
        });
        // console.log(await (await response).data.packages, "data");
        setPackages((await response).data.packages);
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
  }, []);

  return (
    <div>
  
      <div className="package-section">
        <div className="package-quick-info">
          <div className="package-quick-info-title">Quick Information</div>
          <div className="divider-in-package"></div>
          <div className="package-quick-info-content">
            <div className="package-quick-info-fact">
              <i className="fa fa-location-arrow"></i>
              <span>Location:</span> Kathmandu, Nepal
            </div>
            <div className="package-quick-info-fact">
              <i className="fa fa-clock-o"></i>
              <span>Duration:</span> 3 nights, 4 days
            </div>
            <div className="package-quick-info-fact">
              <i className="fa fa-language"></i>
              <span>Language:</span> {packages && packages.language}
            </div>
            <div className="package-quick-info-fact">
              <i className="fa fa-users"></i>
              <span>Min. group size:</span>
            </div>
          </div>
        </div>

        <div className="package-overview">
          <div className="overview-title">
            Package Overview: {packages && packages.title}
          </div>
          <div className="divider-in-package"></div>
          <div className="package-overview-description">
            {packages && packages.description}
          </div>
          <div className="package-enquiry-modal">
            {/* <!-- Button trigger modal --> */}
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Enquiry
            </button>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Enquire with our
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>Full name</p>
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      className="form-control"
                    />
                    <p>Email</p>
                    <input
                      type="text"
                      placeholder="Enter Email"
                      className="form-control"
                    />
                    <p>Contact</p>
                    <input
                      type="text"
                      placeholder="Enter Contact"
                      className="form-control"
                    />
                    <p>Your preferred tour date</p>
                    <input
                      type="text"
                      placeholder="Enter Preferred Tour Date"
                      className="form-control"
                    />
                    <p>Number of person</p>
                    <input
                      type="text"
                      placeholder="Enter Number of Person"
                      className="form-control"
                    />
                    <p>Enquiry Message</p>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="Your message"
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="package-overview-note">
            <strong>NOTE:</strong> Price = NRS 15,000 (For Nepali), INR 11,000
            (For Indian) and $200 (For tourists outside Nepal & India)
          </div>
          <div className="divider-in-package-overview"></div>
          <div className="package-include-list">
            <p>Included</p>
            <ul>
              {packages &&
                packages.inclusions.map((include, index) => <li>{include}</li>)}
            </ul>
          </div>
          <div className="divider-in-package-overview"></div>
          <div className="package-exclude-list">
            <p>Excluded</p>
            <ul>
              {packages &&
                packages.exclusions.map((exclude, index) => <li>{exclude}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePackageSection;
