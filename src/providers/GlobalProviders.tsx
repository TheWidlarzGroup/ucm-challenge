import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { theme } from '../theme/theme'

export const GlobalProviders = ({ children }: PropsWithChildren<unknown>) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
