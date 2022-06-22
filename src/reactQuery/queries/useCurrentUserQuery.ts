import { Unsubscribe, User } from 'firebase/auth'
import { useEffect, useRef } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { auth } from '../../firebase/setup'
import { QUERY_KEYS } from './queryKeys'

let userSubscriptionEventsCount = 0

export const useCurrentUserQuery = () => {
  const queryClient = useQueryClient()
  const unsubscribeRef = useRef<Unsubscribe>()

  let resolvePromise: (data: User | null) => void = () => null

  // let rejectPromise: (err: any) => void = () => null

  const result = new Promise<User | null>((resolve) => {
    resolvePromise = resolve
    // rejectPromise = reject
  })

  useEffect(() => {
    unsubscribeRef.current = auth.onAuthStateChanged((user) => {
      userSubscriptionEventsCount++

      if (userSubscriptionEventsCount === 1) {
        resolvePromise(user)
      } else {
        queryClient.setQueryData(QUERY_KEYS.CURRENT_USER, user)
      }
    })

    return () => {
      unsubscribeRef?.current?.()
    }
  }, [queryClient])

  return useQuery<User>([QUERY_KEYS.CURRENT_USER], {
    queryFn: () => result as Promise<User>,
  })
}
