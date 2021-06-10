import * as React from 'react'
import styled from 'styled-components';

export const Border = styled.img`
  border-radius: 30px;
`;

export function Photo() {
  return <Border src="photo.png" />
}