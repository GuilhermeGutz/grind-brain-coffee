// import { useState } from 'react'
import { BrowserRouter  } from 'react-router-dom'
import { AppRoutes } from './presentation/routes'
import { ThemeProvider } from '@emotion/react'
import { LightTheme } from './presentation/theme'

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>
  )
}
