import { Flex, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Flex
        flexDir={"column"}
        gridGap={"10px"}
        h={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading>Error</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexpected error has occured"}
        </Text>
      </Flex>
    </>
  );
};

export default ErrorPage;
