import { StyleSheet } from "react-native-web";

const style = StyleSheet.create({
    ModalPlayer: {
      height: 300,
      width: '100%',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      backgroundColor: '#fff',
      left: 0,
      bottom: 0,
      gap: 5,
      elevation: 8,
      BoxshadowColor: '#000',
      BoxshadowOffset: { width: 0, height: 5 },
      BoxshadowOpacity: 2,
      BoxshadowRadius: 50,
      padding: 10,
    },
  
    CardPlayer: {
      width: '100%',
      padding: 10,
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center',
    },
  
    ImagePlayer: {
      height: 60,
      width: 60,
      borderRadius: 200,
    },
  
    CloseButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      padding: 10,
      zIndex: 999
    },
  });

  export default style;