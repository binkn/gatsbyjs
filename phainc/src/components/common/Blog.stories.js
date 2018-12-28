import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Blog from './Blog'

// data
import DataBlog from '../../constants/blog'

const { blog } = DataBlog

storiesOf('Blog', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {story()}
    </div>
  ))
  .add('Blog', () => (
    <Blog
      blogItem={blog[0]}
      customStyle={{
        width: '35%'
      }}
    />
  ))
