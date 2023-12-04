import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function WeatherDetail({ route }) {
  const { weather } = route.params;
  console.log(weather)

  return (
    <>
      <View>
        <Text>Weather Detail Screen</Text>
        <Text>City: {weather.name}</Text>
        <Text>Temperature: {weather.main.temp}°C</Text>
        <Text >Temperature: {weather.main.temp}°C</Text>
        <Text >Humidity: {weather.main.humidity}%</Text>
        <Text >Wind Speed: {weather.wind.speed} m/s</Text>
        {/* Display more weather details here */}
      </View>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: weather.coord.lat,
          longitude: weather.coord.lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: weather.coord.lat,
            longitude: weather.coord.lon
          }}
          title={weather.name}
          description={weather.description}
        />
      </MapView>
    </>
  );
}
