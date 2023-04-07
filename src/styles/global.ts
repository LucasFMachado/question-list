import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html {
    @media (max-width: 1000px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${props => props.theme.colors.background};
    min-width: 48rem;
    margin: auto;
    -webkit-font-smoothing: antialised;
    width: 100vw;
    height: 100vh;

    header {
      min-width: 48rem;
    }
  }

  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: ${props => props.theme.colors.text};
    font-weight: 400;
  }


  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
      text-decoration: none;
    }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
