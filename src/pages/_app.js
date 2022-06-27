import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/akshar";
import { Provider } from "react-redux";
import store from '../redux/store'
function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    colors: {
      primary: "#05668d",
      secondary: "#028090",
      tertiary: "#00a896",
    },
    fonts: {
      main: "Akshar",
    },
  });

  return (
    <>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default MyApp;
