import React from 'react'

// components
import Brand from './Brand'
import NavBar from './NavBar'

const Header = React.memo(() => (
  <div>
    <Brand/>

    <NavBar/>
  </div>
))

export default Header
