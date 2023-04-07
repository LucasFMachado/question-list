import { darken, lighten } from 'polished'

export default {
  title: 'dark',
  colors: {
    primary: '#484450',
    primaryLight: lighten(0.1, '#484450'),
    primaryDark: darken(0.1, '#484450'),
    secondary: '#ff4a57',
    secondaryLight: lighten(0.1, '#ff4a57'),
    secondaryDark: darken(0.1, '#ff4a57'),
    text: '#fafafa',
    background:
      'linear-gradient(to bottom, #484450, #433f4b, #3f3b46, #3a3642, #36323d)',
  },
}
