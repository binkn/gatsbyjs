import React from 'react'
import styled from 'styled-components'

// components
import Container from '../common/Container'
import Heading from '../common/Heading'
import Button from '../common/Button'
import Card from '../common/Card'

// data
import DataSolution from '../../constants/solution'

const CustomDiv = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const HeadingDiv = styled.div`
  flex: 0 33%;
`

const SolutionDiv = styled.div`
  flex: 0 67%;
`

const CustomCard = styled(Card)`
  width: 48%;
  margin-bottom: 20px;
  box-shadow: none;
`

/**
 * Defined component
 */
const Solution = React.memo(() => {
  const { infoSolution, solutions } = DataSolution

  return (
    <Container
      customStyle={{
        display: 'flex',
        marginTop: '50px',
        marginBottom: '50px'
      }}
    >
      <HeadingDiv>
        <Heading
          titleText={infoSolution.titleText}
          descriptionText={infoSolution.descriptionText}
          isExtend={false}
          customStyle={{
            headingStyle: {
              marginTop: '60px',
              marginBottom: '60px'
            },
            descriptionStyle: {
              textAlign: 'left'
            }
          }}
        />

        <Button
          type='transform'
          text='Learn More'
        />
      </HeadingDiv>

      <SolutionDiv>
        <CustomDiv>
          {solutions.map(item => (
            <CustomCard
              key={item.id}
              type='shadow'
              src={item.src}
              alt={item.alt}
              titleText={item.titleText}
              descriptionText={item.descriptionText}
              isButton={false}
              customStyle={{
                titleStyle: {
                  textAlign: 'left'
                },
                descriptionStyle: {
                  textAlign: 'left'
                }
              }}
            />
          ))}
        </CustomDiv>
      </SolutionDiv>
    </Container>
  )
})

export default Solution
