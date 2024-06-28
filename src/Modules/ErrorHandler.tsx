import { Text, Image, Box } from '@chakra-ui/react';
import theme from '../assets/theme';

interface ErrorHandlerProps {
  type: number;
}

function ErrorHandler({ type }: ErrorHandlerProps) {
  let errorMessage = '';
  let imageSrc = '';

  switch (type) {
    case 1:
      errorMessage = 'Unable to retrieve weather data';
      imageSrc = 'sad-sun.png'; 
      break;
    case 2:
      errorMessage = 'I need permission to access your location';
      imageSrc = 'location-off.png';
      break;
    case 3:
      errorMessage = 'There was an issue locating you';
      imageSrc = 'location-unknown.png';
      break;
    default:
      errorMessage = 'Unknown Error';
      break;
  }

  return (
    <Box
      height="150px"
      width="150px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      fontSize="sm"
    >
      <Text fontFamily={theme.fonts.text} mb={2}>{errorMessage}</Text>
      <Image src={imageSrc} alt={`Error type ${type}`} />
    </Box>
  );
}

export default ErrorHandler;
