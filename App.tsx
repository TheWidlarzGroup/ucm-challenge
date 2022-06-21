import { StatusBar } from 'expo-status-bar'
import { GlobalProviders } from './src/providers/GlobalProviders'
import { firebaseApp as _firebaseApp } from './src/firebase/setup'
import { RootNavigator } from './src/navigators/rootNavigator'

export default function App() {
  return (
    <GlobalProviders>
      <RootNavigator />
      <StatusBar style="auto" />
    </GlobalProviders>
  )
}
