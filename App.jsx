import React, { useState, useEffect } from 'react';
import { StatusBar, Modal, TouchableWithoutFeedback, Text, View, TouchableOpacity, Image, TextInput, Switch } from 'react-native';
import { ModalPlayer } from './components/ModalJugadores';
import styles from './components/styles/styles';
import PointStyle from './components/styles/Points';
import ModalGuardarPartida from './components/ModalGuardarPartida';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [time, setTime] = useState(14);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isPressedStart, setIsPressedStart] = useState(false);
  const [isPressedReset, setIsPressedReset] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [playerPoints, setPlayerPoints] = useState([]);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [savedGameData, setSavedGameData] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [containerColor, setContainerColor] = useState('#ffffff');

  const eliminarPartida = async (index) => {
    const nuevasPartidas = [...savedGameData];
    nuevasPartidas.splice(index, 1);
    setSavedGameData(nuevasPartidas);
    await AsyncStorage.removeItem('partidasGuardadas');
  };

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
      intervalId = setInterval(iniciarContador, 63);
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

  const toggleSwitch = () => {
    const newColor = isEnabled ? '#87afff' : '#ffffff';
    setContainerColor(newColor);
    setIsEnabled((previousState) => !previousState);
    setIsButtonActive((previousState) => !previousState);
  };

  const changeContainerColor = () => {
    const newColor = isEnabled ? '#fff' : '#010018';
    setContainerColor(newColor);

  };

  const abrirModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  const guardarPartida = async () => {
    try {
      const nuevaPartida = {
        images: selectedImages || [],
        playerData: (selectedImages || []).map((player, index) => ({
          playerName: player?.playerName || '',
          points: playerPoints[index] ?? 0,
          image: player?.image || null,
        })),
      };
  
      setSavedGameData((prevSavedGameData) => [...(prevSavedGameData || []), nuevaPartida]);
  
      const partidasGuardadas = JSON.parse(await AsyncStorage.getItem('partidasGuardadas')) || [];
      const nuevaListaPartidas = [...partidasGuardadas, nuevaPartida];
  
      await AsyncStorage.setItem('partidasGuardadas', JSON.stringify(nuevaListaPartidas));

      console.log(partidasGuardadas.length)

      cerrarModal();
    } catch (error) {
      console.error('Error al guardar la partida:', error);
    }
  };   

  return (
    <View style={[styles.container, { backgroundColor: containerColor }]}>
      <Switch
        trackColor={{ false: '#767577', true: '#87afff' }}
        thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
        onValueChange={() => {
          toggleSwitch();
          changeContainerColor();
        }}
        value={isEnabled}
        style={{ position: 'absolute', left: 10, top: 10 }}
      />

      <TouchableOpacity
        style={{ position: 'absolute', right: 20, top: 20 }}
        onPress={abrirModal}
      >
        <Image
          style={{ height: 30, width: 30 }}
          source={require('./assets/inbox.png')}
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={cerrarModal}
      >
        <ModalGuardarPartida savedGameData={savedGameData} cerrarModal={cerrarModal} eliminarPartida={eliminarPartida} />
      </Modal>

      <View style={styles.counterContainer}>
        <Text style={[styles.Clock, { color: isButtonActive ? '#fff' : '#000' }]}>{time}</Text>
        <Text style={[styles.milliseconds, { color: isButtonActive ? '#fff' : '#000' }]}>{milliseconds}</Text>
      </View>

      <View style={styles.ContainerButtons}>
        <TouchableOpacity
          style={[styles.StartButton, isPressedStart && styles.StartButtonFocus]}
          onPress={() => setIsPressedStart(!isPressedStart)}
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
          <Text style={{ fontSize: 25 }}>+</Text>
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
                    style={[styles.PointsPlayer, { color: isButtonActive ? '#fff' : '#000' }]}
                    value={playerPoints[index] ? playerPoints[index].toString() : '0'}
                    onChangeText={(text) => handlePointPress(Number(text), index)}
                  />

                </>
              ) : (
                <>
                  <TextInput
                    keyboardType='numeric'
                    style={[styles.PointsPlayer, { color: isButtonActive ? '#fff' : '#000' }]}
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

      {selectedImages.length >= 2 && (
        <TouchableOpacity
          style={styles.SaveButton}
          onPress={guardarPartida}
        >
          <Image
            source={require('./assets/save.png')}
            style={{ height: 25, width: 25 }}
          />
          <Text style={{ color: '#DCDCFF' }}>Guardar Partida</Text>
        </TouchableOpacity>

      )}

      <StatusBar style="auto" />
    </View>
  );
}