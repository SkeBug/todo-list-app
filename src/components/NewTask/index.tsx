import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { AntDesign } from "@expo/vector-icons";

export function NewTask() {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#808080"
            />
            <TouchableOpacity style={styles.button}>
                <AntDesign name="pluscircleo" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}