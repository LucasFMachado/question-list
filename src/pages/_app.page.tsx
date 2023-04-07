import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { ServerProvider } from '@/contexts/ServerContext'

import GlobalStyle from '../styles/global'
import theme from '../styles/themes/default'
import { Wrapper } from './styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ServerProvider>
        <Head>
          <title>Frontend challenge | Lucas Machado</title>
        </Head>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
        <GlobalStyle />
      </ServerProvider>
    </ThemeProvider>
  )
}
