import React from 'react'

// theme modules
import Images from '../themes/Images'

// components
import Banner from '../components/banner/Banner'
import Advice from '../components/advice/Advice'
import Career from '../components/career/Career'
import Service from '../components/service/Service'
import Financial from '../components/financial/Financial'
import Business from '../components/business/Business'
import Team from '../components/team/Team'
import Digital from '../components/digital/Digital'
import Partner from '../components/partner/Partner'
import Marketing from '../components/marketing/Marketing'
import Slide from '../components/common/Slide'

// data
import DataService from '../constants/service'
import SlideData from '../constants/slide'

const IndexPage = React.memo(() => {
  const { services, infoService } = DataService

  return (
    <div>
      <Banner
        type='main'
        src={Images.bgHome}
        heightBg='700px'
      />

      <Advice />

      <Career />

      <Service
        services={services}
        infoService={infoService}
        typeCard='transform'
        customStyle={{
          customStyleHeading: {
            headingStyle: {
              marginTop: '60px',
              marginBottom: '120px'
            },
            titleStyle: {
              textAlign: 'center'
            }
          }
        }}
      />

      <Financial />

      <Business />

      <Team />

      <Digital />

      <Slide slides={SlideData}/>

      <Partner />

      <Marketing />
    </div>
  )
})

export default IndexPage
