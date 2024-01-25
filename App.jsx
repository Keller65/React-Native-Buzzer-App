import React, { useState, useEffect } from 'react';
import { StatusBar, Modal, TouchableWithoutFeedback, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { ModalPlayer } from './components/ModalJugadores';
import styles from './components/styles/styles';
import PointStyle from './components/styles/Points';

export default function App() {
  const [time, setTime] = useState(14);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isPressedStart, setIsPressedStart] = useState(false);
  const [isPressedReset, setIsPressedReset] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [playerPoints, setPlayerPoints] = useState([]);

  const iniciarContador = () => {
    if (time > 0 || milliseconds > 0) {
      if (milliseconds === 0) {
        setTime(time - 1);
        setMilliseconds(10);
      } else {
        setMilliseconds(milliseconds - 1);
      }
    } else {
      setTime(0);
      setMilliseconds(0);
    }
  };

  const restablecerContador = () => {
    setTime(14);
    setMilliseconds(0);
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleImageSelect = (image) => {
    setSelectedImages((prevSelectedImages) => [...prevSelectedImages, image]);
  };

  useEffect(() => {
    let intervalId;

    if (isPressedStart) {
      intervalId = setInterval(iniciarContador, 70);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPressedStart, time, milliseconds]);

  const handlePointPress = (value, playerIndex) => {
    setPlayerPoints((prevPlayerPoints) => {
      const newPlayerPoints = [...prevPlayerPoints];
      newPlayerPoints[playerIndex] = (newPlayerPoints[playerIndex] || 0) + value;
      return newPlayerPoints;
    });
  };

  const ResetGame = () => {
    setSelectedImages([]);
    setPlayerPoints([0])
  }

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.Clock}>{time}</Text>
        <Text style={styles.milliseconds}>{milliseconds}</Text>
      </View>

      <View style={styles.ContainerButtons}>
        <TouchableOpacity
          style={[styles.StartButton, isPressedStart && styles.StartButtonFocus]}
          onPress={() => setIsPressedStart(!isPressedStart)}
          onPressIn={() => setIsPressedStart(true)}
          onPressOut={() => setIsPressedStart(false)}
        >
          <Text
            style={[styles.textStartButton, isPressedStart && styles.textStartButtonFocus]}
          >
            {isPressedStart ? 'Pausar' : 'Iniciar'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.Reset, isPressedReset && styles.ResetButtonFocus]}
          onPress={restablecerContador}
          onPressIn={() => setIsPressedReset(true)}
          onPressOut={() => setIsPressedReset(false)}
        >
          <Text
            style={[styles.textResetButton, isPressedReset && styles.textResetButtonFocus]}
          >
            Restablecer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ReloadButton}
          onPress={ResetGame}
        >
          <Text style={styles.TextReloadButton}>Reiniciar</Text>
        </TouchableOpacity>
      </View>

      {selectedImages.length < 2 ? (
        <TouchableOpacity style={styles.UserSelected} onPress={openModal}>
          <Text>+</Text>
        </TouchableOpacity>
      ) : ''}

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            <ModalPlayer closeModal={closeModal} handleImageSelect={handleImageSelect} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {selectedImages.length > 0 && (
        <View style={styles.selectedImagesContainer}>
          {selectedImages.map((Player, index) => (
            <View key={index} style={styles.CardFatherPlayer}>
              {index === 0 ? (
                <>
                  <View style={styles.CardGamePlay}>
                    <Image key={index} style={styles.selectedImage} source={Player.image} />
                    <Text style={styles.PlayerName}>{Player.playerName}</Text>
                  </View>

                  <TextInput
                    keyboardType='numeric'
                    style={styles.PointsPlayer}
                    value={playerPoints[index] ? playerPoints[index].toString() : '0'}
                    onChangeText={(text) => handlePointPress(Number(text), index)}
                  />
                </>
              ) : (
                <>
                  <TextInput
                    keyboardType='numeric'
                    style={styles.PointsPlayer}
                    value={playerPoints[index] ? playerPoints[index].toString() : '0'}
                    onChangeText={(text) => handlePointPress(Number(text), index)}
                  />
                  
                  <View style={styles.CardGamePlay}>
                    <Image key={index} style={styles.selectedImage} source={Player.image} />
                    <Text style={styles.PlayerName}>{Player.playerName}</Text>
                  </View>
                </>
              )}
            </View>
          ))}
        </View>
      )}

      <View style={PointStyle.ContainerButtonsPoints}>
        {selectedImages.map((_, index) => (
          <View key={index} style={PointStyle.ButtonContainer}>
            <TouchableOpacity
              style={PointStyle.ButtonOne}
              onPress={() => handlePointPress(1, index)}
            >
              <Text style={PointStyle.TextPoint}>+1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={PointStyle.ButtonOne}
              onPress={() => handlePointPress(2, index)}
            >
              <Text style={PointStyle.TextPoint}>+2</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={PointStyle.ButtonOne}
              onPress={() => handlePointPress(3, index)}
            >
              <Text style={PointStyle.TextPoint}>+3</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}