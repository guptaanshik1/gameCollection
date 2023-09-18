import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface IProps {
  onSelectSortOrder: (order: string) => void;
  sortOrder: string;
}

const SortList = ({ onSelectSortOrder, sortOrder }: IProps) => {
  const sortMap = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const getSelectedSortOrder = () => {
    return sortMap.find((order) => order.value === sortOrder)?.label;
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Order By: ${getSelectedSortOrder() || "Relevance"} `}
      </MenuButton>
      <MenuList>
        {sortMap.map((order) => {
          return (
            <MenuItem
              key={order.value}
              value={order.value}
              onClick={() => onSelectSortOrder(order.value)}
            >
              {order.label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default SortList;
