import { View } from "react-native";
import { TodoInput } from "../../components/TodoInput";
import { TopLogo } from "../../components/TopLogo";

export function Home() {
    return (
        <View>
            <TopLogo />
            <TodoInput />
        </View>
    )
}