import React, { Component } from 'react';
import styled from 'styled-components';

const Tagline = styled.p`
  color: #fff;
  font-weight: 400;
  background-color: rgba(0,0,0,.375);
  padding: .35em;
  font-size: 1.05em;
  margin: 0 0 3em 0;
    @media (min-width: 360px) {
    font-size: 1.15em;
  }
  @media (min-width: 900px) {
    font-size: 2em;
  }

`;

export default class extends Component {
  render() {
    return (
      <Tagline>
        { this.props.val }
      </Tagline>

    );
  }
}
