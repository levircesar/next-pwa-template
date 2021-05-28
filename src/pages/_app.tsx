import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import SideBarComponent from '../components/SideBarComponent'
import GlobalStyle from '../styles/global'
import { Container } from '../styles/app'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState(dark)
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SideBarComponent toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
