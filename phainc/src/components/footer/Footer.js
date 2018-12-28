import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// theme modules
import { Colors } from '../../themes/Colors'

// components
import Social from './social/Social'
import Info from './info/Info'
import News from './news/News'
import Address from './address/Address'
import Container from '../common/Container'
import Description from '../common/Description'

const Copyright = styled.div`
  background-color: ${Colors.cidGrey};
  margin-top: 40px;
`

const Footer = React.memo(props => {
  const { className, customStyle } = props

  return (
    <div
      className={className}
      style={customStyle}
    >
      <Container
        customStyle={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '55px'
        }}
      >
        <Social />

        <Info />

        <News />

        <Address />
      </Container>

      <Copyright>
        <Description
          text='&copy; Copyright 2018 All Right Reserved&#46;'
          color={Colors.dustyGray}
          customStyle={{
            fontSize: '13px',
            margin: 0,
            padding: '25px'
          }}
        />
      </Copyright>
    </div>
  )
})

export default styled(Footer)`
  background-color: ${Colors.codGay};
`

// Defined Props Types
Footer.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object
}

// Defined default Props
Footer.defaultProps = {
  className: '',
  customStyle: {}
}
