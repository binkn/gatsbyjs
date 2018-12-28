import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// theme modules
import { Colors } from '../../../themes/Colors'

// components
import Contact from '../../common/Contact'
import Title from '../../common/Title'

// data
import AddressData from '../../../constants/address'

const Address = React.memo(props => {
  const { className, customStyle } = props
  const { titleText, iconList } = AddressData

  return (
    <div
      className={className}
      style={customStyle}
    >
      <Title
        text={titleText}
        customStyle={{
          textTransform: 'upperCase',
          color: `${Colors.white}`,
          marginBottom: '50px'
        }}
      />
      {iconList.map(item => (
        <Contact
          key={item.id}
          src={item.src}
          alt={item.alt}
          isTitle={false}
          description={item.description}
          contactStyle={{
            descriptionStyle: {
              paddingLeft: '18px',
              paddingBottom: '15px',
              textAlign: 'left'
            },
            imgStyle: {
              width: 'inherit',
              height: '100%'
            }
          }}
        />
      ))}
    </div>
  )
})

export default styled(Address)`
  flex: 0 0 25%;
  padding: 0 15px;
`

// Defined Props Types
Address.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object
}

// Defined default Props
Address.defaultProps = {
  className: '',
  customStyle: {}
}
