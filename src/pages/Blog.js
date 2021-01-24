import React, { useEffect } from "react";
import Banner from "../components/Common/Banner";
import BlogSection from "../components/Blog/BlogSection";

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="main">
      <Banner title="Blogs" home="Home" bread="Blogs" />
      <BlogSection />
    </div>
  );
}

export default Blog;
