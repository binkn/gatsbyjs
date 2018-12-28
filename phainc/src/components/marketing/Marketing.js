import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// components
import Blog from '../common/Blog'
import Container from '../common/Container'

// theme modules
import { Colors } from '../../themes/Colors'

// data
import DataBlog from '../../constants/blog'
import Heading from '../common/Heading'

const CustomStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
`

const Marketing = React.memo(props => {
  const { className, customStyle } = props
  const { infoBlog, blog } = DataBlog

  return (
    <div
      className={className}
      style={customStyle}
    >
      <Container>
        <Heading
          titleText={infoBlog.titleText}
          descriptionText={infoBlog.descriptionText}
          isExtend
          extendText={infoBlog.extendText}
          customStyle={{
            headingStyle: {
              padding: '50px 0 40px'
            },
            titleStyle: {
              textAlign: 'center'
            },
            extendStyle: {
              fontSize: '18px',
              lineHeight: '28px',
              maxWidth: '780px',
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingTop: '8px'
            }
          }}
        />
        <CustomStyle>
          {blog.map(item => (
            <Blog
              key={item.id}
              blogItem={item}
            />
          ))}
        </CustomStyle>
      </Container>
    </div>
  )
})

export default styled(Marketing)`
  background-color: ${Colors.lilac}
`

// Defined Props Types
Marketing.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object
}

// Defined default Props
Marketing.defaultProps = {
  className: '',
  customStyle: {}
}
