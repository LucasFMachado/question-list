import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      primaryLight: string
      primaryDark: string
      secondary: string
      secondaryLight: string
      secondaryDark: string
      text: string
      background: string
    }
  }
}
