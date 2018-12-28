import React from 'react'
import { storiesOf } from '@storybook/react'

// component
import Image from './Image'

// themes
import Images from '../../themes/Images'
import Icons from '../../themes/Icons'

// Defined storybook for Image
storiesOf('Image', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {story()}
    </div>
  ))
  .add('Img', () => (
    <Image
      src={Images.bgHome}
      alt='home'
      customStyle={{
        width: '500px'
      }}
    />
  ))
  .add('Icon', () => (
    <Image
      src={Icons.searchIcon}
      alt='search'
      customStyle={{
        width: 'inherit'
      }}
    />
  ))
