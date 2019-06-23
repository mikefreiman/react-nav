import React, { Component } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: block;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  padding-top: 48px;
`;

const Li = styled.li`
display: flex;
  flex-direction: column;
  position: relative;
  a {
    padding: 0 24px;
    margin: 1rem 1.5rem;
    font-size: 1.25rem;
    text-transform: capitalize;
    color: #242526;
  }
  &.active,
  &:hover {
    a {
      color: #4497cb;
    }
  }
`;
export default class extends Component {
    render() {
        return (
          <Ul>
            <Li>
              <a href="/">Portfolio</a>
            </Li>
            <Li>
              <a href="/">Services</a>
            </Li>
            <Li>
              <a href="/">About</a>
            </Li>
            <Li>
              <a href="/">Contact</a>
            </Li>
          </Ul>
        );
    }
}