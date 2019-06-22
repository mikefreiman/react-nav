import React from 'react';
import styled from "styled-components";

import Banner from './styles/Banner';
import Flex from './styles/Flex';
import Tagline from './styles/Tagline';
import Tile from '../assets/tile.svg';


const Section = styled.section`
  position: relative;
  height: 100%;
  min-height: 100vh;
  min-height: 350px;
  background-image: url(${Tile}),
    linear-gradient(202deg, rgba(2, 97, 227, 1), rgba(50, 156, 251, 1));
  background-repeat: repeat, no-repeat;
  background-size: 225px 225px, auto;
  background-position: center, center;
  @media (min-width: 760px) {
    background-size: 325px 325px, auto;
    background-position: center, center;
  }
  @media (min-width: 900px) {
    min-height: 700px;
    background-size: 425px 425px, auto;
    background-position: center, center;
  }
`;

export default () => (
    <Section>
      <Flex justify="flex-start">
      <Banner val="Nav Drawer" />
      <Tagline val="UI Component built with React JS" />
      </Flex>
    </Section>
);