import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles/styles';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const ModalGuardarPartida = ({ savedGameData, cerrarModal, eliminarPartida }) => {
  const [selectedGameIndex, setSelectedGameIndex] = useState(null);

  const handleGameDoubleClick = (index) => {
    if (selectedGameIndex === index) {
      eliminarPartida(index);
    } else {
      setSelectedGameIndex(index);
      setTimeout(() => {
        setSelectedGameIndex(null);
      }, 300);
    }
  };

  return (
    <ScrollView style={styles.statistics}>
      <View style={{ backgroundColor: '#fff', height: '100%', alignItems: 'center' }}>
        {savedGameData && savedGameData.length > 0 ? (
          <View style={{ gap: 20, marginTop: 50 }}>
            {savedGameData.map((partida, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleGameDoubleClick(index)}
                onLongPress={() => handleGameDoubleClick(index)}
              >
                <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-between', padding: 10, borderBottomColor: '#dfdfdf', borderWidth: 1, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', backgroundColor: selectedGameIndex === index ? '#f0f0f0' : 'transparent' }}>
                  {partida.playerData.map((playerData, playerIndex) => (
                    <View key={playerIndex} style={{ width: 'auto', flexDirection: 'row', alignItems: 'center', gap: 25, justifyContent: 'center' }}>
                      {playerIndex === 0 ? (
                        <>
                          {playerData.image && (
                            <View style={{ gap: 5, alignItems: 'center' }}>
                              <Image source={playerData.image} style={{ height: 60, width: 60, borderRadius: 100 }} />
                              <Text style={{ backgroundColor: '#e6e6e6', paddingVertical: 5, paddingHorizontal: 15, fontSize: 10, borderRadius: 20, color: '#5f5d5d' }}>{playerData.playerName}</Text>
                            </View>
                          )}
                          <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, color: '#5f5d5d' }}>{playerData.points}</Text>
                          </View>
                        </>
                      ) : (
                        <>
                          <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, color: '#5f5d5d' }}>{playerData.points}</Text>
                          </View>
                          {playerData.image && (
                            <View style={{ gap: 5, alignItems: 'center' }}>
                              <Image source={playerData.image} style={{ height: 60, width: 60, borderRadius: 100 }} />
                              <Text style={{ backgroundColor: '#e6e6e6', paddingVertical: 5, paddingHorizontal: 15, fontSize: 10, borderRadius: 20, color: '#5f5d5d' }}>{playerData.playerName}</Text>
                            </View>
                          )}
                        </>
                      )}
                    </View>
                  ))}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={{ height: height, alignItems: 'center', justifyContent: 'center' }}>
            <Text>No hay Partidas Guardadas</Text>
          </View>
        )}
        <TouchableOpacity onPress={cerrarModal} style={{ position: 'absolute', right: 20, top: 10 }}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require('../assets/close.png')}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ModalGuardarPartida;