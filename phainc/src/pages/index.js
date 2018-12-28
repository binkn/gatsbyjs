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

const IndexPage = React.memo(() => {
  return (
    <div>
      <Banner
        type='main'
        src={Images.bgHome}
        heightBg='700px'
      />

      <Advice />

      <Career />

      <Service />

      <Financial />

      <Business />

      <Team />

      <Digital />

      <Partner />

      <Marketing />
    </div>
  )
})

export default IndexPage
