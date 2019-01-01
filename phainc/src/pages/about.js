import React from 'react'

// theme modules
import Images from '../themes/Images'

// components
import Banner from '../components/banner/Banner'
import Service from '../components/service/Service'
import Career from '../components/career/Career'
import Team from '../components/team/Team'
import Partner from '../components/partner/Partner'
import Optimist from '../components/optimist/Optimist'

// data
import DataService from '../constants/service'

const About = () => {
  const { aboutService, listServices } = DataService

  return (
    <div>
      <Banner
        type='other'
        src={Images.bgAbout}
        isHome={false}
        pageName='About'
        padding='65px 0'
        heightBg='300px'
      />

      <Service
        services={listServices}
        infoService={aboutService}
        isButton={false}
        customStyleHeading={{
          headingStyle: {
            marginTop: '60px',
            marginBottom: '65px'
          },
          titleStyle: {
            textAlign: 'center'
          }
        }}
      />

      <Career />

      <Team
        isHome={false}
      />

      <Optimist />

      <Partner />

    </div>
  )
}

export default About
