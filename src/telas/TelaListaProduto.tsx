import { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { SafeAreaView } from 'react-native-safe-area-context';


export type Produto = {
    id: number;
    nome: string;
    preco: string;
    descricao?: string;
    imagem?: number;
};

export const produtosIniciais: Produto[] = [
    {
        id: 1,
        nome: 'Micro-Ondas',
        preco: 'R$ 349,90',
        descricao: 'Micro-ondas, é um micro-ondas bom',
    },
    {
        id: 2,
        nome: 'Mesa Pequenina',
        preco: 'R$ 459,00',
        descricao: 'Mesa muito pequena.',
    },
    {
        id: 3,
        nome: 'Geladeira Eletrolux Duas Portas',
        preco: 'R$ 2750,00',
        descricao: 'Geladeira ',
    },
];

type Props = NativeStackScreenProps<RootStackParamList, 'ListaProdutos'>;

function ProdutoItem({ produto, onPress }: { produto: Produto; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.preco}>{produto.preco}</Text>
    </TouchableOpacity>
  );
}

function TelaListaProdutos({ navigation }: Props) {
    const [produtos] = useState<Produto[]>(produtosIniciais);

     return (
    <SafeAreaView>

      <View style={styles.container}>
        <FlatList
          data={produtosIniciais}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProdutoItem
              produto={item}
              onPress={() => navigation.navigate('DetalheProduto', { produto: item })}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {flex: 1 , padding: 20},
    item: {margin: 10},
    nome: {fontSize: 18, fontWeight: 'bold'},
    preco: {fontSize: 14},
});

export default TelaListaProdutos;