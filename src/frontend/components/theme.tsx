
import {createGlobalStyle} from 'styled-components';
import {getKeys} from 'utils';

export type Theme = 'light' | 'dark'

interface ThemeProps {
  primaryBg: string
  primaryFg: string
  cardBg: string
  cardFg: string
}

const light: ThemeProps = {
  primaryBg: '#070bdd',
  primaryFg: 'white',
  cardBg: '#fffffa',
  cardFg: 'black',
}

const dark: ThemeProps = {
  primaryBg: '#070bdd',
  primaryFg: 'white',
  cardBg: '#e0f7fa',
  cardFg: 'white'
}

export const themes: Record<Theme, ThemeProps> = {
  light,
  dark
}

export const ThemeStyle = createGlobalStyle`

  @import url(https://fonts.googleapis.com/css?family=Roboto);
  @import url(https://fonts.googleapis.com/css?family=Sofia);

  :root {
    ${getKeys(light)
    .map((pn) => `--${pn}: ${light[pn]}`
    ).join(';')}
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: Roboto;
    font-weight: normal;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`
