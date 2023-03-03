import React from "react";
import { Card, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

type SearchboxProps = {
  [x: string]: any;
};

const Searchbox: React.FC<SearchboxProps> = ({ setSearchValue }) => {
  return (
    <Card width={"40%"}>
      <InputGroup>
        <InputLeftElement
          zIndex={0}
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          onChange={(e) => setSearchValue(e.target.value)}
          size={"lg"}
          placeholder="Search for a country..."
        />
      </InputGroup>
    </Card>
  );
};

export default Searchbox;
