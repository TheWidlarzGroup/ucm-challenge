import React, { PropsWithChildren } from 'react'
import { QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { queryClient } from '../reactQuery/queryClient'
import { theme } from '../theme/theme'

export const GlobalProviders = ({ children }: PropsWithChildren<unknown>) => (
  <SafeAreaProvider>
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </QueryClientProvider>
    </NavigationContainer>
  </SafeAreaProvider>
)
