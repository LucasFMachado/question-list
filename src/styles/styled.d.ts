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
      error: string
      success: string
      text: string
      background: string
    }
  }
}
