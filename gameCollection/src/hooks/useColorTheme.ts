import { useColorMode } from "@chakra-ui/react";

const useColorTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark" ? true : false;

  return { colorMode, toggleColorMode, isDark };
};

export default useColorTheme;
