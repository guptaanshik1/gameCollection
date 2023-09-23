import { Flex, Spinner } from "@chakra-ui/react";

const CustomSpinner = () => {
  return (
    <Flex w={"100%"} justifyContent={"center"} alignItems={"center"}>
      <Spinner size={"xl"} />
    </Flex>
  );
};

export default CustomSpinner;
