import React from "react";
import { Grid, Flex, Box, Text, Button } from "@chakra-ui/react";
import NavMenu from "../components/NavMenu";

const Navbar = () => {
  return (
    <>
      <Flex h="10vh" bg="#dedede" flexDir='row'>
        <Text>Ecommerce</Text>
        <NavMenu />
        <Grid autoFlow='column' gap='2vw' ml='2vw' w='10vw'>
            <Button></Button>
            <Button></Button>
        </Grid>
      </Flex>
    </>
  );
};

export default Navbar;
