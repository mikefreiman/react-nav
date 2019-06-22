import React, { Component } from 'react';
import styled from 'styled-components';

const Banner = styled.h1`
  color: #fff;
  font-weight: 500;
  padding: .5em 0;
  line-height: 1em;
  word-spacing: 5000px;
  text-transform: uppercase;
  font-size: 3em;
    @media (min-width: 600px) {
    font-size: 6em;
  }
  @media (min-width: 900px) {
    font-size: 8em;
  }
`;

export default class extends Component {
  render() {
    return (
      <Banner>
        { this.props.val }
      </Banner>

    );
  }
}
