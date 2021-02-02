import React from 'react'
import Banner from '../components/Common/Banner'
import SingleBlogSection from '../components/Blog/SingleBlogSection'

function SingleBlog() {
    return (
      <div>
        <Banner title="Blogs" home="Home" bread="Blogs" />
        <SingleBlogSection />
      </div>
    );
}

export default SingleBlog
