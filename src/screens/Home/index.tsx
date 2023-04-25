import { View } from "react-native";
import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { styles } from "./style";

export function Home() {
    return (
        <View>
            <Header />
            <NewTask />
        </View>
    )
}