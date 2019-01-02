import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// components
import Card from '../common/Card'
import Container from '../common/Container'
import Heading from '../common/Heading'

const CustomDiv = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

/**
 * Defined component
 */
const Service = React.memo(props => {
  const {
    services,
    infoService,
    customStyle,
    typeCard,
    isButton
  } = props

  const { customStyleHeading, cardStyle } = customStyle

  return (
    <Container>
      <Heading
        titleText={infoService.titleText}
        descriptionText={infoService.descriptionText}
        isExtend
        extendText={infoService.extendText}
        customStyle={customStyleHeading}
      />
      <CustomDiv>
        {services.map(item => (
          <Card
            isButton={isButton}
            key={item.id}
            type={typeCard}
            src={item.src}
            alt={item.alt}
            titleText={item.titleText}
            descriptionText={item.descriptionText}
            customStyle={{
              cardStyle: {...cardStyle}
            }}
          />
        ))}
      </CustomDiv>
    </Container>
  )
})

export default Service

// Defined Props Types
Service.propTypes = {
  customStyleHeading: PropTypes.object,
  services: PropTypes.string,
  infoService: PropTypes.string,
  typeCard: PropTypes.string,
  isButton: PropTypes.bool
}

// Defined default Props
Service.defaultProps = {
  customStyle: {},
  services: '',
  infoService: '',
  typeCard: '',
  isButton: true
}
