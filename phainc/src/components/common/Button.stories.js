import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Button from './Button'

// themes
import Icons from '../../themes/Icons'

storiesOf('Button', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {story()}
    </div>
  ))
  .add('light', () => (
    <div style={{ backgroundColor: '#333' }}>
      <Button
        text='About Us'
        type='light'
        onPress={action('clicked')}
        customStyle={{
          buttonStyle: {
            margin: '10px'
          }
        }}
      />
    </div>
  ))
  .add('dark', () => (
    <Button
      text='Get Free Quote'
      type='dark'
      onPress={action('clicked')}
    />
  ))
  .add('glow', () => (
    <Button
      text='Get Free Quote'
      type='glow'
      onPress={action('clicked')}
    />
  ))
  .add('transform', () => (
    <Button
      text='Get Free Quote'
      type='transform'
      onPress={action('clicked')}
    />
  ))
  .add('icon', () => (
    <Button
      src={Icons.searchIcon}
      alt='search icon'
      onPress={action('clicked')}
      customStyle={{
        buttonStyle: {
          border: 'none'
        }
      }}
    />
  ))
  .add('text with icon', () => (
    <Button
      src={Icons.moveIcon}
      alt='move icon'
      text='More'
      onPress={action('clicked')}
      customStyle={{
        buttonStyle: {
          border: 'none'
        },
        imgStyle: {
          width: 'inherit',
          paddingLeft: '30px'
        }
      }}
    />
  ))
