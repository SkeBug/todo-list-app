import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 54,
        marginTop: -30,
        marginLeft: 20,
        marginRight: 20,
    },

    input: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        width: '78%',
        backgroundColor: '#262626',
        color: '#F2F2F2',
        padding: 16,
        fontSize: 16,
    },
    
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        width: '20%',
        backgroundColor: '#1E6F9F'
    }
})