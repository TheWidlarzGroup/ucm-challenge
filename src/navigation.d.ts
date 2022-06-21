import { NavigationProp, RouteProp } from '@react-navigation/core/lib/typescript/src/types'
import { NavigatorsParams } from './navigators/routeParams'

declare module '@react-navigation/native' {
  export function useNavigation<Navigator extends keyof NavigatorsParams>(): NavigationProp<
    NavigatorsParams[Navigator]
  >

  export function useRoute<
    Navigator extends keyof NavigatorsParams,
    Screen extends keyof NavigatorsParams[Navigator]
  >(): RouteProp<NavigatorsParams[Navigator], Screen>
}
