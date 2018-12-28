import React from 'react'

// components
import Image from '../common/Image'
import Profit from '../profit/Profit'
import Container from '../common/Container'

// themes
import Icons from '../../themes/Icons'

// Data
import ProfitData from '../../constants/profit'
import Images from '../../themes/Images'

/**
 * Defined component
 */
const Financial = React.memo(() => {
  const { info, career } = ProfitData

  return (
    <Container
      customStyle={{
        display: 'flex',
        marginTop: '130px',
        marginBottom: '100px'
      }}
    >
      <Profit
        info={info}
        items={career}
        src={Icons.mark}
        alt='icon'
        textButton='Learn More'
        customStyle={{
          marginLeft: '65px',
          marginRight: '100px'
        }}
      />

      <Image
        src={Images.flow}
        alt='flow'
        customStyle={{
          width: 'inherit'
        }}
      />
    </Container>
  )
})

// Defined styled component
export default Financial
