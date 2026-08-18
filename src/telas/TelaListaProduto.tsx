import { useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';


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

function TelaListaProdutos({ navigation }: Props) {
    const [produtos] = useState<Produto[]>(produtosIniciais);

    return (
        <View style={styles.container}>

            <FlatList
                data={produtos}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate('DetalheProduto', { produto: item })}
                    >
                        <Text style={styles.nome}>{item.nome}</Text>
                        <Text style={styles.preco}>{item.preco}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1 , padding: 20},
    item: {margin: 10},
    nome: {fontSize: 18, fontWeight: 'bold'},
    preco: {fontSize: 14},
});

export default TelaListaProdutos;