import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatforms } from "../../hooks/usePlatforms";
import { IPlatforms } from "../../data/platform";
import { TSelectedPlatform } from "../../data/common";

interface IProps {
  onSelectedPlatform: (platform: IPlatforms) => void;
  platform: TSelectedPlatform;
}

const PlatformList = ({ onSelectedPlatform, platform }: IProps) => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.map((platform) => {
          return (
            <MenuItem
              key={platform?.id}
              onClick={() => onSelectedPlatform(platform)}
            >
              {platform?.name}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;
