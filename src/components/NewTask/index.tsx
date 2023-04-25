import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { PlusCircle } from "phosphor-react-native";


export function NewTask() {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#808080"
            />

            <TouchableOpacity style={styles.button}>
                <PlusCircle size={28} color="#fff" />
            </TouchableOpacity>

        </View>
    )
}