import { Text, Flex, Image } from "@chakra-ui/react";
import theme from "../assets/theme";

interface WeatherProps {
    weatherData: any, 
}

function SunsetSunrise({ weatherData }: WeatherProps) {
    const { sys } = weatherData;
    
    const sunriseTime = new Date(sys.sunrise * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    const sunsetTime = new Date(sys.sunset * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

    return (
        <Flex direction="column" alignItems="center">
            <Image src="/sunrise.png" alt="Sunrise" mb={2} />
            <Text fontSize="medium" fontFamily={theme.fonts.text}>Sunrise: {sunriseTime}</Text>
            <Text fontSize="medium" fontFamily={theme.fonts.text}>Sunset: {sunsetTime}</Text>
            <Image src="/sunset.png" alt="Sunset" />
        </Flex>
    );
}

export default SunsetSunrise;
