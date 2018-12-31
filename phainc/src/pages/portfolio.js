import React from 'react'
import styled from 'styled-components'

// theme modules
import Images from '../themes/Images'

// components
import Banner from '../components/banner/Banner'
import Post from '../components/post/Post'

// data
import PostData from '../constants/post'

const CustomDiv = styled.div`
  margin-bottom: 133px;
`

const Portfolio = () => (
  <React.Fragment>
    <Banner
      type='other'
      src={Images.bgAbout}
      isHome={false}
      pageName='Portfolio Style 2'
      padding='65px 0'
      heightBg='300px'
    />

    <CustomDiv>
      {
        PostData.map(item => (
          <Post
            key={item.id}
            type={item.type}
            src={item.src}
            alt={item.alt}
            titleText={item.titleText}
            descriptionText={item.descriptionText}
          />
        ))
      }
    </CustomDiv>
  </React.Fragment>
)

export default Portfolio
