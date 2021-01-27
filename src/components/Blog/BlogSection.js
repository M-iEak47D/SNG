import React, { useEffect, useState } from "react";
import Axios from "axios";
import axiosInstance from "../../helper/axios";
import Skeleton from "react-loading-skeleton";

function BlogSection() {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
      try {
        const response = axiosInstance.get(`/blogs`, {
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
  console.log(blogs, "hello");
  return (
    <div>
      <div className="blog-section">
        <div className="container">
          <div className="row">
            {blogs ? (
              blogs.map((blog) => (
                <div className="col-md-3">
                  <div className="blog">
                    <div className="blog-image">
                      <img src={blog.image} />
                    </div>
                    <div className="blog-title">
                      <a href="#">{blog.title}</a>
                    </div>
                    <div className="blog-date">
                      <a href="#">News</a> / <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-md-3">
                <div className="blog">
                  <div className="blog-image">
                    <Skeleton height={200} />
                  </div>
                  <Skeleton height={50} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
