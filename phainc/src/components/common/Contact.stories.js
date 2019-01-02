import React from 'react'
import { storiesOf } from '@storybook/react'

// component
import Contact from './Contact'

// themes
import Icons from '../../themes/Icons'

// Defined storybook for Image
storiesOf('Contact', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {story()}
    </div>
  ))
  .add('with title', () => (
    <Contact
      src={Icons.gpsIcon}
      alt='gps icon'
      isTitle
      title='Los Angeles'
      description='Gournadi, 1230  Bariasl'
      contactStyle={{
        subStyle: {
          paddingLeft: '28px'
        },
        titleStyle: {
          lineHeight: '28px'
        },
        descriptionStyle: {
          lineHeight: '26px'
        },
        imgStyle: {
          width: 'inherit',
          height: '100%'
        }
      }}
    />
  ))
  .add('without title', () => (
    <Contact
      src={Icons.addressIconMedium}
      alt='address icon'
      isTitle={false}
      description='201 Stokes Isle Apt. 896, New York 10010, United State'
      contactStyle={{
        descriptionStyle: {
          paddingLeft: '18px',
          width: '214px'
        },
        imgStyle: {
          width: 'inherit',
          height: '100%'
        }
      }}
    />
  ))
