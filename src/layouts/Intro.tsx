import { Flex,useTheme } from "@chakra-ui/react";
import React from "react";

export const Intro = () => {
  const theme = useTheme();
  return <Flex w={'100%'} bg={"purple.0"} h={'983px'} justifyContent={'center'}>
    <Flex >Info</Flex>
  </Flex>;
};
