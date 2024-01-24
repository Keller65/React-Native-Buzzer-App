import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ModalPlayer } from "./components/ModalJugadores";

export function Versus() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View>
      <TouchableOpacity style={style.UserSelected} onPress={toggleModal}>
        <Text>+</Text>
      </TouchableOpacity>

      <ModalPlayer visible={isModalVisible} onClose={toggleModal} />
    </View>
  );
}

const style = StyleSheet.create({
  UserSelected: {
    height: 60,
    width: 60,
    margin: 'auto',
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#909090',
  },
});
