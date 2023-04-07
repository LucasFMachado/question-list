import { darken, lighten } from 'polished'

export default {
  title: 'light',
  colors: {
    primary: '#fafafa',
    primaryLight: lighten(0.1, '#fafafa'),
    primaryDark: darken(0.1, '#fafafa'),
    secondary: '#61ab8f',
    secondaryLight: lighten(0.1, '#61ab8f'),
    secondaryDark: darken(0.1, '#61ab8f'),
    text: '#484450',
    background:
      'linear-gradient(to bottom, #fafafa, #f4f4f4, #ededed, #e7e7e7, #e1e1e1)',
  },
}
