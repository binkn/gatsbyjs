import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Components
import Image from '../common/Image'
import Description from '../common/Description'
import Title from '../common/Title'

const CustomDiv = styled.div`
  display: flex;
`

/**
 * Defined component Contact
 */
const Contact = React.memo(props => {
  const {
    src,
    alt,
    isTitle,
    title,
    description,
    className,
    customStyle,
    contactStyle
  } = props
  const { descriptionStyle, imgStyle } = contactStyle

  // if have title render all
  const renderInfo = () => {
    const {
      titleStyle,
      descriptionStyle,
      subStyle
    } = contactStyle

    return (
      <div style={subStyle} >
        <Title
          text={title}
          customStyle={titleStyle}
        />

        <Description
          text={description}
          customStyle={descriptionStyle}
        />
      </div>
    )
  }

  return (
    <div
      className={className}
      style={customStyle}
    >
      <CustomDiv>
        <Image
          src={src}
          alt={alt}
          customStyle={imgStyle}
        />

        {isTitle ?
          renderInfo() :
          <Description
            text={description}
            customStyle={descriptionStyle}
          />
        }
      </CustomDiv>
    </div>
  )
})

export default Contact

// Defined Props Types
Contact.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  isTitle: PropTypes.bool,
  contactStyle: PropTypes.object
}

// Defined default Props
Contact.defaultProps = {
  className: '',
  customStyle: {},
  src: '',
  alt: '',
  title: '',
  description: '',
  isTitle: true,
  contactStyle: {}
}
