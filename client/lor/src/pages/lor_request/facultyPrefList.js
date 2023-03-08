import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import "./facultyPrefList.css";
const FacultyPrefList = ({
  onChange,
  facPref,
  onUpload,
  addFaculty,
  removeFaculty,
}) => {
  return (
    <>
      <Card margin={"4rem 7rem 5rem 5rem"}>
        <CardHeader>
          <Heading
            paddingLeft={"1.5rem"}
            borderLeft={"4px solid #1b65a7"}
            color={"#1b65a7"}
          >
            Faculty Preference List
          </Heading>
        </CardHeader>
        <CardBody
          margin={"3rem 0 4rem 6rem"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10"}
        >
          {facPref.map((data, index) => {
            const { facutltyName, facultyEmail, facultyPrefLor } = data;
            return (
              <div
                style={{
                  display: "flex",
                  gap: "1.3rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={index}
              >
                <FormControl
                  display={"flex"}
                  flexDirection={"column"}
                  flex={"1"}
                >
                  <FormLabel fontSize={"1.3rem"}>Faculty Name</FormLabel>
                  <Input
                    size={"lg"}
                    variant={"outline"}
                    borderColor={"#1b65a7"}
                    name="facultyName"
                    type="text"
                    value={facutltyName}
                    onChange={(e) => onChange(index, e)}
                  ></Input>
                </FormControl>

                <FormControl
                  display={"flex"}
                  flexDirection={"column"}
                  flex={"1"}
                >
                  <FormLabel fontSize={"1.3rem"}>Faculty Email ID</FormLabel>
                  <Input
                    size={"lg"}
                    variant={"outline"}
                    borderColor={"#1b65a7"}
                    name="facultyEmail"
                    type="text"
                    value={facultyEmail}
                    onChange={(e) => onChange(index, e)}
                  ></Input>
                </FormControl>

                <FormControl
                  display={"flex"}
                  flexDirection={"column"}
                  flex={"1"}
                >
                  <FormLabel fontSize={"1.3rem"}>Upload LOR</FormLabel>
                  <Input
                    size={"lg"}
                    variant={"unstyled"}
                    padding={".35rem 0 0 1rem"}
                    name="facultyPrefLor"
                    type="file"
                    onChange={(e) => onUpload(index, e)}
                  ></Input>
                </FormControl>
                <div style={{ flex: "1" }}>
                  {facPref.length > 1 ? (
                    <Button
                      className="faculty-pref__remove-button"
                      onClick={() => removeFaculty(index)}
                    >
                      Remove
                    </Button>
                  ) : (
                    <Button
                      className="faculty-pref__remove-button"
                      isDisabled={"true"}
                      onClick={() => removeFaculty(index)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              </div>
            );
          })}

          <Button className="faculty-pref__add-button" onClick={addFaculty}>
            Add
          </Button>
        </CardBody>
      </Card>
    </>
  );
};
export default FacultyPrefList;
