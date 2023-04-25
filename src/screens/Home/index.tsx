import { View } from "react-native";
import { TodoInput } from "../../components/TodoInput";
import { Header } from "../../components/Header";

export function Home() {
    return (
        <View>
            <Header />
            <TodoInput />
        </View>
    )
}