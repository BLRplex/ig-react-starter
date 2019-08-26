import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Router from '@/Router'
import { getStore } from '@/store'
import GlobalStyle from '@/theme/GlobalStyle'
import theme from '@/theme'

function App () {
  return (
    <Provider store={getStore()}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Router />
        </>
      </ThemeProvider>
    </Provider>
  )
}

export default App
