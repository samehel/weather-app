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

const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const weatherModules = [Country, Weather, FeelsLike, Environment, Wind, SunsetSunrise];

function App() {
  const [weather, setWeather] = useState<any>(null);
  const [errorType, setErrorType] = useState<number>(0);
  const [unit, setUnit] = useState<string>('metric'); // State for unit selection

  useEffect(() => {
      const fetchWeather = async(lat: number, lon: number) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`);
            
            if(!response.ok)
                throw new Error('Unable to retrieve weather data');

            const data = await response.json();
            setWeather(data);
            console.log(data)
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
    <Flex direction="column" align="center" p={4}>
      <Heading textAlign="center" mb={8} fontFamily={theme.fonts.text}>An Amazing Weather App.</Heading>
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
        <Text fontFamily={theme.fonts.text} fontSize={20}>°C</Text>
        <Switch
          isChecked={unit === 'imperial'}
          onChange={(e) => handleUnitChange(e.target.checked)}
          size="lg"
          mx={2}
        />
        <Text fontFamily={theme.fonts.text} fontSize={20}>°F</Text>
      </Flex>
    </Flex>
  )
}

export default App
