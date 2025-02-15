import { Flex, Text, Image, Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import theme from "../../theme";
import bg from "../../assets/bg2.png";
import timeline from "../../assets/timeline.png";
import timeline2 from "../../assets/timeline2.png";
import timeline1 from "../../assets/timeline1.png";
export const Roadmap = () => {
  const mapPoints = [
    {
      title: "Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: "31%",
      left: "3%",
    },
    {
      title: "Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: "47.8%",
      left: "32%",
    },
    {
      title: "Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: "57%",
      left: "57%",
    },
    {
      title: "Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: "26%",
      left: "78%",
      rotated: true,
    },
    {
      title: "Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: "7%",
      left: "102%",
    },
    {
      title: "Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: "51%",
      left: "130%",
      rotated: true,
    },
    {
      title: "Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: "46%",
      left: "157%",
    },
    {
      title: "Amet minim mollit",
      content:
        "on deserunt ullamco est sit aliqua dolor do amet sint.  Velit officia consequat duis ",
      top: "43%",
      left: "174%",
      rotated: true,
    },
  ];

  const [scrollDir, setScrollDir] = useState("right");
  const [mouseDir, setMouseDir] = useState("right");
  const [y, setY] = useState(0);
  const [yy, setYy] = useState(0);
  useEffect(() => {
    const onScroll = (e: any) => {
      const currentScroll = e.currentTarget.scrollLeft;
      setY(currentScroll);

      if (currentScroll > y) {
        setScrollDir("right");
      } else {
        setScrollDir("left");
      }
    };

    document.getElementById("scrollCont")?.addEventListener("scroll", onScroll);

    return () => {
      document
        .getElementById("scrollCont")
        ?.removeEventListener("scroll", onScroll);
    };
  }, [y]);

  useEffect(() => {
    const onMove = (e: any) => {
      setYy(e.pageX);

      if (e.pageX > yy) {
        setMouseDir("right");
      } else if (e.pageX < yy) {
        setMouseDir("left");
      }
    };
    document
      .getElementById("scrollCont")
      ?.addEventListener("mousemove", onMove);
    return () =>
      document
        .getElementById("scrollCont")
        ?.removeEventListener("mousemove", onMove);
  }, [yy]);

  const RoadmapPoint = (props: {
    title: string;
    content: string;
    top: string;
    left: string;
    rotated?: boolean;
  }) => {
    const { title, content, top, left, rotated } = props;
    const [isHover, setIsHover] = useState(false);

    return rotated ? (
      <Flex
        top={top}
        left={left}
        position="absolute"
        flexDir={"row"}
        alignItems="flex-end"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Flex h={"100%"} w={"89px"} mb={"150px"}>
          <Flex
            h={"88px"}
            w={"88px"}
            bg={isHover ? "rgba(113, 247, 255, 0.2)" : "transparent"}
            borderRadius={"50%"}
            // position='relative'
            justifyContent={"center"}
            alignItems="center"
            border={isHover ? "3px dashed #71F7FF" : ""}
          >
            <Box
              h={"25px"}
              w={"25px"}
              bg={"blue.100"}
              opacity={1}
              borderRadius={"50%"}
              zIndex={10000}
              // position='absolute'
            ></Box>
            <Box
              height={"200px"}
              width="1px"
              bg={"blue.100"}
              position="absolute"
              mt={"175px"}
              opacity={isHover ? 1 : 0.3}
            ></Box>
          </Flex>
        </Flex>
        <Flex
          position="relative"
          left={"-12px"}
          color={isHover ? "blue.100" : "white"}
          flexDir="column"
        >
          <Text fontSize={"20px"} fontWeight={600} fontStyle="normal">
            {title}
          </Text>
          <Text
            w={"300px"}
            fontSize={"16px"}
            fontWeight={"normal"}
            fontStyle="normal"
          >
            {content}
          </Text>
        </Flex>
      </Flex>
    ) : (
      <Flex
        top={top}
        left={left}
        position="absolute"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Flex h={"100%"} w={"89px"} mb={"150px"}>
          <Flex
            h={"88px"}
            w={"88px"}
            bg={isHover ? "rgba(113, 247, 255, 0.2)" : "transparent"}
            borderRadius={"50%"}
            // position='relative'
            justifyContent={"center"}
            alignItems="center"
            border={isHover ? "3px dashed #71F7FF" : ""}
          >
            <Box
              h={"25px"}
              w={"25px"}
              bg={"blue.100"}
              opacity={1}
              borderRadius={"50%"}
              zIndex={10000}
              // position='absolute'
            ></Box>
            <Box
              height={"200px"}
              width="1px"
              bg={"blue.100"}
              position="absolute"
              mb={"175px"}
              opacity={isHover ? 1 : 0.3}
            ></Box>
          </Flex>
        </Flex>
        <Flex
          position="relative"
          top={"-143px"}
          left={"-12px"}
          color={isHover ? "blue.100" : "white"}
          flexDir="column"
        >
          <Text fontSize={"20px"} fontWeight={600} fontStyle="normal">
            {title}
          </Text>
          <Text
            w={"300px"}
            fontSize={"16px"}
            fontWeight={"normal"}
            fontStyle="normal"
          >
            {content}
          </Text>
        </Flex>
      </Flex>
    );
  };
  return (
    <Flex
      bg={"blue.400"}
      backgroundImage={bg}
      backgroundSize={"100% 970px"}
      h={"970px"}
      // onScroll={detectScroll}
      justifyContent={"center"}
      zIndex={0}
      overflowX="scroll"
      id="scrollCont"
      style={{
        cursor:
          scrollDir === "right" || mouseDir === "right"
            ? `url(mouseCursorRight.png), default`
            : `url(mouseCursorLeft.png), default`,
      }}
    >
      <Flex fontFamily={theme.fonts.main} mt={"120px"} flexDir={"column"}>
        <Flex
          position="absolute"
          // top='1893px'
          // left={'789px'}
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
          fontFamily={theme.fonts.main}
          fontStyle={"normal"}
          flexDir={"column"}
          color={"white.0"}
        >
          {" "}
          <Text fontWeight={600} fontSize={"48px"} mb={"20px"}>
            LYDA Roadmap
          </Text>
          <Text
            fontSize={"16px"}
            fontWeight={400}
            w={"539px"}
            textAlign={"center"}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Exercitation veniam consequat sunt nostrud amet. Amet
          </Text>
        </Flex>
        <Flex
          justifyContent={"flex-start"}
          alignItems="flex-start"
          flexDir={"column"}
          position="relative"
          mt={"320px"}
          id={"scrooll"}
        >
          <Flex w={"200%"}>
            <Image src={timeline1} h={"341px"} />
            {/* <Image src={timeline2} w={"100%"}/> */}
          </Flex>

          {mapPoints.map((point: any, index: number) => (
            <RoadmapPoint
              key={index}
              title={point.title}
              content={point.content}
              top={point.top}
              left={point.left}
              rotated={point.rotated}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
