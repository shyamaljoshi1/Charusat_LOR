import {useState,useRef,useEffect} from "react";
import "./search.css";
import axios from "axios"
import { Button, Card, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import UniversityCard from "../../components/university_card/universityCard";

const Search = () => {
  const searchRef = useRef("");

  const [data,SetData]=useState([]);
  const [isError, setIsError] = useState(false);
  const handleSearch = async() => {
    setIsError(false);
    if (searchRef.current.value === "") {
      setIsError(true);
      return;
    } else {
      console.log(searchRef.current.value.toLowerCase());
      const newCountry=searchRef.current.value;
      axios.get(`http://localhost:3001/api/v1/search/${newCountry}`).then((result)=>{
        SetData(result.data);
      })
    }
  };

  // console.log(data.length);
  return (
    <>
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
      <div className="card">
        {data.length===0 ? (<div style={{color:"red",textAlign:"center",fontSize:"2.5rem"}}>
          No Entry Found
        </div>): (data.map((e,index)=>{
          return(
            <UniversityCard key={index} data={e}/>
          )
        })) }
      </div>
      
    </>
    
  );
};

export default Search;
