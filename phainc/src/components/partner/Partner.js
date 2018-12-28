import React from 'react'
import styled from 'styled-components'

// components
import Image from '../common/Image'
import Container from '../common/Container'

// data
import PartnerData from '../../constants/partner'

const CustomImage = styled(Image)`
  opacity: 0.4;

  &:hover {
    opacity: 1;
  }
`

const Partner = React.memo(() => {
  const { partner } = PartnerData

  return (
    <Container
      customStyle={{
        marginTop: '50px',
        marginBottom: '50px'
      }}
    >
      {partner.map(item => (
        <CustomImage
          key={item.id}
          src={item.src}
          alt={item.alt}
        />
      ))}
    </Container>
  )
})

export default Partner
