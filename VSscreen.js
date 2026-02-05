import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const imagenesEquipos = {
  Lakers: require('./assets/equipos/equipo2.png'),
  Warriors: require('./assets/equipos/equipo1.png'),
  Bulls: require('./assets/equipos/equipo3.png'),
  Celtics: require('./assets/equipos/equipo4.png'),
};

export default function VsScreen({ route, navigation }) {

  const { equipo1, equipo2 } = route.params;

  const [puntos1, setPuntos1] = useState(0);
  const [puntos2, setPuntos2] = useState(0);

  // ⭐ Guardar puntos por jugador
  const [statsJugadores, setStatsJugadores] = useState({});

  // ⭐ Función para sumar puntos
  const sumarPuntosJugador = (jugador, equipo, puntos) => {

    setStatsJugadores(prev => ({
      ...prev,
      [jugador]: (prev[jugador] || 0) + puntos
    }));

    if (equipo === 1) {
      setPuntos1(p => p + puntos);
    } else {
      setPuntos2(p => p + puntos);
    }
  };

  return (
    <View style={styles.container}>

      {/* MARCADOR */}
      <Text style={styles.score}>
        {puntos1} - {puntos2}
      </Text>

      <View style={styles.columnas}>

        {/* LOCAL */}
        <View style={styles.columna}>
          <Image source={imagenesEquipos[equipo1.nombre]} style={styles.imagen}/>
          <Text style={styles.nombre}>{equipo1.nombre}</Text>

          <FlatList
            data={equipo1.jugadores}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.jugadorRow}>
                <Text>{item}</Text>

                <View style={styles.botones}>

                  <TouchableOpacity
                    onPress={() => sumarPuntosJugador(item, 1, 2)}
                    style={styles.btn2}
                  >
                    <Text>+2</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => sumarPuntosJugador(item, 1, 3)}
                    style={styles.btn3}
                  >
                    <Text>+3</Text>
                  </TouchableOpacity>

                </View>
              </View>
            )}
          />
        </View>

        {/* VISITANTE */}
        <View style={styles.columna}>
          <Image source={imagenesEquipos[equipo2.nombre]} style={styles.imagen}/>
          <Text style={styles.nombre}>{equipo2.nombre}</Text>

          <FlatList
            data={equipo2.jugadores}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.jugadorRow}>
                <Text>{item}</Text>

                <View style={styles.botones}>

                  <TouchableOpacity
                    onPress={() => sumarPuntosJugador(item, 2, 2)}
                    style={styles.btn2}
                  >
                    <Text>+2</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => sumarPuntosJugador(item, 2, 3)}
                    style={styles.btn3}
                  >
                    <Text>+3</Text>
                  </TouchableOpacity>

                </View>
              </View>
            )}
          />
        </View>

      </View>

      {/* FIN DEL JUEGO */}
      <TouchableOpacity
        style={styles.fin}
        onPress={() =>
          navigation.navigate('Winner', {
            equipo1,
            equipo2,
            puntos1,
            puntos2,
            statsJugadores
          })
        }
      >
        <Text style={{color:'#fff'}}>Fin del Juego</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,paddingTop:50,backgroundColor:'#F4F6FA'},
  score:{fontSize:35,textAlign:'center',fontWeight:'bold'},
  columnas:{flexDirection:'row',justifyContent:'space-around',flex:1},
  columna:{width:'45%',alignItems:'center'},
  imagen:{width:90,height:90},
  nombre:{fontSize:18,fontWeight:'bold',marginBottom:10},
  jugadorRow:{marginVertical:5,alignItems:'center'},
  botones:{flexDirection:'row'},
  btn2:{backgroundColor:'#74B9FF',padding:5,margin:3,borderRadius:5},
  btn3:{backgroundColor:'#55EFC4',padding:5,margin:3,borderRadius:5},
  fin:{backgroundColor:'#E74C3C',padding:15,margin:20,borderRadius:20,alignItems:'center'}
});
