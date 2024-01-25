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
        width: 40,
        height: 40,
        borderRadius: 200,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 2,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.03)',
    },

    TextPoint: {
        fontSize: 10
    },

    ButtonContainer: {
        flexDirection: 'row',
        gap: 5
    },
})

export default PointStyle;