import { AuthorizedRoutes, UnauthorizedRoutes } from './routes'

export type UnauthorizedNavigatorParams = {
  [UnauthorizedRoutes.LOGIN]: undefined
}

export type AuthorizedNavigatorParams = {
  [AuthorizedRoutes.USERS_LIST]: undefined
}

export type NavigatorsParams = {
  authorized: AuthorizedNavigatorParams
  unauthorized: UnauthorizedNavigatorParams
}
