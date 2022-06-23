import { useCallback, useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
// eslint-disable-next-line
import { Nunito_900Black, Nunito_500Medium, Nunito_700Bold } from '@expo-google-fonts/nunito'

export const useFontLoader = () => {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync()

        // eslint-disable-next-line
        await Font.loadAsync({ Nunito_900Black, Nunito_500Medium, Nunito_700Bold })
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  return { onLayoutRootView, appIsReady }
}
