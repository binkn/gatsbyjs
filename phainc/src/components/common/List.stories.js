import React from 'react'
import { storiesOf } from '@storybook/react'

// component
import List from './List'

// themes
import Icons from '../../themes/Icons'

// Data
import ProfitData from '../../constants/profit'

const { career } = ProfitData

// Defined storybook for Image
storiesOf('List', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {story()}
    </div>
  ))
  .add('ordered', () => (
    <List
      items={career}
      isOrdered
      customStyle={{
        wrapperStyle: {
          marginLeft: '10px'
        },
        liStyle: {
          textAlign: 'left'
        }
      }}
    />
  ))
  .add('unordered', () => (
    <List
      items={career}
      isOrdered={false}
      isImage={false}
      customStyle={{
        liStyle: {
          textAlign: 'left'
        }
      }}
    />
  ))
  .add('unordered with icon', () => (
    <List
      items={career}
      isOrdered={false}
      isImage
      src={Icons.dotIcon}
      alt='icon'
      customStyle={{
        imgStyle: {
          width: 'inherit'
        },
        liStyle: {
          textAlign: 'left'
        }
      }}
    />
  ))
