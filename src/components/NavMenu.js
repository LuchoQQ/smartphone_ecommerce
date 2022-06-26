import React from "react";
import { Grid, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
const arr = {
  Home: "/",
  Shop: "/shop",
  About: "/about",
};

const NavMenu = () => {
  return (
    <>
      <Grid ml="auto" autoFlow="column" gap="4vw">
        {Object.entries(arr).map((item, key) => {
          return (
            <>
              <Link href={item[1]} key={key}>
                <a style={{ alignSelf: "center", fontSize: '1.5rem' }}>{item[0]}</a>
              </Link>
            </>
          );
        })}
      </Grid>
    </>
  );
};

export default NavMenu;
