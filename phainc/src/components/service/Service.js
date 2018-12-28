import React from 'react'
import styled from 'styled-components'

// components
import Card from '../common/Card'
import Container from '../common/Container'
import Heading from '../common/Heading'

// data
import DataService from '../../constants/service'

const CustomDiv = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
`

/**
 * Defined component
 */
const Service = React.memo(() => {
  const { services, infoService } = DataService

  return (
    <Container>
      <Heading
        titleText={infoService.titleText}
        descriptionText={infoService.descriptionText}
        isExtend
        extendText={infoService.extendText}
        customStyle={{
          headingStyle: {
            marginTop: '60px',
            marginBottom: '120px'
          },
          titleStyle: {
            textAlign: 'center'
          }
        }}
      />
      <CustomDiv>
        {services.map(item => (
          <Card
            key={item.id}
            type='transform'
            src={item.src}
            alt={item.alt}
            titleText={item.titleText}
            descriptionText={item.descriptionText}
          />
        ))}
      </CustomDiv>
    </Container>
  )
})

// Defined styled component
export default Service
