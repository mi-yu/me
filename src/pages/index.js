import React from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'
import Wrapper from '../components/Wrapper'

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Title = styled.h1.attrs({
  transform: props => calculateTransform(props),
})`
  font-size: 4rem;
  font-weight: 200;
  transform: ${props => props.transform};
`

const calculateTransform = ({
  screenWidth,
  screenHeight,
  clientX,
  clientY,
}) => {
  const skewAmt = (75 * (screenWidth / 2 - clientX)) / screenWidth
  if (clientY > screenHeight / 2) {
    return `scale(1, -1) skew(${skewAmt}deg)`
  }

  return `skew(${skewAmt}deg)`
}

const Container = props => {
  // console.log(React.Children.map(props.children, child => React.cloneElement(child, { ...props })))
  const { screenWidth, screenHeight, clientX, clientY } = props
  return (
    <StyledContainer>
      {React.Children.map(props.children, child =>
        React.cloneElement(child, {
          screenWidth,
          screenHeight,
          clientX,
          clientY,
        })
      )}
    </StyledContainer>
  )
}

const Link = styled.a`
  text-decoration: none;
  color: lightcoral;
`

export default () => (
  <Wrapper>
    <Container>
      <Title>MICHAEL YU</Title>
      <p>3rd year Turing Scholar at UT Austin</p>
      <p>
        Working on
        <Link
          href="https://draped.co"
          rel="noopener noreferrer"
          target="_blank"
        >
          {' '}
          draped.co
        </Link>
      </p>
      <p>
        See my
        <Link
          href={withPrefix('./resume.pdf')}
          rel="noopener noreferrer"
          target="_blank"
        >
          {' '}
          resume
        </Link>
      </p>
    </Container>
  </Wrapper>
)
