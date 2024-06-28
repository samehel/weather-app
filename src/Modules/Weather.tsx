import { Flex, Text, Image } from '@chakra-ui/react';
import theme from '../assets/theme';

interface WeatherProps {
    weatherData: any,
    unit: string
}

function Weather({ weatherData, unit }: WeatherProps) {
    return (
        <Flex direction="column" align="center">
            <Text fontSize="2xl" fontWeight="bold" fontFamily={theme.fonts.text}>
                {weatherData.name}
            </Text>
            <Text fontSize="xl" fontFamily={theme.fonts.text}>
                {weatherData.main.temp} °{unit === 'metric' ? 'C' : 'F'}
            </Text>
            <Image src="/temperature.png" alt="Sunset" />
        </Flex>
    )
    
}

export default Weather