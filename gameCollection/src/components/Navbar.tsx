import { Flex, HStack, Image, Switch, Text } from "@chakra-ui/react";
import useColorTheme from "../hooks/useColorTheme";
import logo from "../assets/Ag1_09.jpg";

const Navbar = () => {
  const { isDark, toggleColorMode } = useColorTheme();
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} alt={"logo"} boxSize={"50px"} borderRadius={"50%"} />
      <Flex alignItems={"center"} gridGap={"10px"}>
        <Switch isChecked={isDark} onChange={toggleColorMode} />
        <Text>{isDark ? "Dark Mode" : "Light Mode"}</Text>
      </Flex>
    </HStack>
  );
};

export default Navbar;
