import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Card from './Card'

// theme module
import Icons from '../../themes/Icons'

storiesOf('Card', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {story()}
    </div>
  ))
  .add('transform', () => (
    <Card
      type='transform'
      src={Icons.tax}
      alt='tax'
      titleText='Tax Planning'
      descriptionText='Strategy experience and analytical expertise combine to enable decision making and create value.'
    />
  ))
  .add('base', () => (
    <Card
      src={Icons.tax}
      alt='tax'
      titleText='Tax Planning'
      descriptionText='Strategy experience and analytical expertise combine to enable decision making and create value.'
    />
  ))
  .add('shadow', () => (
    <Card
      src={Icons.tax}
      type='shadow'
      alt='tax'
      isButton={false}
      titleText='Tax Planning'
      descriptionText='Strategy experience and analytical expertise combine to enable decision making and create value.'
    />
  ))
