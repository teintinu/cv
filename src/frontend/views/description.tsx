import * as React from 'react'
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 1.5em;
  margin: 1px 0px 10px 0px;
`;
const Subtitle = styled.h3`
  font-size: 1.3em;
  margin: 1px 0px 10px 0px;
`;


export function Description() {
  return <div>
    <Title>Full Stack Javascript/React developer, tester, DevOps.</Title>
    <Subtitle>I’m searching for relocation to Portugal or work remotely.</Subtitle>
  </div>
}