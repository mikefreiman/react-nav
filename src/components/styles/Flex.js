import styled from 'styled-components';

const Flex = styled.section`
   display: flex;
   flex-flow: row wrap;
   flex: 1 1 auto;
   justify-content: ${props => props.justify || "center"};
   width: 100%;
   max-width: 1000px;
   margin: 0 auto;
   padding: ${props => props.pad || "2em 1em"};
`;

export default Flex;
