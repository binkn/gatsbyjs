import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

// Components
import NavLink from './NavLink'

// Data
import NavLinkData from '../../constants/navlink'

const { links } = NavLinkData

storiesOf('NavLink', module)
  .addDecorator(story => (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <BrowserRouter>
        {story()}
      </BrowserRouter>
    </div>
  ))
  .add('active', () => (
    <div>
      {links.map(item => (
        <NavLink key={item.id}>
          {item.name}
        </NavLink>
      ))
      }
    </div>
  ))
