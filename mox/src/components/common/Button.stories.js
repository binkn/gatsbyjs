import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Button from './Button'

storiesOf('Button', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px', backgroundColor: '#333' }}>
      {story()}
    </div>
  ))
  .add('Button', () => (
    <div>
      <Button
        text='Portfolio'
        type='default'
        onPress={action('clicked')}
      />

      <Button
        text='About us'
        type='primary'
        onPress={action('clicked')}
      />

      <Button
        text='Start'
        type='secondary'
        onPress={action('clicked')}
      />

      <Button
        text='Send'
        type='third'
        onPress={action('clicked')}
      />
    </div>
  ))
