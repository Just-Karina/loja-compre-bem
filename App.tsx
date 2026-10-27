import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaListaProdutos, { Produto } from './src/telas/TelaListaProduto';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TelaDetalheProduto from './src/telas/TelaDetalheProduto';
import TelaPrincipal from './src/telas/TelaPrincipal';

export type RootStackParamList = {
  ListaProdutos: undefined;
  DetalheProduto: { produto: Produto};
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <TelaPrincipal/>
    </SafeAreaProvider>
  );
}

