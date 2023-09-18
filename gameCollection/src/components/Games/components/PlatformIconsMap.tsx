import { Icon } from "@chakra-ui/react";
import { IParentPlatform } from "../../../data/AllGame";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { slugConstants } from "../../../utils/slugConstants";

export interface IProps {
  parentPlatform: IParentPlatform;
}

const PlatformIconsMap = ({ parentPlatform }: IProps) => {
  const platformToIconMap = {
    [slugConstants.PC]: FaWindows,
    [slugConstants.XBOX]: FaXbox,
    [slugConstants.MAC]: FaApple,
    [slugConstants.LINUX]: FaLinux,
    [slugConstants.PLAY_STATION]: FaPlaystation,
    [slugConstants.NINTENDO]: SiNintendo,
    [slugConstants.IOS]: MdPhoneIphone,
    [slugConstants.WEB]: BsGlobe,
    [slugConstants.ANDROID]: FaAndroid,
  };

  return (
    <>
      <Icon
        as={platformToIconMap[parentPlatform?.platform?.slug]}
        color="gray.500"
      />
    </>
  );
};

export default PlatformIconsMap;
