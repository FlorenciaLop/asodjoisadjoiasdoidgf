import React from "react";
import Career from "../views/Career";
import { Box } from "@chakra-ui/react";

const auxCareer = () => {
  return (
    <>
      <Box bg="blue" w="100" h="100vh"></Box>
      <Career />
      <Box bg="blue" w="100" h="100vh"></Box>
    </>
  );
};

export default auxCareer;
