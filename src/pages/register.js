import React, { useState } from "react";
import {
  Flex,
  Grid,
  Text,
  Input,
  FormLabel,
  Box,
  Button,
  FormControl,
} from "@chakra-ui/react";
import axios from "axios";

const register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [city, setCity] = useState();

  const onFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onLastName = (e) => {
    setLastName(e.target.value);
  };

  const onPassword = (e) => {
    setPassword(e.target.value);
  };

  const onEmail = (e) => {
    setEmail(e.target.value);
  };

  const onCity = (e) => {
    setCity(e.target.value);
  };

  const onSubmit = (e) => {
    const user = {
      firstName,
      lastName,
      password,
      email,
      city,
    };
    axios
      .post("http://localhost:3000/api/user", {
        firstName,
        lastName,
        password,
        email,
        city,
      })
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
    console.log(user);
  };

  return (
    <Grid w="100vw" h="100vh" justifyContent={"center"} alignContent="center">
      <Grid w="40vw" h="70vh" bg="#dedede">
        <Text fontSize={"6xl"} justifySelf="center">
          Register
        </Text>
        <FormControl justifyContent={"center"} ml="5vw">
          <FormLabel>first name</FormLabel>
          <Input type="text" w="60%" onChange={onFirstName}></Input>

          <FormLabel>last name</FormLabel>
          <Input type="text" w="60%" onChange={onLastName}></Input>

          <FormLabel>email</FormLabel>
          <Input type="email" w="60%" onChange={onEmail}></Input>

          <FormLabel>password</FormLabel>
          <Input type="password" w="60%" onChange={onPassword}></Input>

          <FormLabel>city</FormLabel>
          <Input type="text" w="60%" onChange={onCity}></Input>

          <Input type="submit" w="60%" onClick={onSubmit}></Input>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default register;
