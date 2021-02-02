import React, { useEffect, useState } from "react";
import Banner from "../Common/Banner";
import { useParams } from "react-router-dom";
import Axios from "axios";
import axiosInstance from "../../helper/axios";
import Skeleton from "react-loading-skeleton";

function SingleBlogSection() {
  const { slug } = useParams();
  const [blogs, setBlogs] = useState();
  console.log(slug, "heybba");

  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get(`/blog/single/${slug}`, {
          cancelToken: source.token,
        });
        setBlogs((await response).data.blogs);
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

  console.log(blogs && blogs, "hello");
  return (
    <>
      <main className="blog_single blog-detail">
        <div className="row">
          <div className="col-lg-8">
            <div className="products products-detail">
              <div className="header">
                {blogs ? (
                  <h1>An Exclusive Interview with Radu Plugaru!</h1>
                ) : (
                  <h1>
                    <Skeleton />
                  </h1>
                )}
              </div>
              <div className="details">
                {blogs ? (
                  <>
                    <h2>by {blogs.author}</h2>
                    <div className="line">|</div>
                    <h2>Jul 28, 2020</h2>
                  </>
                ) : (
                  <h2>
                    <Skeleton width={400} />
                  </h2>
                )}
              </div>
              <div className="image-coantainer">
                {blogs ? (
                  <img className="img-fluid" src={blogs.image} alt="" />
                ) : (
                  <Skeleton height={600} />
                )}
              </div>

              <div className="para">
                {blogs ? (
                  <p
                    dangerouslySetInnerHTML={{ __html: blogs.description }}
                  ></p>
                ) : (
                  <Skeleton count={10} />
                )}
              </div>
            </div>
            <div className="product-footer">
              <div className="share-list">
                <ul>
                  <li className="text">Share :</li>
                  <li>
                    <i className="fab fa-facebook-square"></i>
                  </li>
                  <li>
                    <i className="fab fa-twitter-square"></i>
                  </li>
                  <li>
                    <i className="fab fa-linkedin"></i>
                  </li>
                  <li>
                    <i className="fab fa-google-plus-square"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="side-header">
              <div className="header">Recent Posts</div>
              <div className="list">
                <div className="image-container">
                  <img
                    className="img-fluid"
                    src="assets/images/bottom.png"
                    alt=""
                  />
                </div>
                <div className="text">
                  The term “Work From Home Without Investment”
                  <span>
                    {" "}
                    <a href="">News</a>{" "}
                  </span>
                </div>
              </div>
              <div className="list">
                <div className="image-container">
                  <img
                    className="img-fluid"
                    src="assets/images/bottom.png"
                    alt=""
                  />
                </div>
                <div className="text">
                  The term “Work From Home Without Investment”
                  <span>
                    {" "}
                    <a href="">News</a>{" "}
                  </span>
                </div>
              </div>
              <div className="list">
                <div className="image-container">
                  <img
                    className="img-fluid"
                    src="assets/images/bottom.png"
                    alt=""
                  />
                </div>
                <div className="text">
                  The term “Work From Home Without Investment”
                  <span>
                    {" "}
                    <a href="">News</a>{" "}
                  </span>
                </div>
              </div>
              <div className="list">
                <div className="image-container">
                  <img
                    className="img-fluid"
                    src="assets/images/bottom.png"
                    alt=""
                  />
                </div>
                <div className="text">
                  The term “Work From Home Without Investment”
                  <span>
                    {" "}
                    <a href="">News</a>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SingleBlogSection;
