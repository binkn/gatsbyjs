import React from 'react'

// theme modules
import Images from '../themes/Images'

// components
import Banner from '../components/banner/Banner'

const Services = () => (
  <div>
    <Banner
      type='other'
      src={Images.bgAbout}
      isHome={false}
      pageName='Service'
      padding='65px 0'
      heightBg='300px'
    />
  </div>
)

export default Services
