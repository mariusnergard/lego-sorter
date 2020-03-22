import React from 'react';
import styled from 'styled-components';

const FillStyle = styled.div`
  grid-row: 1 / 9;
  grid-column: 1 / 9;
  flex-grow: 1;
  margin: 3rem;
  display: flex;
`;

// Just used to fill the entire Dashboard
export default ({ children }) => <FillStyle>{children}</FillStyle>;
