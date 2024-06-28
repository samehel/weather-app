import { Text, Flex, Image } from "@chakra-ui/react";
import theme from "../assets/theme";

interface WeatherProps {
    weatherData: any, 
    unit: string
}

const getWindDirection = (deg: number) => {
    if (deg > 337.5) return 'North';
    if (deg > 292.5) return 'North West';
    if (deg > 247.5) return 'West';
    if (deg > 202.5) return 'South West';
    if (deg > 157.5) return 'South';
    if (deg > 122.5) return 'South East';
    if (deg > 67.5) return 'East';
    if (deg > 22.5) return 'North East';
    return 'North';
};

function Wind({ weatherData, unit }: WeatherProps) {
    const windSpeedUnit = unit === 'imperial' ? 'mph' : 'm/s';

    return (
        <Flex direction="column" alignItems="center">
            <Text fontSize="2xl" fontWeight="bold" fontFamily={theme.fonts.text}>Wind</Text>
            <Text align="center" fontFamily={theme.fonts.text}>{weatherData.wind.speed}{windSpeedUnit} • {getWindDirection(weatherData.wind.deg)} ({weatherData.wind.deg}°)</Text>
        </Flex>
    );
}

export default Wind;
