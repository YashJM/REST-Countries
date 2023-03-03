import React, { useEffect, useState } from "react";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import axios from "axios";

import Filter from "./components/Filter";
import Searchbox from "./components/Searchbox";
import CountryListContainer from "./Containers/CountryListContainer";

type CountriesProps = {
  [x: string]: any;
};

const Countries: React.FC<CountriesProps> = () => {
  let filteredCountries: string[] = [];
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(function (response) {
        setCountries(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  if (countries.length) {
    filteredCountries = countries.filter((country: any) => {
      return (
        country.name.common.toLowerCase().includes(searchValue.toLowerCase()) &&
        country.region.includes(filterValue)
      );
    });
  }

  return (
    <Box px={"5%"} pt={10} className="AppBody">
      <Flex justifyContent={"space-between"}>
        <Searchbox setSearchValue={setSearchValue} />
        <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      </Flex>
      <Flex justifyContent={"center"} pt={"5%"}>
        {!loading ? (
          filteredCountries.length ? (
            <CountryListContainer countries={filteredCountries} />
          ) : (
            "NO COUNTRIES FOUND"
          )
        ) : (
          <Spinner color="blue.500" thickness="4px" size={"xl"} />
        )}
      </Flex>
    </Box>
  );
};
export default Countries;
