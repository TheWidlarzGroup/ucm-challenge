import 'styled-components'
import { theme } from '../theme/theme'

type ThemeInterface = typeof theme

declare module 'styled-components/native' {
  // eslint-disable-next-line
  export interface DefaultTheme extends ThemeInterface {}
}
