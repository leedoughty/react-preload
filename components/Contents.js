import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  color: white;
  background-color: black;
  width: 100%;
  height: 100%;
`

const Title = styled.h1`
  font-size: 1.5em
  font-family: "Helvetica";
`

class Contents extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          <p>Sketch 1</p>
          <p>Sketch 2</p>
          <p>Sketch 3</p>
        </Title>
      </Wrapper>
    )
  }
}

export default Contents;
