import React from 'react'
import { storiesOf } from '@storybook/react'

// component
import MediaBox from './MediaBox'

// themes
import Icons from '../../themes/Icons'

// Defined storybook for MediaBox
storiesOf('MediaBox', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {story()}
    </div>
  ))
  .add('MediaBox', () => (
    <MediaBox
      src={Icons.chart}
      alt='chart'
      titleText='We are helpers Advice and guides'
      descriptionText='Taking the time to manage your money
      better can really pay off. It can help you stay on top
      of your bills and save £1,000s each year.'
    />
  ))
