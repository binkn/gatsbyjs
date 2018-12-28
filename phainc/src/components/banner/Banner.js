import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

// components
import Description from '../common/Description'
import Image from '../common/Image'
import Button from '../common/Button'
import Title from '../common/Title'

// themes
import { SIZE, WEIGHT , TYPE } from '../../themes/Typography'
import { Colors } from '../../themes/Colors'

// data
import DataBanner from '../../constants/banner'
import Icons from '../../themes/Icons'

const CustomDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`

// Style reuse description
const CustomDescription = styled(Description)`
  font-size: ${SIZE.Big};
  line-height: ${SIZE.mBig};
  font-weight: ${WEIGHT.base};
  color: ${Colors.white};
`

// Style wrapper div
const WrapperDiv = styled.div`
  transform: translateY(80%);
`

// Style column
const SingleColumn = styled.div`
  height: 30px;
  background-color: ${Colors.white};
  max-width: 2px;
  margin: 0 auto;
`

// Style div wrap social icon
const CustomSocial = styled.div`
  position: absolute;
  left: 58px;
  top: 673px;
`

// Style div wrap buttons
const WrapperButton = styled.div`
  text-align: center;
  margin-top: 5px;
`

const CustomOther = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`

const OtherDescription = styled(Description)`
  font-size: 18px;
  color: ${Colors.white}
`

const Banner = (props) => {
  const {
    className,
    customStyle,
    isHome,
    pageName
  } = props

  const { socialIcons } = DataBanner

  // render banner for home page
  const renderHome = () => (
    <React.Fragment>
      <WrapperDiv>
        <SingleColumn />

        <Description
          text='We help you'
          customStyle={{
            textTransform: 'uppercase',
            fontSize: `${SIZE.base}`,
            lineHeight: `${SIZE.large}`,
            fontWeight: `${WEIGHT.xxSmall}`,
            color: `${Colors.white}`,
            letterSpacing: '6px',
            paddingTop: '15px'
          }}
        />

        <CustomDiv>
          <CustomDescription
            text='Browse For'
          />

          <Description
            text=' Suitable'
            customStyle={{
              fontFamily: `${TYPE.workSans}`,
              lineHeight: `${SIZE.mBig}`,
              fontWeight: `${WEIGHT.mini}`,
              fontSize: `${SIZE.Big}`,
              color: `${Colors.white}`,
              paddingLeft: '10px'
            }}
          />
        </CustomDiv>

        <CustomDescription
          text='Financial Plans.'
        />

        <WrapperButton>
          <Button
            text='Contact Us'
            type='light'
          />
          <Button
            text='Read More'
            type='glow'
            customStyle={{
              buttonStyle: {
                marginLeft: '15px',
                borderColor: 'transparent'
              }
            }}
          />
        </WrapperButton>
      </WrapperDiv>

      <CustomSocial>
        {socialIcons.map(item => (
          <Image
            key={item.id}
            src={item.src}
            alt={item.alt}
            customStyle={{
              width: '30px',
              height: '18px',
              marginLeft: '10px'
            }}
          />
        ))}
      </CustomSocial>
    </React.Fragment>
  )

  // render banner for other pages
  const renderOther = () => (
    <React.Fragment>
      <Title
        text={pageName}
        fontSize='52px'
        customStyle={{
          textAlign: 'center',
          color: `${Colors.white}`,
          paddingTop: '30px'
        }}
      />
      <CustomOther>
        <OtherDescription
          text='Phainc'
        />
        <Image
          src={Icons.nextIcon}
          alt='next icon'
          customStyle={{
            height: '15px',
            margin: '5px 10px'
          }}
        />
        <OtherDescription
          text={pageName}
        />
      </CustomOther>
    </React.Fragment>
  )

  return (
    <div
      className={className}
      style={customStyle}
    >
      {isHome ? renderHome() : renderOther()}
    </div>
  )
}

export default styled(Banner)`
  background-size: cover;
  background-position: center center;

  ${props => props.type='other' && css`
    background-image: url(${props.src});
    height: ${props.heightBg};
    background-color: ${Colors.gallery};
    padding: ${props.padding};
  `};

  ${props => props.type='main' && css`
    background-image: url(${props.src});
    height: ${props.heightBg};
    opacity: 1;
    position: relative;
  `};
`

Banner.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string,
  isHome: PropTypes.bool,
  pageName: PropTypes.string,
  padding: PropTypes.string,
  heightBg: PropTypes.string
}

Banner.defaultProps = {
  className: '',
  src: '',
  type: 'main',
  isHome: true,
  pageName: '',
  padding: '',
  heightBg: ''
}
