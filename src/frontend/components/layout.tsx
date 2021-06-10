import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  width: 100%;
  margin-top: 100px;
  grid-template-columns: minmax(200px, 2fr) minmax(100px, 1fr);  
  &&>*:nth-child(8), &&>*:nth-child(9) {
    grid-column: span 2;
  }
  &&>*:nth-child(4) {
    grid-row: span 2;
  }
`;
