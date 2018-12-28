import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// theme modules
import { Colors } from '../../../themes/Colors'
import { TYPE } from '../../../themes/Typography'

// components
import Heading from '../../common/Heading'
import Title from '../../common/Title'

// data
import NewsData from '../../../constants/news'

const News = React.memo(props => {
  const { className, customStyle } = props
  const { titleText, newsList } = NewsData

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
      {newsList.map(item => (
        <Heading
          key={item.id}
          titleText={item.title}
          descriptionText={item.description}
          isExtend={false}
          customStyle={{
            headingStyle: {
              paddingBottom: '35px'
            },
            titleStyle: {
              color: `${Colors.white}`,
              fontSize: '18px',
              textTransform: 'none'
            },
            descriptionStyle: {
              color: `${Colors.carnation}`,
              textAlign: 'left',
              lineHeight: '17px',
              fontSize: '16px',
              marginTop: '10px',
              fontFamily: `${TYPE.roboto}`
            }
          }}
        />
      ))}
    </div>
  )
})

export default styled(News)`
  flex: 0 0 25%;
  padding: 0 15px;
`

// Defined Props Types
News.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object
}

// Defined default Props
News.defaultProps = {
  className: '',
  customStyle: {}
}
