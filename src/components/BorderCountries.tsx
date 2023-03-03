import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Wrap, WrapItem } from "@chakra-ui/react";
import axios from "axios";

type BorderCountriesProps = {
  borders: string[];
  [x: string]: any;
};

const BorderCountries: React.FC<BorderCountriesProps> = ({ borders }) => {
  const navigate = useNavigate();
  const [countries, setCountries]: any = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let temp: any[] = [];

      for (const border of borders) {
        const data: any = await axios.get(
          `https://restcountries.com/v3.1/alpha/${border}`
        );
        temp.push(...data.data);
      }
      setCountries(temp);
    };

    fetchData();
  }, [borders]);

  if (countries.length) {
    return (
      <Wrap>
        {countries.map((country: any, index: string) => {
          return (
            <WrapItem key={index}>
              <Card
                onClick={() => navigate(`/countries/${country.name.official}`)}
                cursor={"pointer"}
                mx={2}
                p={2}
              >
                {country.name.common}
              </Card>
            </WrapItem>
          );
        })}
      </Wrap>
    );
  } else {
    return <></>;
  }
};

export default BorderCountries;
