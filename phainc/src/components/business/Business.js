import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// theme module
import { Colors } from '../../themes/Colors'

// components
import Container from '../common/Container'
import Heading from '../common/Heading'
import Percent from '../common/Percent'

// data
import DataBusiness from '../../constants/business'

const CustomDiv = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`

/**
 * Defined component
 */
const Business = React.memo(props => {
  const { className, customStyle } = props
  const { businesses, infoBusiness } = DataBusiness

  return (
    <div
      className= {className}
      style={customStyle}
    >
      <Container>
        <Heading
          titleText={infoBusiness.titleText}
          descriptionText={infoBusiness.descriptionText}
          isExtend
          extendText={infoBusiness.extendText}
          customStyle={{
            headingStyle: {
              color: `${Colors.white}`
            },
            titleStyle: {
              textAlign: 'center',
              color: `${Colors.white}`
            },
            descriptionStyle: {
              color: `${Colors.white}`
            },
            extendStyle: {
              color: `${Colors.white}`
            }
          }}
        />
        <CustomDiv>
          {businesses.map(item => (
            <Percent
              key={item.id}
              numberText={item.numberText}
              characterText={item.characterText}
              infoText={item.infoText}
            />
          ))}
        </CustomDiv>
      </Container>
    </div>
  )
})

// Defined styled component
export default styled(Business)`
  background-image: linear-gradient(to right, ${Colors.violetRed}, ${Colors.salmon});
  padding: 120px 0;
`

// Defined Props Types
Business.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object
}

// Defined default Props
Business.defaultProps = {
  className: '',
  customStyle: {}
}
