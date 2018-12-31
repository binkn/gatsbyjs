import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// components
import Author from '../common/Author'
import Container from '../common/Container'
import Heading from '../common/Heading'

// data
import DataTeam from '../../constants/team'

const CustomDiv = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
`

/**
 * Defined component
 */
const Team = React.memo(props => {
  const { teams, infoTeam } = DataTeam

  return (
    <Container>
      <Heading
        titleText={infoTeam.titleText}
        descriptionText={infoTeam.descriptionText}
        isExtend
        extendText={infoTeam.extendText}
        customStyle={{
          headingStyle: {
            marginTop: '60px',
            marginBottom: '60px'
          },
          titleStyle: {
            textAlign: 'center'
          },
          extendStyle: {
            paddingTop: '10px'
          }
        }}
      />
      <CustomDiv>
        {teams.map(item => (
          <Author
            key={item.id}
            isHome={props.isHome}
            src={item.src}
            alt={item.alt}
            titleText={item.titleText}
            descriptionText={item.descriptionText}
          />
        ))}
      </CustomDiv>
    </Container>
  )
})

export default Team

// Defined Props Types
Team.propTypes = {
  isHome: PropTypes.bool
}

// Defined default Props
Team.defaultProps = {
  isHome: true
}
