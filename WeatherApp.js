import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Button, Text, ImageBackground, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import { conditionIconMapping, conditionIconImages } from './ConditionIconMapping';
import { customStyles } from './WeatherAppStyles';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const apiKey = 'a75744e02bcb402f8be205557241701';

  const rotationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (weatherData && weatherData.current.condition) {
      const conditionIconNumber = getConditionIconNumber();
      if (conditionIconNumber) {
        try {
          const iconPath = getWeatherIconPath(conditionIconNumber);
          setWeatherIcon(iconPath);
        } catch (error) {
          console.error(`Error loading weather icon: ${error.message}`);
        }
      }
    }
  }, [weatherData]);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      if (responseData.current && responseData.location) {
        setWeatherData(responseData);
        setError('');
        setLastUpdated(new Date());
      } else {
        setWeatherData(null);
        setError('Weather data not found or incomplete for the specified city.');
      }
    } catch (error) {
      console.error(`Error fetching weather data: ${error.message}`);
      setWeatherData(null);
      setError('Failed to fetch weather data. Please check the city name and try again.');
    }
  };

  const getConditionIconNumber = () => {
    if (weatherData && weatherData.current && weatherData.current.condition) {
      const conditionText = weatherData.current.condition.text;
      return conditionIconMapping[conditionText] || null;
    }
    return null;
  };

  const getWeatherIconPath = (conditionIconNumber) => {
    return conditionIconImages[conditionIconNumber] || null;
  };

  const handleRefresh = () => {
    fetchWeatherData();
    Animated.timing(rotationValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      rotationValue.setValue(0);
    });
  };

  const rotateValue = rotationValue.interpolate({
    inputRange: [0, 0.5],
    outputRange: ['360deg', '0deg'],
  });

  const getFormattedLastUpdated = () => {
    if (lastUpdated) {
      return lastUpdated.toLocaleTimeString();
    }
    return 'N/A';
  };

  return (
    
    <ImageBackground source={require('./bg.jpg')} style={customStyles.backgroundImage}>
      <View style={customStyles.container}>
      <Text style={customStyles.welcomeText}>Welcome to Weather App</Text>
      <Text style={customStyles.additionalText}>Check the Weather with Ease</Text>

        <TextInput
          style={customStyles.input}
          placeholder="city, country"
          onChangeText={(text) => setCity(text)}
        />
        {weatherData && (
          <View style={customStyles.weatherInfo}>
            <TouchableOpacity style={customStyles.refreshButton} onPress={handleRefresh}>
              <Animated.Image
                source={require('./reload.png')}
                style={[customStyles.refreshIcon, { transform: [{ rotate: rotateValue }] }]}
              />
            </TouchableOpacity>
            <Text style={customStyles.weatherText}>{'Last Updated: '}
              <Text style={customStyles.locationText}>{getFormattedLastUpdated()}</Text>
            </Text>
            <Text style={customStyles.weatherText}>{'Showing weather for: '}
              <Text style={customStyles.locationText}>{`${weatherData.location.name}, ${weatherData.location.country}`}</Text>
            </Text>
            <View style={customStyles.row}>
              <View style={customStyles.leftSide}>
                <Text style={[customStyles.leftText, customStyles.dynamicText]}>{`Temperature --  ${weatherData.current.temp_c}°C`}</Text>
                <Text style={[customStyles.leftText, customStyles.dynamicText, { marginBottom: 0 }]}>{`Weather Condition: ${weatherData.current.condition.text}`}</Text>
                <Text style={[customStyles.leftText, customStyles.dynamicText]}>{`Wind --  ${weatherData.current.wind_kph} km/h, ${weatherData.current.wind_dir}`}</Text>
                <Text style={[customStyles.leftText, customStyles.dynamicText]}>{`Pressure -- ${weatherData.current.pressure_mb} mb`}</Text>
              </View>
              <View style={customStyles.rightSide}>
                {weatherIcon && (
                  <Image source={weatherIcon} style={customStyles.weatherIconLarge} />
                )}
              </View>
            </View>
          </View>
        )}
        {error !== '' && (
          <View style={customStyles.errorBox}>
            <Text style={customStyles.errorText}>{error}</Text>
          </View>
        )}
        <View style={customStyles.buttonContainer}>
          <Button title="Check the Weather" onPress={fetchWeatherData} style={customStyles.button} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default WeatherApp;