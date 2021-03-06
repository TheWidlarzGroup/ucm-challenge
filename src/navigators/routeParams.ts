import { AuthorizedRoutes, UnauthorizedRoutes } from './routes'

export type UnauthorizedNavigatorParams = {
  [UnauthorizedRoutes.UNAUTHORIZED]: undefined
  [UnauthorizedRoutes.AUTHORIZING]: undefined
  [UnauthorizedRoutes.LOGIN]: undefined
  [UnauthorizedRoutes.SIGN_UP]: undefined
}

export type AuthorizedNavigatorParams = {
  [AuthorizedRoutes.MEMBERS_LIST]: undefined
  [AuthorizedRoutes.ADD_MEMBER]: undefined
}

export type NavigatorsParams = {
  authorized: AuthorizedNavigatorParams
  unauthorized: UnauthorizedNavigatorParams
}
