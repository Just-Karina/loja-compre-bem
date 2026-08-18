import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaListaProdutos, { Produto } from './src/telas/TelaListaProduto';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TelaDetalheProduto from './src/telas/TelaDetalheProduto';

export type RootStackParamList = {
  ListaProdutos: undefined;
  DetalheProduto: { produto: Produto};
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaProdutos">
        <Stack.Screen name="ListaProdutos" component={TelaListaProdutos} />
        <Stack.Screen name="DetalheProduto" component={TelaDetalheProduto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
