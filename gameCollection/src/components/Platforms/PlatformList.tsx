import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatforms } from "../../hooks/usePlatforms";
import usePlatform from "../../hooks/usePlatform";
import useQueryStore from "../../app/useQueryStore";

const PlatformList = () => {
  const { data: platforms, error } = usePlatforms();
  const [platformId, setPlatformId] = useQueryStore((state) => [
    state.queryObject.platformId,
    state.setPlatformId,
  ]);

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
              onClick={() => setPlatformId(platform?.id)}
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
