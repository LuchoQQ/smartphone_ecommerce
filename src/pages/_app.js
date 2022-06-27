import "../styles/globals.css";
import { ChakraProvider, extendTheme} from "@chakra-ui/react";
import "@fontsource/akshar"
function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    colors: {
      primary: '#05668d',
      secondary: '#028090',
      tertiary: '#00a896'
    },
    fonts: {
      main: 'Akshar'
    }
  })

  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
