import React from 'react'

// theme modules
import Images from '../themes/Images'

// components
import Banner from '../components/banner/Banner'
import Post from '../components/post/Post'

const Portfolio = () => (
  <div>
    <Banner
      type='other'
      src={Images.bgAbout}
      isHome={false}
      pageName='Portfolio Style 2'
      padding='65px 0'
      heightBg='300px'
    />

    <Post
      type='left'
    />
  </div>
)

export default Portfolio
