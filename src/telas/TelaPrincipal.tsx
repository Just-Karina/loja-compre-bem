import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaListaProduto from "./TelaListaProduto";
import TelaDetalheProduto from "./TelaDetalheProduto";
import { RootStackParamList } from "../../App";

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function TelaPrincipal() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListaProdutos">
                <Stack.Screen name="ListaProdutos" component={TelaListaProduto} />
                <Stack.Screen name="DetalheProduto" component={TelaDetalheProduto} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}