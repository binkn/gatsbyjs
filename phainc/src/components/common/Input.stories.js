import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// component
import Input from './Input'

// Defined storybook for Input
storiesOf('Input', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px', backgroundColor: '#999' }}>
      {story()}
    </div>
  ))
  .add('Input', () => (
    <Input
      defaultValue=''
      name='email'
      placeHolder='Your email address'
      inputRef={(value) => {this.textValue = value}}
      handleOnChange={action('onChange')}
      customStyle={{
        margin: '10px'
      }}
    />
  ))
