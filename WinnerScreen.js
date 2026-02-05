import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const imagenesEquipos = {
  Lakers: require('./assets/equipos/equipo2.png'),
  Warriors: require('./assets/equipos/equipo1.png'),
  Bulls: require('./assets/equipos/equipo3.png'),
  Celtics: require('./assets/equipos/equipo4.png'),
};

export default function WinnerScreen({ route }) {

  const { equipo1, equipo2, puntos1, puntos2, statsJugadores } = route.params;

  // Convertimos objeto en array y ordenamos
  const topJugadores = Object.entries(statsJugadores || {})
    .map(([nombre, puntos]) => ({ nombre, puntos }))
    .sort((a, b) => b.puntos - a.puntos)
    .slice(0, 5);

  const renderJugador = ({ item, index }) => (
    <Text style={styles.jugador}>
      {index + 1}. {item.nombre} - {item.puntos} pts
    </Text>
  );

  if (puntos1 === puntos2) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🤝 Empate</Text>

        <View style={styles.row}>
          <Image source={imagenesEquipos[equipo1.nombre]} style={styles.img}/>
          <Image source={imagenesEquipos[equipo2.nombre]} style={styles.img}/>
        </View>

        <Text style={styles.subTitle}>🔥 Top 5 Anotadores</Text>

        <FlatList
          data={topJugadores}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderJugador}
        />
      </View>
    );
  }

  const ganador = puntos1 > puntos2 ? equipo1 : equipo2;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Ganador</Text>
      <Image source={imagenesEquipos[ganador.nombre]} style={styles.imgGrande}/>
      <Text style={styles.nombre}>{ganador.nombre}</Text>

      <Text style={styles.subTitle}>🔥 Top 5 Anotadores</Text>

      <FlatList
        data={topJugadores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderJugador}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center'},
  title:{fontSize:30,fontWeight:'bold',marginBottom:20},
  subTitle:{fontSize:22,fontWeight:'bold',marginTop:20},
  img:{width:120,height:120,margin:20},
  imgGrande:{width:200,height:200},
  nombre:{fontSize:25,fontWeight:'bold'},
  jugador:{fontSize:18,marginTop:8}
});
