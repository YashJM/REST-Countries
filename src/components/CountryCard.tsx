import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

type CountryCardProps = {
  [x: string]: any;
};

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const navigate = useNavigate();
  const { name, population, flags, region, capital } = country;

  const handleClick = () => {
    navigate(`/countries/${name.common}`);
  }

  return (
    <Card
      onClick={() => handleClick()}
      cursor={"pointer"}
      _hover={{ boxShadow: "0px 0px 4px 4px rgba(0, 0, 0, 0.1)" }}
      maxW={"sm"}
    >
      <Image objectFit={"cover"} src={flags.png} alt={flags.alt} />
      <CardBody padding={"30px"} pb={"45px"}>
        <Heading pb={5} size="md">
          {name.common}
        </Heading>
        <Text pb={1}>
          <Text fontWeight={"bold"} as={"span"}>
            Population:{" "}
          </Text>{" "}
          {population}
        </Text>
        <Text pb={1}>
          <Text fontWeight={"bold"} as={"span"}>
            Region:{" "}
          </Text>{" "}
          {region}
        </Text>
        <Text pb={1}>
          <Text fontWeight={"bold"} as={"span"}>
            Capital:{" "}
          </Text>{" "}
          {capital}
        </Text>
      </CardBody>
    </Card>
  );
};

export default CountryCard;
