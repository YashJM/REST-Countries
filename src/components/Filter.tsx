import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Card,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

type FilterProps = {
  [x: string]: any;
};

const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Filter: React.FC<FilterProps> = ({ filterValue, setFilterValue }) => {
  return (
    <Card>
      <Menu>
        <MenuButton height={"100%"} px={"20px"}>
          {filterValue ? filterValue : "Filter by Region"} <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => setFilterValue("")} key={"all"}>
            View All
          </MenuItem>
          {options.map((option, index) => (
            <MenuItem onClick={() => setFilterValue(option)} key={index}>
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Card>
  );
};

export default Filter;
