import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import styles from "./styles/ModalCss";

export function ModalPlayer({ closeModal, handleImageSelect }) {
  return (
    <View style={styles.ModalPlayer}>

      <TouchableOpacity onPress={closeModal} style={styles.CloseButton}>
        <Text>x</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.CardPlayer}
        onPress={() => {
          handleImageSelect({
            image: require('../assets/lebron.jpg'),
            playerName: 'L. James',
          });
          closeModal();
        }}
      >
        <Image
          style={styles.ImagePlayer}
          source={require('../assets/lebron.jpg')}
        />
        <View>
          <Text>L. James</Text>
          <Text>Ala-Pivot</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.CardPlayer}
        onPress={() => {
          handleImageSelect({
            image: require('../assets/curry.webp'),
            playerName: 'S. Curry'
          });
          closeModal();
        }}
      >
        <Image
          style={styles.ImagePlayer}
          source={require('../assets/curry.webp')}
        />
        <View>
          <Text>S. Curry</Text>
          <Text>Base</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.CardPlayer}
        onPress={() => {
          handleImageSelect({
            image: require('../assets/luka.webp'),
            playerName: 'L. Dončić'
          });
          closeModal();
        }}
      >
        <Image
          style={styles.ImagePlayer}
          source={require('../assets/luka.webp')}
        />
        <View>
          <Text>L. Dončić</Text>
          <Text>Base</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}