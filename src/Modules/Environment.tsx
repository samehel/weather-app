import { Text, Flex, Image } from "@chakra-ui/react";
import theme from "../assets/theme";

interface WeatherProps {
    weatherData: any, 
}

function Environment({ weatherData }: WeatherProps) {
    return (
        <Flex direction="column" alignItems="center">
            <Text fontSize="x-large" fontWeight="bold" fontFamily={theme.fonts.text}>{weatherData.weather[0].main}</Text>
            <Text fontSize="large" fontFamily={theme.fonts.text}>{weatherData.weather[0].description}</Text>
            <Image src="/environment.png" alt="Environment" />
        </Flex>
    );
}

export default Environment;
