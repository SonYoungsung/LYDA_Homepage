import { Flex, Text, Image,useMediaQuery } from "@chakra-ui/react";
import React from "react";
import theme from "../../theme/index";
import { BasicButton } from "../../common/BasicButton";
import graph from "../../assets/graph.png";

export const WhatIsLyda = () => {
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex bg={"white"} h={isSmallerThan1024? '672px':"790px"} justifyContent={"center"} alignItems='center' px={"auto"} zIndex={100} p='auto'>
      <Flex alignItems={"center"} {...theme.LAYOUT_STYLE.layoutStyle()}>
        <Flex
         
          flexDir="column"
          color={"blue.200"}
          fontFamily={theme.fonts.main}
          fontStyle="normal"
          mr={isSmallerThan1024? '48px':"136px"}
        >
          <Text fontSize={isSmallerThan1024? '40px':"70px"} fontWeight={700} lineHeight={isSmallerThan1024? '62.96px': "70px"}>
            WHAT IS LYDA
          </Text>
          <Text
            mt={"32px"}
            fontSize={"16px"}
            fontWeight={300}
            lineHeight={"25px"}
            mb={"50px"}
            w={isSmallerThan1024? '400px':'437px'}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor.
          </Text>
          <Flex>
            <BasicButton
              text="Whitepaper (EN)"
              bg={"purple.0"}
              color={"#ffffff"}
              mr={"24px"}
              link={"LYDA_Whitepaper_v1.1_220608_EN.docx.pdf"}
            />
            <BasicButton
              text="Whitepaper (KR)"
              bg={"blue.0"}
              color={"blue.200"}
              link={"LYDA_Whitepaper_KR.pdf"}
            />
          </Flex>
        </Flex>
        <Image src={graph} h={isSmallerThan1024? '496px':"550px"} w={isSmallerThan1024? '496px':"550px"} />
      </Flex>
    </Flex>
  );
};
