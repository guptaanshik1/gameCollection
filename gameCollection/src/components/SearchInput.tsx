import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useQueryStore from "../app/useQueryStore";

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchText = useQueryStore((state) => state.setSearchText);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) {
          setSearchText(searchRef.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          variant={"filled"}
          borderRadius={20}
          ref={searchRef}
          _focus={{ outline: "none", border: "none" }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
