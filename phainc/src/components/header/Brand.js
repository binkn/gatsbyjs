import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Components
import Logo from '../common/Logo'
import Container from '../common/Container'
import Contact from '../common/Contact'
import Button from '../common/Button'

// Import themes modules
import Images from '../../themes/Images'
import { Colors } from '../../themes/Colors'

// Data
import DataContact from '../../constants/contact'

const { headerData } = DataContact

// Define component
const Brand = React.memo(props => {
  const { className, customStyle } = props

  return (
    <div
      style={customStyle}
      className={className}
    >
      <Container
        customStyle={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '25px 15px',
          alignItems: 'center'
        }}
      >
        <Logo
          src={Images.logoBlack}
          alt='logo'
          customStyle={{
            imgStyle: {
              width: '228px',
              maxHeight: '75px'
            },
            linkStyle: {
              width: '25%'
            }
          }}
        />
        {
          headerData.map(item => (
            <Contact
              key={item.id}
              src={item.src}
              alt={item.alt}
              isTitle
              title={item.title}
              description={item.description}
              contactStyle={{
                subStyle: {
                  paddingLeft: '28px'
                },
                titleStyle: {
                  lineHeight: '28px'
                },
                descriptionStyle: {
                  lineHeight: '26px'
                },
                imgStyle: {
                  width: 'inherit',
                  height: '100%'
                }
              }}
            />
          ))
        }
        <React.Fragment>
          <Button
            text='Get Free Quote'
            type='dark'
          />
        </React.Fragment>
      </Container>
    </div>
  )
})

export default styled(Brand)`
  border-bottom: 1px solid ${Colors.primary};
`

Brand.propTypes = {
  customStyle: PropTypes.object,
  className: PropTypes.string
}

Brand.defaultProps = {
  customStyle: {},
  className: ''
}
