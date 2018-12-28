import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// Import theme module
import { SIZE } from '../../themes/Typography'
import { Colors } from '../../themes/Colors'
import Icons from '../../themes/Icons'

// components
import Container from '../common/Container'
import NavLink from '../common/NavLink'
import Button from '../common/Button'
import Description from '../common/Description'

// Data
import NavLinkData from '../../constants/navlink'

// Defined style for NavItem
const NavItem = styled.li`
  display: inline-block;
`

// Defined style for div wrap phone & search
const CustomDiv = styled.div`
  display: flex;
`

// Define style for ul
const CustomUl = styled.ul`
  margin: 0;
  padding-top: 3px;
`

// define component
const NavBar = React.memo(props => {
  const { className, customStyle } = props
  const { links } = NavLinkData

  return (
    <div
      className={className}
      style={customStyle}
    >
      <Container
        customStyle={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px'
        }}
      >
        <CustomUl>
          {
            links.map(item => (
              <NavItem
                key={item.id}
              >
                <NavLink
                  activeClassName='active'
                  href={item.href}
                >
                  {item.name}
                </NavLink>
              </NavItem>
            ))
          }
        </CustomUl>

        <CustomDiv>
          <Description
            text='Call on : 0123456789'
            fontWeight='bold'
            fontSize={SIZE.xLarge}
            color={Colors.mineShaft}
            customStyle={{
              height: '37px',
              letterSpacing: '1px',
              paddingRight: '20px',
              borderRight: `1px solid ${Colors.primary}`
            }}
          />

          <Button
            src={Icons.searchIcon}
            alt='search icon'
            customStyle={{
              buttonStyle: {
                border: 'none',
                paddingRight: '18px',
                paddingTop: '4px'
              }
            }}
          />
        </CustomDiv>
      </Container>
    </div>
  )
})

export default styled(NavBar)`
  margin: 0;
`

NavBar.propTypes = {
  customStyle: PropTypes.object,
  className: PropTypes.string
}

NavBar.defaultProps = {
  customStyle: {},
  className: ''
}
