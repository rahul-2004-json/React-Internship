import { Box, Flex } from "@chakra-ui/react";

export default function Summary() {
  return (
    <Box
      p={"6"}
      border={"1px solid"}
      borderColor={"gray.100"}
      overflow={"hidden"}
      borderRadius={"10"}
      background={"white"}
      display={"flex"}
      mt={"10"}
    >
      <Flex></Flex>
    </Box>
  );
}
