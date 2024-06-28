import { Flex, Text, Image } from '@chakra-ui/react';
import theme from '../assets/theme';

interface WeatherProps {
    weatherData: any,
    unit: string
}

function FeelsLike({ weatherData, unit }: WeatherProps) {
    return (
        <Flex direction="column" align="center">
            <Text fontSize="2xl" fontWeight="bold" fontFamily={theme.fonts.text}>
                Feels Like
            </Text>
            <Text fontSize="xl" fontFamily={theme.fonts.text}>
                {weatherData.main.feels_like} °{unit === 'metric' ? 'C' : 'F'}
            </Text>
            <Image src="/temperature.png" alt="Sunset" />
        </Flex>
    )
    
}

export default FeelsLike