import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Link from "next/link";

import axios from 'axios'
import { handleUser, selectUser } from "../store/userSlice";

const login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const userData = useSelector(selectUser)
  const dispatch = useDispatch()
  const onEmail = (e) => {
    setEmail(e.target.value);
  };

  const onPassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    const user = {
      email,
      password
    }
    axios.post('http://localhost:3000/api/auth/login/', user)
    .then(res => dispatch(handleUser(res.data.user)))
    .catch(res => console.log(res))
  }
  console.log(userData)
  return (
    <Grid w="100vw" h="100vh" justifyContent={"center"} alignContent="center">
      <Grid w="40vw" h="70vh" bg="#dedede">
        <Text fontSize={"6xl"} justifySelf="center">
          Inicia sesion!
        </Text>
        <FormControl justifyContent={"center"} ml="5vw">
          <FormLabel>email</FormLabel>
          <Input type="text" w="60%" onChange={onEmail}></Input>
          <FormLabel>password</FormLabel>
          <Input type="password" w="60%" onChange={onPassword}></Input>
          <Input type="submit" w="60%" value="ENVIAR" onClick={onSubmit}></Input>
        </FormControl>
        <Text></Text>
        <Link href="register">
          <Text>Register</Text>
        </Link>
      </Grid>
    </Grid>
  );
};

export default login;
