import { StatusBar, View } from 'react-native'
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#1A1A1A' }}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Home />
    </View>
  );
}
