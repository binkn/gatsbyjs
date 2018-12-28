import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// component
import Logo from './Logo'

// themes
import Images from '../../themes/Images'

// Defined storybook for Image
storiesOf('Logo', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <BrowserRouter>
        {story()}
      </BrowserRouter>
    </div>
  ))
  .add('Logo dark', () => (
    <Logo
      src={Images.logoBlack}
      alt='logo'
      customStyle={{
        imgStyle: {
          width: '30%'
        }
      }}
    />
  ))
