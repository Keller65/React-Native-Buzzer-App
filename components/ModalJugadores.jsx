import React from "react";
import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import styles from "./styles/ModalCss";

export function ModalPlayer({ closeModal, handleImageSelect }) {
  return (
    <ScrollView style={styles.ModalPlayer} >
      <View onPress={closeModal}>

        <TouchableOpacity
          style={styles.CardPlayer}
          onPress={() => {
            handleImageSelect({
              image: require('../assets/keller.jpeg'),
              playerName: 'A. Lopez',
            });
            closeModal();
          }}
        >
          <Image
            style={styles.ImagePlayer}
            source={require('../assets/keller.jpeg')}
          />
          <View>
            <Text>A. Lopez</Text>
            <Text>Base</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.CardPlayer}
          onPress={() => {
            handleImageSelect({
              image: require('../assets/samy.jpeg'),
              playerName: 'S. Palacios'
            });
            closeModal();
          }}
        >
          <Image
            style={styles.ImagePlayer}
            source={require('../assets/samy.jpeg')}
          />
          <View>
            <Text>S. Palacios</Text>
            <Text>Alero</Text>
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

        <TouchableOpacity
          style={styles.CardPlayer}
          onPress={() => {
            handleImageSelect({
              image: require('../assets/giannis.webp'),
              playerName: 'G. Antetokounmpo'
            });
            closeModal();
          }}
        >
          <Image
            style={styles.ImagePlayer}
            source={require('../assets/giannis.webp')}
          />
          <View>
            <Text>G. Antetokounmpo</Text>
            <Text>Ala-Pivot</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.CardPlayer}
          onPress={() => {
            handleImageSelect({
              image: require('../assets/edwards.jpg'),
              playerName: 'A. Edwards'
            });
            closeModal();
          }}
        >
          <Image
            style={styles.ImagePlayer}
            source={require('../assets/edwards.jpg')}
          />
          <View>
            <Text>A. Edwards</Text>
            <Text>Escolta</Text>
          </View>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}