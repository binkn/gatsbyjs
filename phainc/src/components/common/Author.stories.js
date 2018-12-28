import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Author from './Author'

// theme module
import Images from '../../themes/Images'

storiesOf('Author', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {story()}
    </div>
  ))
  .add('Author', () => (
    <Author
      src={Images.adam}
      titleText='Mahfuz Riad'
      descriptionText='Co-Founder of Company'
      customStyle={{
        authorStyle: {
          textAlign: 'left'
        },
        wrapperStyle: {
          width: '31%'
        }
      }}
    />
  ))
