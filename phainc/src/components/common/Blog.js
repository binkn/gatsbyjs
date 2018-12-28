import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// components
import Image from './Image'
import Description from './Description'
import Title from './Title'

// theme module
import { Colors } from '../../themes/Colors'

const WrapperDiv = styled.div`
  padding: 30px 20px;
  background: ${Colors.white};
  box-shadow: 0 0px 40px ${Colors.second};
  border-radius: 0 0 10px 10px;
  margin-top: -5px;
`

const CustomDiv = styled.div`
  display: flex;
  text-align: left;
  margin-bottom: 7px;
`

const Date = styled(Description)`
  &:after {
    content: "/";
    margin: 0 15px;
  }
`

const Category = styled(Description)`
  &:hover {
    color: ${Colors.carnation}
  }
`

const CustomTitle = styled(Title)`
  margin-bottom: 14px;
  width: 73%;

  &:hover {
    color: ${Colors.carnation}
  }
`

const Link = styled.a`
  color: ${Colors.carnation};
  text-decoration: none;

  &:after {
    content: '';
    width: 24%;
    height: 1px;
    display: block;
    background-color: ${Colors.carnation};
  }

  &:hover {
    color: ${Colors.dustyGray};

    &:after {
      background-color: ${Colors.dustyGray};
    }
  }
`

const Blog = React.memo(props => {
  const {
    className,
    customStyle,
    blogItem
  } = props

  const {
    src,
    alt,
    date,
    category,
    titleBlog,
    href
  } = blogItem

  return (
    <article
      className={className}
      style={customStyle}
    >
      <Image
        src={src}
        alt={alt}
        customStyle={{
          width: '348px'
        }}
      />
      <WrapperDiv>
        <CustomDiv>
          <Date
            text={date}
          />

          <Category
            text={category}
          />
        </CustomDiv>
        <CustomTitle
          text={titleBlog}
        />

        <Link
          href={href}
        >
        Learn More
        </Link>
      </WrapperDiv>
    </article>
  )
})

export default styled(Blog)`
  text-align: left;
  background-color: ${Colors.white};
  width: 30%;
`

// Defined Props Types
Blog.propTypes = {
  className: PropTypes.string,
  customStyle: PropTypes.object
}

// Defined default Props
Blog.defaultProps = {
  className: '',
  customStyle: {}
}
