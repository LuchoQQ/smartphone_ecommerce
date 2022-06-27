import React from "react";
import {
  Grid,
  Flex,
  Box,
  Text,
  Button,
  useTheme,
  Icon,
} from "@chakra-ui/react";
import NavMenu from "../components/NavMenu";
import { BsPhoneFill } from "react-icons/bs";
const Navbar = () => {
  const theme = useTheme();

  return (
    <>
      <Flex
        h="15vh"
        bg={theme.colors.primary}
        flexDir="row"
        fontFamily={theme.fonts.main}
        fontWeight="600"
        justifyContent={'center'}
        px='3vw'
      >
        <Icon as={BsPhoneFill} alignSelf='center' fontSize='6xl'/>
        <NavMenu />
        <Grid autoFlow="column" gap="2vw" ml="2vw" w="10vw" alignItems='center'>
          <Button>Login</Button>
        </Grid>
      </Flex>
    </>
  );
};

export default Navbar;
