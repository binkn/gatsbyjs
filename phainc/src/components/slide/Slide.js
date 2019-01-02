import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// components
import Container from '../common/Container'
import Image from '../common/Image'
import Heading from '../common/Heading'
import Description from '../common/Description'

// themes
import Icons from '../../themes/Icons'
import { Colors } from '../../themes/Colors'

const CustomDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const WrapperDescription = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`

const Arrow = props => {
  return (
    <a
      href='#'
      onClick={props.onClick}
    >
      <Image
        src={props.src}
        alt={props.alt}
      />
    </a>
  )
}

const CarouselSlide = props => {
  const CustomLiActive = styled.li`
    margin-right: auto;
    margin-left: auto;
    max-width: 900px;
    list-style-type: none;
    text-align: center;
    display: block;
  `
  const CustomLi = styled(CustomLiActive)`
    display: none;
  `

  const renderDetail = () => (
    <React.Fragment>
      <Image
        src={props.slide.srcIcon}
        alt={props.slide.altIcon}
      />
      <Description
        text={props.slide.content}
        fontSize='26px'
        color={Colors.dustyGray}
        customStyle={{
          lineHeight: '36px',
          fontStyle: 'italic'
        }}
      />
      <Image
        src={props.slide.srcAuthor}
        alt={props.slide.altAuthor}
        customStyle={{
          height: '100px',
          width: '100px',
          borderRadius: '50%',
          marginTop: '30px'
        }}
      />

      <WrapperDescription>
        <Description
          text={props.slide.author}
          fontSize='22px'
          color={Colors.mineShaft}
        />
        <Description
          text={props.slide.source}
          fontSize='22px'
          customStyle={{
            marginLeft: '20px'
          }}
        />
      </WrapperDescription>
    </React.Fragment>
  )

  const renderLiActive  = () => (
    <CustomLiActive>
      {renderDetail()}
    </CustomLiActive>
  )

  const renderLi  = () => (
    <CustomLi>
      {renderDetail()}
    </CustomLi>
  )

  return (
    <React.Fragment>
      {props.index === props.activeIndex ? renderLiActive() : renderLi()}
    </React.Fragment>
  )
}

class Slide extends Component {
  constructor(props) {
    super(props)

    this.goToPrevSlide = this.goToPrevSlide.bind(this)
    this.goToNextSlide = this.goToNextSlide.bind(this)

    this.state = {
      activeIndex: 0
    }
  }

  goToPrevSlide = e => {
    e.preventDefault()

    let index = this.state.activeIndex
    let { slides } = this.props
    let slidesLength = slides.length

    if (index < 1) {
      index = slidesLength
    }

    --index

    this.setState({
      activeIndex: index
    })
  }

  goToNextSlide = e => {
    e.preventDefault()

    let index = this.state.activeIndex
    let { slides } = this.props
    let slidesLength = slides.length - 1

    if (index === slidesLength) {
      index = -1
    }

    ++index

    this.setState({
      activeIndex: index
    })
  }

  render() {
    return (
      <Container>
        <Heading
          titleText='TESTIMONIALS'
          descriptionText='What Our Customers Are Saying!'
          isExtend={false}
          customStyle={{
            headingStyle: {
              padding: '50px 0 40px'
            },
            titleStyle: {
              textAlign: 'center'
            }
          }}
        />
        <CustomDiv>
          <Arrow
            onClick={e => this.goToPrevSlide(e)}
            src={Icons.prevSlideIcon}
            alt='prev icon'
          />
          <ul>
            {this.props.slides.map((slide, index) => (
              <CarouselSlide
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                slide={slide}
              />
            ))}
          </ul>
          <Arrow
            onClick={e => this.goToNextSlide(e)}
            src={Icons.nextSlideIcon}
            alt='next icon'
          />
        </CustomDiv>
      </Container>
    )
  }
}

export default Slide

// Defined Props Types
Slide.propTypes = {
  slides: PropTypes.object
}

// Defined default Props
Slide.defaultProps = {
  slides: {}
}
