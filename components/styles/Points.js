import { StyleSheet } from "react-native";

const PointStyle = StyleSheet.create({
    ContainerButtonsPoints: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        padding: 12,
        gap: 10,
    },

    ButtonOne: {
        backgroundColor: 'red',
        alignItems: 'center',
        width: 40,
        height: 40,
        justifyContent: 'center',
        borderRadius: 12,
    }, 

    ButtonContainer: {
        flexDirection: 'row',
        gap: 5
    },
})

export default PointStyle;