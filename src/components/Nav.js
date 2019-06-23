import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Ul from './styles/Menu';

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  height: 80px;
  background-color: #fff;
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  z-index: 150;
  position: relative;
`;

const Navicon = styled.div`
  display: flex;
  position: absolute;
  right: 6px;
  width: 48px;
  height: 100%;
  background-color: transparent;
  .icon-nav {
    width: 32px;
    height: auto;
  }
  path {
    fill: #787;
    fill-opacity: 1;
    stroke: none;
    stroke-width: 1.5;
    stroke-linejoin: round;
    stroke-miterlimit: 4;
    stroke-dasharray: none;
    stroke-opacity: 1;
  }
`;

const NavClose = styled.div`
  display: block;
  width: 28px;
  height: 28px;
  position: absolute;
  top: 26px;
  left: 26px;
  path {
    fill:#787;
    fill-opacity:1;
    stroke:none;
    stroke-width:1.5;
    stroke-linejoin:round;
    stroke-miterlimit:4;
    stroke-dasharray:none;
    stroke-opacity:1;
  }
`;

const Menu = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
position: fixed;
top: 0;
right: 0;
z-index: 160;
max-width: 400px;
width: 90%;
height: 100%;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
pointer-events: auto;
will-change: transform;
padding-top: 54px;
overflow-y: scroll;
background-color: #fff;
&.nav--hidden {
    -webkit-transform: translateX(103%);
    transform: translateX(103%);
    transition: transform 130ms ease-out;
}
  &.nav--visible {
    -webkit-transform: none;
    transform: none;
    transition: transform 330ms ease;
  }
`;


class ToggleNav extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <Nav>
        <Logo/>
        <Navbar>
          <Navicon onClick={this.handleClick}>
            <svg className="icon-nav" viewBox="0 0 24 18.000001">
              <g transform="translate(0,-1034.3622)" id="layer1">
                <path
                  d="M -7.3841859e-7,1041.8622 H 24 v 3 H -7.3841859e-7 Z"
                  id="rect4136"
                />
                <path
                  d="M -7.3841859e-7,1034.3622 H 24 v 3 H -7.3841859e-7 Z"
                  id="rect4136-3"
                />
                <path
                  d="M -7.3841859e-7,1049.3622 H 24 v 3 H -7.3841859e-7 Z"
                  id="rect4136-6"
                />
              </g>
            </svg>
          </Navicon>
          <Menu
            className={
              this.state.isToggleOn ? "nav--hidden" : "nav--visible"
            }
          >
            <NavClose onClick={this.handleClick}>
              <svg viewBox="0 0 16 16.000001">
                <g
                  transform="matrix(0.83805254,0,0,0.83805254,-2.0566306,0.45752735)"
                  id="g4278">
                  <path
                    id="rect4136-3"
                    d="M 4.5753784,-0.54594108 21.545941,16.424623 19.424621,18.545943 2.4540582,1.5753792 Z"
                    />
                  <path
                    id="rect4136-6"
                    d="M 2.4540581,16.424623 19.424621,-0.54594113 21.545941,1.5753793 4.5753783,18.545943 Z"
                    />
                </g>
              </svg>
            </NavClose>
            <Ul></Ul>
          </Menu>
        </Navbar>
      </Nav>
    );
  }
}
 
 export default ToggleNav; 
