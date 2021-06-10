import {Theme, themes} from 'components/theme';
import {Subject} from 'rxjs';
import {useRx, getKeys} from 'utils';

const rxTheme = new Subject<Theme>()
rxTheme.next('light')

export function useThem() {
  return useRx(rxTheme)
}

export function setTheme(themeName: Theme) {
  rxTheme.next(themeName)
  const theme = themes[themeName]
  getKeys(theme).forEach((pn) => {
    document.documentElement.style.setProperty(`--${pn}`, theme[pn])
  })
}

const usingDarkSchema = window.matchMedia('(prefers-color-scheme: dark)').matches
if (usingDarkSchema) setTheme('dark')
