import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Components
import Container from '../common/Container'
import Heading from '../common/Heading'
import MediaBox from '../common/MediaBox'

// Data
import DataAdvice from '../../constants/advice'

const CustomDiv = styled.div`
  display: flex;
`

// Define component
const Advice = React.memo(props => {
  const { className, customStyle } = props
  const { infoAdvice, advices } = DataAdvice

  return (
    <div
      style={customStyle}
      className={className}
    >
      <Container>
        <Heading
          titleText={infoAdvice.titleText}
          descriptionText={infoAdvice.descriptionText}
          isExtend={false}
          customStyle={{
            titleStyle: {
              marginTop: '115px',
              textAlign: 'center'
            },
            descriptionStyle: {
              marginBottom: '75px'
            }
          }}
        />

        <CustomDiv>
          {
            advices.map(item => (
              <MediaBox
                key={item.id}
                src={item.src}
                alt={item.alt}
                titleText={item.titleText}
                descriptionText={item.descriptionText}
              />
            ))
          }
        </CustomDiv>
      </Container>
    </div>
  )
})

export default Advice

Advice.propTypes = {
  customStyle: PropTypes.object,
  className: PropTypes.string
}

Advice.defaultProps = {
  customStyle: {},
  className: ''
}
