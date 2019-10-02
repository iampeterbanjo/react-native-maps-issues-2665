import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  const mapRef = useRef<MapView>(null);

  const handleRegionChange = async () => {
    const map = mapRef.current;
    await map.getMapBoundaries();
    console.log(typeof map.getMapBoundaries);
  };

  return (
    <MapView
      ref={mapRef}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      onRegionChangeComplete={handleRegionChange}
      style={styles.container}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
