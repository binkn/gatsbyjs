import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Description from './Description'

// themes
import { Colors } from '../../themes/Colors'
import { SIZE, WEIGHT } from '../../themes/Typography'

storiesOf('Description', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {story()}
    </div>
  ))
  .add('base', () => (
    <Description
      text='Taking the time to manage your money better can really pay off. It can help you stay on top of your bills and save £1,000s each year.'
    />
  ))
  .add('large', () => (
    <Description
      text='Taking the time to manage your money better can really pay off. It can help you stay on top of your bills and save £1,000s each year.'
      fontSize={SIZE.large}
    />
  ))
  .add('change color', () => (
    <Description
      text='Taking the time to manage your money better can really pay off. It can help you stay on top of your bills and save £1,000s each year.'
      fontWeight={WEIGHT.small}
      color={Colors.salmon}
    />
  ))

