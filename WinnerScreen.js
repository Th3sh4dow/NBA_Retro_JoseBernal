import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const imagenesEquipos = {
  Lakers: require('./assets/equipos/equipo1.png'),
  Warriors: require('./assets/equipos/equipo2.png'),
  Bulls: require('./assets/equipos/equipo3.png'),
  Celtics: require('./assets/equipos/equipo4.png'),
};

export default function WinnerScreen({ route }) {

  const { equipo1, equipo2, puntos1, puntos2 } = route.params;

  if (puntos1 === puntos2) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>🤝 Empate</Text>

        <View style={styles.row}>
          <Image source={imagenesEquipos[equipo1.nombre]} style={styles.img}/>
          <Image source={imagenesEquipos[equipo2.nombre]} style={styles.img}/>
        </View>
      </View>
    );
  }

  const ganador = puntos1 > puntos2 ? equipo1 : equipo2;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Ganador</Text>
      <Image source={imagenesEquipos[ganador.nombre]} style={styles.imgGrande}/>
      <Text style={styles.nombre}>{ganador.nombre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center'},
  title:{fontSize:30,fontWeight:'bold',marginBottom:30},
  img:{width:120,height:120,margin:20},
  imgGrande:{width:200,height:200},
  nombre:{fontSize:25,fontWeight:'bold'}
});
