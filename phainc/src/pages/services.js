import React from 'react'

// theme modules
import Images from '../themes/Images'

// components
import Banner from '../components/banner/Banner'
import Business from '../components/business/Business'

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

    <Business />

  </div>
)

export default Services
