import { JSXElementConstructor, PropsWithChildren, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { QueryClientProvider } from 'react-query'
import { theme } from '../theme/theme'
import { queryClient } from '../reactQuery/queryClient'

const AllProviders = ({ children }: PropsWithChildren<unknown>) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </QueryClientProvider>
)

const customRender = (
  // eslint-disable-next-line
  ui: ReactElement<any | string | JSXElementConstructor<any>>,
  options?: RenderOptions
) => render(ui, { wrapper: AllProviders, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
