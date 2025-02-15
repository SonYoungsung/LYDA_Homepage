import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme/index";
import bgSubPage from "../../assets/bgSubPage.png";
import AboutLyda from '../../assets/SVG/ABOUTLYDA.svg'
export const HeaderLayout = () => {
  return (
    <Flex
      h={"400px"}
      bg={"linear-gradient(276.99deg, #55C2FF -5.6%, #4361EE 56.85%)"}
      backgroundImage={bgSubPage}
      alignItems="center"
      backgroundSize={"100% 400px"}
      flexDir='column'
    >
      {/* <Text
       
        fontSize="60px"
        color={"transparent"}
        lineHeight="94px"
        fontStyle="normal"
        style={{
          WebkitTextStrokeWidth: 1,
          WebkitTextStrokeColor: "white",
        }}
      >
        {" "}
        ABOUT LYDA
      </Text> */}
      <Image  mt={"200px"} src={AboutLyda} w={'364.15px'} h={'44.24px'} mb={'36.5px'}/>
      <Text fontFamily={theme.fonts.main} color={'white.0'}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint
      </Text>
    </Flex>
  );
};
