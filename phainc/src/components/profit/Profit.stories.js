import React from 'react'
import { storiesOf } from '@storybook/react'

// component
import Profit from './Profit'

// themes
import Icons from '../../themes/Icons'

// Data
import ProfitData from '../../constants/profit'

const { info, career } = ProfitData

// Defined storybook for Profit
storiesOf('Profit', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      {story()}
    </div>
  ))
  .add('Career', () => (
    <Profit
      textButton='More About Us'
      info={info}
      items={career}
      src={Icons.dotIcon}
      alt='icon'
    />
  ))
