
import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MapboxGL from "@react-native-mapbox-gl/maps";


const App = () => {
  const [coordinates] = useState([78.9629, 20.5937]);
  MapboxGL.setAccessToken("pk.eyJ1IjoiYW1pdC1ybiIsImEiOiJjbGZxaDAwMTAweHFhNDBwaHFzYjZwbzByIn0.VC9l0Kkny28JhUJZhAlTtw");
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera
            zoomLevel={4}
            centerCoordinate={coordinates}
          />
          <MapboxGL.PointAnnotation coordinate={coordinates} />
        </MapboxGL.MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'blue',
  },
  map: {
    flex: 1
  }
});

export default App;
