import React, { useEffect } from "react";
import Banner from '../components/Common/Banner'
import SingleBlogSection from '../components/Blog/SingleBlogSection'

function SingleBlog() {
   useEffect(() => {
     window.scrollTo(0, 0);
     document.getElementById("mySidenav").style.width = "0";
   }, []);
    return (
      <div>
        <Banner title="Blogs" home="Home" bread="Blogs" />
        <SingleBlogSection />
      </div>
    );
}

export default SingleBlog
