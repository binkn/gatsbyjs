import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Percent from './Percent'

storiesOf('Percent', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px', backgroundColor: '#000' }}>
      {story()}
    </div>
  ))
  .add('Percent', () => (
    <Percent
      numberText='95'
      characterText='%'
      infoText='Percent of users recommend us to friends and family'
      customStyle={{
        infoStyle: {
          width: '100%'
        }
      }}
    />
  ))
