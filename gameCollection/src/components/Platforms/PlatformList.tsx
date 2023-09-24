import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatforms } from "../../hooks/usePlatforms";
import usePlatform from "../../hooks/usePlatform";

interface IProps {
  onSelectedPlatform: (platformId?: number) => void;
  platformId?: number;
}

const PlatformList = ({ onSelectedPlatform, platformId }: IProps) => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;
  const platform = usePlatform(platformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results?.map((platform) => {
          return (
            <MenuItem
              key={platform?.id}
              onClick={() => onSelectedPlatform(platform?.id)}
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
