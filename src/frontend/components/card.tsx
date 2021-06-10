import * as React from 'react'
import {setTheme} from 'stores/theme';
import styled from 'styled-components';

export interface CardProps {
  title: string
  span?: number
  children: React.ReactNode
}

const CardBox = styled.div<{span?: number}>`
  background-color: var(--cardBg);
  margin: 5px;
  padding: 5px;
  color: var(--cardFg);
  transition: background-color 1s;
  transition: 400ms;
  overflow: hidden;
  border-radius: 1%;
  ${({span}) => `grid-column: span ${span};`}
  &&:hover {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
`;

const CardTitle = styled.h1`
  font-size: 1.5em;
  margin: 1px 0px 10px 0px;
`;

export function Card({title, span, children}: CardProps) {
  return <CardBox span={span}>
    <CardTitle onClick={() => setTheme('dark')}>{title}</CardTitle>
    {children}
  </CardBox>
}
