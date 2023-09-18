import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface IProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: IProps) => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) {
          onSearch(searchRef.current.value);
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
