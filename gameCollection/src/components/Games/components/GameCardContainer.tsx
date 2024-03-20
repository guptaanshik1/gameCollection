import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: IProps) => {
  return (
    <Box
      borderRadius={"10px"}
      overflow={"hidden"}
      _hover={{
        transform: "scaleY(1.03)",
        transition: "transform 15s ease-in",
        zIndex: 999,
        borderRadius: "12px",
        overflow: "hidden",
        transitionDuration: "0.2s",
      }}
      // translateY(10%)
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
