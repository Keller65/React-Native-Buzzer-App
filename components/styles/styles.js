import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
console.log(width);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  UserSelected: {
    height: 60,
    width: 60,
    margin: 'auto',
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#7c7a7a',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 50,
    marginTop: 20,
    borderWidth: 0.1,
    borderColor: '#7c7a7a'
  },

  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  Clock: {
    fontSize: 50,
    color: '#000',
  },

  milliseconds: {
    fontSize: 20,
    marginLeft: 5,
    color: '#000',
  },

  ContainerButtons: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
  },

  StartButton: {
    backgroundColor: '#8cff86',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#8cff86'
  },

  StartButtonFocus: {
    borderWidth: 1,
    borderColor: '#8484ff',
    backgroundColor: '#dcdcff',
  },

  Reset: {
    backgroundColor: '#ffbcbc',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ff6464'
  },

  ResetButtonFocus: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ff6464'
  },

  textStartButtonFocus: {
    color: '#8484ff'
  },

  textStartButton: {
    color: '#067100',
  },

  textResetButton: {
    color: '#ff6464',
  },

  textResetButtonFocus: {
    color: '#ff6464'
  },

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backDropFilter: 'blur',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 200,
  },

  selectedImagesContainer: {
    width: width,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },

  selectedImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },

  CardGamePlay: {
    alignItems: 'center',
    gap: 10,
  },

  PlayerName: {
    backgroundColor: '#e6e6e6',
    color: '#5f5d5d',
    fontSize: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5
  },

  CardFatherPlayer: {
    gap: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },

  PointsPlayer: {
    fontSize: 18,
    color: '#000',
  },

  ReloadButton: {
    backgroundColor: '#ffff80',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },

  TextReloadButton: {
    color: '#898900'
  },

  SaveButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

})

export default styles;