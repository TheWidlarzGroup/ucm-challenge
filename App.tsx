import { StatusBar } from 'expo-status-bar'
import { GlobalProviders } from './src/providers/GlobalProviders'
import { firebaseApp as _firebaseApp } from './src/firebase/setup'
import { RootNavigator } from './src/navigators/rootNavigator'
import { useFontLoader } from './src/hooks/useFontLoader'
import { View } from 'react-native'

export default function App() {
  const { appIsReady, onLayoutRootView } = useFontLoader()

  if (!appIsReady) {
    return null
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }} onLayout={onLayoutRootView}>
      <GlobalProviders>
        <RootNavigator />
        <StatusBar style="auto" />
      </GlobalProviders>
    </View>
  )
}
