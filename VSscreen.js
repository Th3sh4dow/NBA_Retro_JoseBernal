import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const imagenesEquipos = {
  Lakers: require('./assets/equipos/equipo1.png'),
  Warriors: require('./assets/equipos/equipo2.png'),
  Bulls: require('./assets/equipos/equipo3.png'),
  Celtics: require('./assets/equipos/equipo4.png'),
};

export default function VsScreen({ route }) {
  const { equipo1, equipo2 } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.title}>🔥 Partido del Día</Text>

      <View style={styles.vsContainer}>

        {/* EQUIPO 1 */}
        <View style={styles.card}>
          <Image
            source={imagenesEquipos[equipo1.nombre]}
            style={styles.imagen}
          />
          <Text style={styles.nombre}>{equipo1.nombre}</Text>
        </View>

        {/* VS */}
        <Text style={styles.vs}>VS</Text>

        {/* EQUIPO 2 */}
        <View style={styles.card}>
          <Image
            source={imagenesEquipos[equipo2.nombre]}
            style={styles.imagen}
          />
          <Text style={styles.nombre}>{equipo2.nombre}</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#222',
  },

  vsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
    width: 150,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 6,
  },

  imagen: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },

  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  vs: {
    fontSize: 42,
    fontWeight: '900',
    marginHorizontal: 20,
    color: '#E74C3C',
  },
});
