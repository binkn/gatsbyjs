import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Components
import Heading from '../common/Heading'
import List from '../common/List'
import Button from '../common/Button'

// themes
import { Colors } from '../../themes/Colors'
import { WEIGHT } from '../../themes/Typography'

// Define component
const Profit = React.memo(props => {
  const {
    className,
    customStyle,
    src,
    alt,
    items,
    info,
    textButton
  } = props

  const {
    descriptionText,
    titleText,
    extendText
  } = info

  return (
    <div
      style={customStyle}
      className={className}
    >
      <Heading
        titleText={titleText}
        descriptionText={descriptionText}
        isExtend
        extendText={extendText}
        customStyle={{
          titleStyle: {
            marginTop: '10px'
          },
          descriptionStyle: {
            textAlign: 'left',
            marginBottom: '20px'
          },
          extendStyle: {
            textAlign: 'left',
            marginBottom: '35px'
          }
        }}
      />

      <List
        items={items}
        isOrdered={false}
        isImage
        src={src}
        alt={alt}
        customStyle={{
          wrapperStyle:{
            marginBottom: '38px'
          },
          imgStyle: {
            width: 'inherit',
            paddingRight: '30px'
          },
          liStyle: {
            textAlign: 'left',
            margin: '10px 0',
            lineHeight: '26px',
            fontWeight: `${WEIGHT.small}`,
            color: `${Colors.dustyGray}`
          }
        }}
      />

      <Button
        text={textButton}
        type='transform'
      />
    </div>
  )
})

export default styled(Profit)`
  text-align: left;
`

Profit.propTypes = {
  customStyle: PropTypes.object,
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  items: PropTypes.object,
  info: PropTypes.object,
  textButton: PropTypes.string
}

Profit.defaultProps = {
  customStyle: {},
  className: '',
  src: '',
  alt: '',
  items: {},
  info: {},
  textButton: ''
}
