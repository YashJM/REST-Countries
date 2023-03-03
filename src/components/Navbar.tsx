import React from "react";
import { Flex, Text, Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";

type NavbarProps = {
  [x: string]: any;
};

const Navbar: React.FC<NavbarProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      minH={'70px'}
      justifyContent={'space-between'}
      alignItems={'center'}
      px={'5%'}
      boxShadow="0 0 4px 2px rgba(0, 0, 0, 0.1)"
    >
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        Where in the world?
      </Text>
      <Button
        variant={'ghost'}
        onClick={toggleColorMode}
        leftIcon={<MoonIcon />}
      >
        {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
      </Button>
    </Flex>
  );
};

export default Navbar;
