import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// theme modules
import Images from '../../themes/Images'
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
  const { className, customStyle, type } = props

  const renderImgLeft = () => (
    <Container
      customStyle={{
        display: 'flex'
      }}
    >
      <Image
        src={Images.market}
        alt='market'
        customStyle={{
          width: '525px',
          height: '525px',
          marginRight: '63px'
        }}
      />
      <CustomDiv>
        <Heading
          isExtend={false}
          titleText='Vision To Market'
          descriptionText=' On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized. Consulting is about solving problems—fast. Lean Methods consulting services are delivered using proven methodical approaches applied in a highly collaborative fashion.'
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
    <div/>
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
  type: PropTypes.string
}

// Defined default Props
Post.defaultProps = {
  className: '',
  customStyle: {},
  type: ''
}
