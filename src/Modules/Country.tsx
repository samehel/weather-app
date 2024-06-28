import { Text, Flex } from "@chakra-ui/react";
import { getName } from 'country-list';
import theme from "../assets/theme";
import Flag from 'react-world-flags';

interface WeatherProps {
    weatherData: any, 
}

function Country({ weatherData }: WeatherProps) {
    return (
        <Flex direction="column" alignItems="center">
            <Text fontSize="x-large" fontWeight="bold" fontFamily={theme.fonts.text}>{getName(weatherData.sys.country)}</Text>
            <Text fontSize="large" fontFamily={theme.fonts.text}>{weatherData.sys.country}</Text>
            <Flag code={weatherData.sys.country} height="48" />
        </Flex>
    );
}

export default Country;
