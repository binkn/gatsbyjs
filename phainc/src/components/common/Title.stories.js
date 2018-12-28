import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Title from './Title'

// themes
import { Colors } from '../../themes/Colors'
import { SIZE, WEIGHT } from '../../themes/Typography'

storiesOf('Title', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {story()}
    </div>
  ))
  .add('base', () => (
    <Title
      text='We provide all kind service'
    />
  ))
  .add('large', () => (
    <Title
      text='We provide all kind service'
      fontSize={SIZE.large}
    />
  ))
  .add('change color', () => (
    <Title
      text='We provide all kind service'
      fontWeight={WEIGHT.small}
      color={Colors.violetRed}
    />
  ))
