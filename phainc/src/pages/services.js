import React from 'react'

// theme modules
import Images from '../themes/Images'

// components
import Banner from '../components/banner/Banner'
import Business from '../components/business/Business'
import Service from '../components/service/Service'
import Solution from '../components/solution/Solution'

// data
import DataService from '../constants/service'

const { platformService, platformList } = DataService

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

    <Service
      services={platformList}
      infoService={platformService}
      isButton={false}
      customStyle={{
        customStyleHeading: {
          headingStyle: {
            marginTop: '60px',
            marginBottom: '65px'
          },
          titleStyle: {
            textAlign: 'center'
          }
        },
        cardStyle: {
          marginBottom: '25px'
        }
      }}
    />

    <Business
      customStyle={{
        marginTop: '70px'
      }}
    />

    <Solution/>

  </div>
)

export default Services
