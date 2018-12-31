import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// theme modules
import { Colors } from '../../themes/Colors'
import { TYPE, WEIGHT } from '../../themes/Typography'

// components
import Image from '../common/Image'
import Heading from '../common/Heading'
import Button from '../common/Button'
import Container from '../common/Container'

const CustomDiv = styled.div`
  transform: translateY(23%);
`

const Post = React.memo(props => {
  const { className, customStyle, type, src, alt, titleText, descriptionText } = props

  const renderImgLeft = () => (
    <Container
      customStyle={{
        display: 'flex',
        margin: '0 133px 0',
        paddingTop: '110px'
      }}
    >
      <Image
        src={src}
        alt={alt}
        customStyle={{
          width: '525px',
          height: '525px',
          marginRight: '63px'
        }}
      />

      <CustomDiv>
        <Heading
          isExtend={false}
          titleText={titleText}
          descriptionText={descriptionText}
          customStyle={{
            titleStyle: {
              fontSize: '30px',
              fontWeight: '700',
              lineHeight: '50px',
              color: `${Colors.black}`,
              textTransform: 'none'
            },
            descriptionStyle: {
              fontFamily: `${TYPE.roboto}`,
              fontWeight: `${WEIGHT.xxSmall}`,
              fontSize: '18px',
              lineHeight: '28px',
              color: `${Colors.dustyGray}`,
              textAlign: 'left',
              padding: '30px 0 60px'
            }
          }}
        />

        <Button
          type='glow'
          text='Read More'
        />
      </CustomDiv>
    </Container>
  )

  const renderImgRight = () => (
    <Container
      customStyle={{
        display: 'flex',
        margin: '0 133px 0',
        paddingTop: '110px'
      }}
    >
      <CustomDiv>
        <Heading
          isExtend={false}
          titleText={titleText}
          descriptionText={descriptionText}
          customStyle={{
            titleStyle: {
              fontSize: '30px',
              fontWeight: '700',
              lineHeight: '50px',
              color: `${Colors.black}`,
              textTransform: 'none'
            },
            descriptionStyle: {
              fontFamily: `${TYPE.roboto}`,
              fontWeight: `${WEIGHT.xxSmall}`,
              fontSize: '18px',
              lineHeight: '28px',
              color: `${Colors.dustyGray}`,
              textAlign: 'left',
              padding: '30px 0 60px'
            }
          }}
        />

        <Button
          type='glow'
          text='Read More'
        />
      </CustomDiv>

      <Image
        src={src}
        alt={alt}
        customStyle={{
          width: '525px',
          height: '525px',
          marginLeft: '63px'
        }}
      />
    </Container>
  )

  return (
    <div
      className={className}
      style={customStyle}
    >
      {type==='left' ? renderImgLeft() : renderImgRight()}
    </div>
  )
})

export default Post

// Defined Props Types
Post.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object,
  type: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  titleText: PropTypes.string,
  descriptionText: PropTypes.string
}

// Defined default Props
Post.defaultProps = {
  className: '',
  customStyle: {},
  type: '',
  src: '',
  alt: '',
  titleText: '',
  descriptionText: ''
}
