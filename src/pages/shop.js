import React from "react";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import { Flex, Box, Grid } from '@chakra-ui/react'
import ShopLayout from "../layouts/ShopLayout";
const shop = () => {
  return (
    <>
      <Navbar />
      <Flex>
        <Sidebar />
        <ShopLayout />
      </Flex>
    </>
  );
};

export default shop;
