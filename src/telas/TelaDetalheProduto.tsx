import { View, Text, Image, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Produto } from './TelaListaProduto';
import { RootStackParamList } from '../../App';

function DetalheProduto({ produto }: { produto: Produto }) {
    return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.nome}>{produto.nome}</Text>
        <Text style={styles.preco}>{produto.preco}</Text>
        {produto.descricao && <Text style={styles.descricao}>{produto.descricao}</Text>}
      </View>
    </SafeAreaView>
  );
}

type Props = NativeStackScreenProps<RootStackParamList, 'DetalheProduto'>;

function TelaDetalheProduto({ route }: Props) {
    const { produto } = route.params;

    return <DetalheProduto produto={produto} />;
}

export default TelaDetalheProduto;

const styles = StyleSheet.create({
    container: {flex: 1, padding: 20, backgroundColor: '#FFFFFF'},
    imagem: {},
    nome: {fontSize: 20, fontWeight: 'bold'},
    preco: {fontSize: 18, fontWeight: '300', marginTop: 2},
    descricao: {fontSize: 15, marginTop: 12, lineHeight: 22},
});