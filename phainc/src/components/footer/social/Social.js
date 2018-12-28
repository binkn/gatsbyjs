import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// components
import Image from '../../common/Image'
import Logo from '../../common/Logo'
import Description from '../../common/Description'

// theme modules
import { Colors } from '../../../themes/Colors'

// data
import SocialData from '../../../constants/social'

const CustomDiv = styled.div`
  margin-right: 8px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${Colors.white};
  display: inline-block;

  &:hover {
    background-color: ${Colors.carnation}
  }
`

const Social = React.memo(props => {
  const { className, customStyle } = props

  const {
    srcLogo,
    altLogo,
    descriptionText,
    icons
  } = SocialData

  return (
    <div
      className={className}
      style={customStyle}
    >
      <Logo
        src={srcLogo}
        alt={altLogo}
      />

      <Description
        text={descriptionText}
        customStyle={{
          textAlign: 'left',
          margin: '25px 0'
        }}
      />

      {icons.map(item => (
        <CustomDiv
          key={item.id}
        >
          <Image
            src={item.src}
            alt={item.al}
            customStyle={{
              margin: '16px 0 0 16px'
            }}
          />
        </CustomDiv>
      ))}
    </div>
  )
})

export default styled(Social)`
  flex: 0 0 30%;
  padding: 0 15px;
`

Social.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object
}

Social.defaultProps = {
  className: '',
  customStyle: {}
}
