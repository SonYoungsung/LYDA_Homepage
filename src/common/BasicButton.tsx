import { Button, Link } from "@chakra-ui/react";
import theme from "../theme/index";
// import LYDA_whitepaper_EN from '/'
type BasicButtonPtop = {
  text: string;
  w?: string;
  h?: string;
  fontSize?: number;
  isDisabled?: boolean;
  func?: any;
  bg?: string;
  style?: any;
  link?: string;
  color: string;
  mr?: string;
  border?: string;
};

export const BasicButton = (prop: BasicButtonPtop) => {
  const {
    text,
    w,
    h,
    isDisabled,
    fontSize,
    func,
    style,
    bg,
    link,
    color,
    mr,
    border,
  } = prop;

  if (link) {
    return (
      <a style={{ textDecoration: "none" }} href={link} download="">
        <Button
          _hover={{ cursor: "pointer" }}
          onClick={func}
          _active={{}}
          w={w || "150px"}
          h={h || "38px"}
          fontSize={fontSize || "16px"}
          bg={bg}
          mr={mr}
          borderRadius={0}
          disabled={isDisabled}
          border={border}
          borderTopRightRadius={"20px"}
          fontWeight={500}
          color={color}
          _disabled={{bg:'#C4C6CE',color:'white.0'}}
        >
          {text}
        </Button>
      </a>
    );
  }

  return (
    <Button
      _hover={{ cursor: "pointer", textDecoration: "none" }}
      onClick={func}
      _active={{}}
      w={w || "150px"}
      h={h || "38px"}
      fontSize={fontSize || "16px"}
      bg={bg}
      mr={mr}
      borderRadius={0}
      borderTopRightRadius={"20px"}
      fontWeight={500}
      color={color}
      disabled={isDisabled}
      border={border}
      _disabled={{bg:'#C4C6CE', color:'white.0'}}
    >
      {text}
    </Button>
  );
};
