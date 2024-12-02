import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Teks di Tengah Layar</Text>

      {/* Dua kotak horizontal */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // Latar belakang abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24, // Ukuran font
    color: 'blue', // Warna teks
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 20, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row', // Susunan horizontal
    justifyContent: 'space-between', // Jarak merata antara kotak
    width: '80%', // Lebar kontainer kotak
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: 'red', // Warna kotak kiri (bebas)
  },
  box2: {
    backgroundColor: 'green', // Warna kotak kanan (bebas)
  },
});
