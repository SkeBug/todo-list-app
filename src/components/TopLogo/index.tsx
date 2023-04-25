import { Image, View } from "react-native";
import { styles } from "./style";

export function TopLogo () {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo-off.png')} alt="FOTO" />
        </View>
    )
}