import React from "react";
import "./search.css";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

const Search = () => {
  const searchRef = React.useRef("");
  const [isError, setIsError] = React.useState(false);
  const handleSearch = () => {
    setIsError(false);
    if (searchRef.current.value === "") {
      setIsError(true);
      return;
    } else {
      console.log(searchRef.current.value.toLowerCase());
    }
  };
  return (
    <div className="search_container">
      <InputGroup style={{ position: "relative" }}>
        <Input
          isInvalid={isError}
          ref={searchRef}
          fontSize={"2xl"}
          padding={"2.4rem"}
          placeholder="Enter Country"
          borderColor={"#1b65a7"}
        />
        <InputRightElement
          width="4.5rem"
          style={{
            position: "absolute",
            top: "25%",
            right: "2.7%",
          }}
        >
          <Button
            fontSize={"xl"}
            borderRadius={".5rem"}
            className="search-button"
            onClick={handleSearch}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
      {isError ? (
        <p className="error-message">Search cannot be empty.</p>
      ) : null}
    </div>
  );
};

export default Search;
