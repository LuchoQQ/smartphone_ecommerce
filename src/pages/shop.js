import React from "react";
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import { Flex, Box, Grid } from '@chakra-ui/react'
import ShopLayout from "../layouts/ShopLayout";
import axios from 'axios'


const shop = ({ data }) => {

  return (
    <>
      <Navbar />
      <Flex>
        <Sidebar />
        <ShopLayout data={data} />
      </Flex>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()
  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}

export default shop;
