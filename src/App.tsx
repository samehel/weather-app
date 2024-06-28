import { Box, Flex, Heading, Switch, Text } from '@chakra-ui/react';
import Weather from './Modules/Weather';
import theme from './assets/theme';
import { useEffect, useState } from 'react';
import ErrorHandler from './Modules/ErrorHandler';
import SunsetSunrise from './Modules/SunsetSunrise';
import Environment from './Modules/Environment';
import FeelsLike from './Modules/FeelsLike';
import Country from './Modules/Country';
import Wind from './Modules/Wind';

import './background.css'

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const weatherModules = [Country, Weather, FeelsLike, Environment, Wind, SunsetSunrise];

function App() {
  const [weather, setWeather] = useState<any>(null);
  const [errorType, setErrorType] = useState<number>(0);
  const [unit, setUnit] = useState<string>('metric'); // State for unit selection
  const [weatherMapSource, setWeatherMapSource] = useState<string>('')

  useEffect(() => {
      const fetchWeather = async(lat: number, lon: number) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`);
            setWeatherMapSource(`https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=50.4&detailLon=14.3&metricWind=default&metricTemp=default&radarRange=-1`)

            if(!response.ok)
                throw new Error('Unable to retrieve weather data');

            const data = await response.json();
            setWeather(data);
        } catch (e) {
            setErrorType(1);
            console.error('Error fetching weather:', e);
        }
    }

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                fetchWeather(position.coords.latitude, position.coords.longitude);
            },
            (e) => {
                setErrorType(2);
                console.error('Error getting geolocation:', e);
            }
        );
    } else {
        setErrorType(3);
        console.error('Geolocation not available.');
    }
  }, [unit])

  const handleUnitChange = (checked: boolean) => {
    setUnit(checked ? 'imperial' : 'metric');
  }

  return (
    <Box className='gradient-background' minHeight="100vh"> 
      <Flex direction="column" align="center" p={4}>
        <Heading 
          textAlign="center" 
          mb={8} 
          fontFamily={theme.fonts.text} 
          bgGradient={theme.colors.creamyGradient}
          bgClip="text"
        >
          An Amazing Weather App.
        </Heading>
        <Flex justify="center" flexWrap="wrap">
          {weatherModules.map((WeatherModule, index) => (
              <Box
                key={index}
                bg="creamyGradient"
                height="150px"
                width="150px"
                borderRadius="lg"
                boxShadow="depth"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="black"
                fontSize="xl"
                m={2}
              >
              {errorType !== 0 ? (
                  <ErrorHandler type={errorType} />
              ) : weather ? (
                <WeatherModule weatherData={weather} unit={unit}/>
              ) : (
                  <Text fontFamily={theme.fonts.text}>Loading...</Text>
              )}
              </Box>
            ))}
        </Flex>
        <Flex justify="center" mt={2}>
          <Text fontFamily={theme.fonts.text} bgGradient={theme.colors.creamyGradient} bgClip="text"  fontSize={20}>°C</Text>
          <Switch
            isChecked={unit === 'imperial'}
            onChange={(e) => handleUnitChange(e.target.checked)}
            size="lg"
            mx={2}
          />
          <Text fontFamily={theme.fonts.text} bgGradient={theme.colors.creamyGradient} bgClip="text" fontSize={20}>°F</Text>
        </Flex>
        <Box
          mt={8}
          width="80%"
          height="800px"
          borderRadius="lg"
          overflow="hidden"
          boxShadow="depth"
        >
          <iframe
            title="Climate Map"
            width="100%"
            height="100%"
            src={weatherMapSource}
            allowFullScreen
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default App
