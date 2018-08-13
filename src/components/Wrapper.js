import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
`

class Wrapper extends React.Component {
  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  handleMouseMove = ({ clientX, clientY }) => {
    this.setState({
      clientX,
      clientY,
    })
  }

  updateWindowDimensions = () => {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    })
  }

  render() {
    const children = this.props.children
    return (
      <StyledWrapper onMouseMove={this.handleMouseMove}>
        {React.Children.map(children, child => React.cloneElement(child, { ...this.state }))}
      </StyledWrapper>
    )
  }
}

export default Wrapper