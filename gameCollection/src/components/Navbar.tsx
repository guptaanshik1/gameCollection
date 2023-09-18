import { Flex, HStack, Image, Switch, Text } from "@chakra-ui/react";
import useColorTheme from "../hooks/useColorTheme";
import logo from "../assets/Ag1_09.jpg";
import SearchInput from "./SearchInput";

interface IProps {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: IProps) => {
  const { isDark, toggleColorMode } = useColorTheme();
  return (
    <HStack>
      <Image src={logo} alt={"logo"} boxSize={"50px"} borderRadius={"50%"} />
      <SearchInput onSearch={onSearch} />
      <Flex alignItems={"center"} gridGap={"10px"}>
        <Switch isChecked={isDark} onChange={toggleColorMode} />
        <Text whiteSpace={"nowrap"}>{isDark ? "Dark Mode" : "Light Mode"}</Text>
      </Flex>
    </HStack>
  );
};

export default Navbar;
