import React, { useEffect, useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  Flex,
  Image,
  SimpleGrid,
  Spacer,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import BorderCountries from "../components/BorderCountries";

type CountryContainerProps = {
  [x: string]: any;
};

const CountryContainer: React.FC<CountryContainerProps> = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [countryData, setCountryData] = useState({} as any);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${country}`)
      .then(function (response) {
        setCountryData(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        setLoading(false);
      });
  }, [country]);

  const getCountryInfo = (country: any) => {
    const {
      name,
      capital,
      region,
      subregion,
      population,
      currencies,
      borders,
    } = country;

    return (
      <Box>
        <Text fontWeight={"bold"} fontSize={"3xl"}>
          {name?.common}
        </Text>
        <Flex pt={5}>
          <Box>
            <Text pb={2}>
              <Text fontWeight={"bold"} as={"span"}>
                Native Name:{" "}
              </Text>{" "}
              {name?.common}
            </Text>

            <Text pb={2}>
              <Text fontWeight={"bold"} as={"span"}>
                Population:{" "}
              </Text>{" "}
              {population}
            </Text>

            <Text pb={2}>
              <Text fontWeight={"bold"} as={"span"}>
                Region:{" "}
              </Text>{" "}
              {region}
            </Text>

            <Text pb={2}>
              <Text fontWeight={"bold"} as={"span"}>
                Sub Region:{" "}
              </Text>{" "}
              {subregion}
            </Text>

            <Text pb={2}>
              <Text fontWeight={"bold"} as={"span"}>
                Capital:{" "}
              </Text>{" "}
              {capital}
            </Text>
          </Box>
          <Spacer />
          <Box>
            <Text pb={2}>
              <Text fontWeight={"bold"} as={"span"}>
                Top Level Domain:{" "}
              </Text>{" "}
              {name?.common}
            </Text>

            <Text pb={2}>
              <Text fontWeight={"bold"} as={"span"}>
                Currencies:{" "}
              </Text>{" "}
              {currencies?.GMD?.name}
            </Text>

            <Text pb={2}>
              <Text fontWeight={"bold"} as={"span"}>
                Languages:{" "}
              </Text>{" "}
              {name?.common}
            </Text>
          </Box>
        </Flex>
        <Flex alignItems={"center"} pt={10}>
          <Text pr={5} fontWeight={"bold"} as={"span"}>
            Border Countries:
          </Text>
          <BorderCountries borders={borders} />
        </Flex>
      </Box>
    );
  };

  return (
    <Box px={"5%"} pt={10}>
      <Flex justifyContent={"start"}>
        <Card>
          <Button
            onClick={() => navigate(-1)}
            variant={"ghost"}
            leftIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </Card>
      </Flex>
      {!loading ? (
        <SimpleGrid
          alignItems={"center"}
          pt={"10%"}
          columns={[1, 1, 2]}
          spacing={"15%"}
        >
          <Image
            width={"100%"}
            objectFit={"cover"}
            src={countryData.flags.png}
            alt={countryData.flags.alt}
          />
          {getCountryInfo(countryData)}
        </SimpleGrid>
      ) : (
        <Flex justifyContent={"center"}>
          <Spinner color="blue.500" thickness="4px" size={"xl"} />
        </Flex>
      )}
    </Box>
  );
};
export default CountryContainer;
