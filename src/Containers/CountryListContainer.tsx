import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";

import CountryCard from "../components/CountryCard";

type CountryListContainerProps = {
  countries: string[];
  [x: string]: any;
};

const CountryListContainer: React.FC<CountryListContainerProps> = ({
  countries,
}) => {
  return (
    <Flex justifyContent={"center"}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={"40px"}>
        {countries.map((country: any) => {
          return <CountryCard key={country.name.common} country={country} />;
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default CountryListContainer;
