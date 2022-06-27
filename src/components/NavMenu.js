import React from "react";
import { Grid, Flex, Text, useTheme } from "@chakra-ui/react";
import Link from "next/link";
const arr = {
  Home: "/",
  Shop: "/shop",
  About: "/about",
};

const NavMenu = () => {
  const theme = useTheme()

  return (
    <>
      <Grid ml="auto" autoFlow="column" gap="4vw" alignContent={'center'} fontSize='4xl'>
        {Object.entries(arr).map((item, key) => {
          return (
            <div key={key}>
              <Link href={item[1]} key={key} >
                <a><Text color={'#dedede'} _hover={{ color: '#fff' }} transition='all 0.2s ease'>{item[0]}</Text></a>
              </Link>
            </div>
          );
        })}
      </Grid>
    </>
  );
};

export default NavMenu;
