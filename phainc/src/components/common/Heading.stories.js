import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Heading from './Heading'

storiesOf('Heading', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {story()}
    </div>
  ))
  .add('base', () => (
    <Heading
      titleText='Free & Rightful Advice!'
      descriptionText='We Are Money Experts'
      isExtend={false}
      customStyle={{
        titleStyle: {
          textAlign: 'center'
        }
      }}
    />
  ))
  .add('extend', () => (
    <Heading
      titleText='Free & Rightful Advice!'
      descriptionText='We Are Money Experts'
      isExtend
      extendText='We have the most famous experts in reputable company providing expert advice on Wills, Lasting Power of Attorney and Debt Solut.'
      customStyle={{
        titleStyle: {
          textAlign: 'center'
        }
      }}
    />
  ))
