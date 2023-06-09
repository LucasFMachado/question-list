import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { QuestionsProvider } from '@/contexts/QuestionsContext'
import { ServerProvider } from '@/contexts/ServerContext'

import GlobalStyle from '../styles/global'
import theme from '../styles/themes/default'
import { Wrapper } from './styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ServerProvider>
        <QuestionsProvider>
          <Head>
            <title>Frontend challenge | Lucas Machado</title>
          </Head>
          <Header />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
          <Footer />
          <GlobalStyle />
        </QuestionsProvider>
      </ServerProvider>
    </ThemeProvider>
  )
}
