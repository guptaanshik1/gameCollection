import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useQueryStore from "../../app/useQueryStore";

const SortList = () => {
  const sortMap = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const [sortOrder, setSortOrder] = useQueryStore((state) => [
    state.queryObject.order,
    state.setSortOrder,
  ]);

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
              onClick={() => setSortOrder(order.value)}
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
