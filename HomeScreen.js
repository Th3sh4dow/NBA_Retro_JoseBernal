import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';

import equiposData from './data/equipos.json';

const imagenesEquipos = {
  Lakers: require('./assets/equipos/equipo2.png'),
  Warriors: require('./assets/equipos/equipo1.png'),
  Bulls: require('./assets/equipos/equipo3.png'),
  Celtics: require('./assets/equipos/equipo4.png'),
};

export default function HomeScreen({ navigation }) {
  const [indexEquipo1, setIndexEquipo1] = useState(0);
  const [indexEquipo2, setIndexEquipo2] = useState(1);

  const equipo1 = equiposData.equipos[indexEquipo1];
  const equipo2 = equiposData.equipos[indexEquipo2];

  return (
    <View style={styles.container}>

      <Text style={styles.title}>🏀 Selección de Equipos</Text>

      <View style={styles.equiposContainer}>

        {/* EQUIPO 1 */}
        <View style={styles.card}>
          <Image source={imagenesEquipos[equipo1.nombre]} style={styles.equipoImagen}/>
          <Text style={styles.equipoNombre}>{equipo1.nombre}</Text>

          <FlatList
            data={equipo1.jugadores}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.jugador}>• {item}</Text>
            )}
          />

          <TouchableOpacity
            style={styles.boton}
            onPress={() =>
              setIndexEquipo1((i) => (i + 1) % equiposData.equipos.length)
            }
          >
            <Text style={styles.botonTexto}>Cambiar</Text>
          </TouchableOpacity>
        </View>

        {/* EQUIPO 2 */}
        <View style={styles.card}>
          <Image source={imagenesEquipos[equipo2.nombre]} style={styles.equipoImagen}/>
          <Text style={styles.equipoNombre}>{equipo2.nombre}</Text>

          <FlatList
            data={equipo2.jugadores}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.jugador}>• {item}</Text>
            )}
          />

          <TouchableOpacity
            style={styles.boton}
            onPress={() =>
              setIndexEquipo2((i) => (i + 1) % equiposData.equipos.length)
            }
          >
            <Text style={styles.botonTexto}>Cambiar</Text>
          </TouchableOpacity>
        </View>

      </View>

      {/* BOTÓN VER PARTIDO */}
      <TouchableOpacity
        style={styles.botonFinal}
        onPress={() => navigation.navigate('VS', { equipo1, equipo2 })}
      >
        <Text style={styles.botonFinalTexto}>Ver Partido</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#F4F6FA',paddingTop:50,alignItems:'center'},
  title:{fontSize:24,fontWeight:'bold',marginBottom:25,color:'#222'},
  equiposContainer:{flexDirection:'row',justifyContent:'space-around',width:'100%'},
  card:{backgroundColor:'#fff',width:'45%',borderRadius:20,padding:15,alignItems:'center',elevation:5},
  equipoImagen:{width:110,height:110,marginBottom:10},
  equipoNombre:{fontSize:18,fontWeight:'bold',marginBottom:10},
  jugador:{fontSize:14,marginVertical:2,color:'#555'},
  boton:{marginTop:12,backgroundColor:'#4B7BEC',paddingVertical:8,paddingHorizontal:25,borderRadius:25},
  botonTexto:{color:'#fff',fontWeight:'bold'},
  botonFinal:{marginTop:30,backgroundColor:'#20BF6B',paddingVertical:14,paddingHorizontal:60,borderRadius:30},
  botonFinalTexto:{color:'#fff',fontSize:18,fontWeight:'bold'},
});
