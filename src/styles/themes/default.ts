import { darken, lighten } from 'polished'

export default {
  title: 'dark',
  colors: {
    primary: '#319795',
    primaryLight: lighten(0.1, '#319795'),
    primaryDark: darken(0.1, '#319795'),
    secondary: '#4FD1C5',
    secondaryLight: lighten(0.1, '#4FD1C5'),
    secondaryDark: darken(0.1, '#4FD1C5'),
    text: '#1D4044',
    error: '#db303c',
    success: '#61ab8f',
    background: '#E6FFFA',
  },
}
