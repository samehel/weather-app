import { extendTheme } from "@chakra-ui/react";
import '@fontsource/poppins'

const theme = extendTheme({
    fonts: {
        text: 'Poppins, sans-serif',
    },
    colors: {
        creamyGradient: 'linear-gradient(135deg, #F9F6F4 0%, #F3F1EE 100%)',
        deepShadow: 'rgba(0, 0, 0, 0.1)'
    },
    shadows: {
        depth: '0 8px 16px 0 rgba(0, 0, 0, 0.1)'
    }
});

export default theme;