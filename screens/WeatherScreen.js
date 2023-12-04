import react, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WeatherScreen() {
  const navigation = useNavigation();
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const API_KEY = '404489b19bca41a40ac42f0e8a93fc2b';

  const fetchWeather = () => {
    // Function to fetch weather data based on the user input and update state.
    console.log(API_KEY)
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Check if the API returned an error message
        if (data.cod !== 200) {
          console.error('Error fetching Weather data:', data.message);
          return;
        }

        // Update the 'weather' state with the fetched data
        setWeather(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error)
      })
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Weather App</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter a city'
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <TouchableOpacity style={styles.button} onPress={fetchWeather}>
        <Text style={styles.buttonText}>Get Weather</Text>
      </TouchableOpacity>

      {/* Display the weather information here */}
      {weather && (
        <View style={styles.weatherInfo}>
          <Text style={styles.weatherText}>City: {weather.name}</Text>
          <Text style={styles.weatherText}>Description: {weather.weather[0].description}</Text>
          <View>
            <Button
              title="See Details"
              onPress={() => {
                // Navigate to the WeatherDetail screen, passing weather data as a parameter
                navigation.navigate('WeatherDetail', { weather });
              }}
            />
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  weatherInfo: {
    marginTop: 20,
  },
  weatherText: {
    fontSize: 18,
    marginBottom: 10,
  },
});