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

class Layout extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          <p>Preload</p>
        </Title>
      </Wrapper>
    )
  }
}

export default Layout;
