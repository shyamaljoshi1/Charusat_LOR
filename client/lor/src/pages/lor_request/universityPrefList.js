import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Heading,
  FormLabel,
  FormControl,
  Button,
  FormHelperText,
} from "@chakra-ui/react";
import "./universityPrefList.css";

const UniversityPrefList = ({
  onChange,
  uniPref,
  addUniversity,
  removeUniversity,
  error,
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
            University Preference List
          </Heading>
        </CardHeader>
        <CardBody
          margin={"3rem 0 4rem 6rem"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10"}
        >
          {uniPref.map((data, index) => {
            const { id, universityName, courseName, countryName, intakeDate } =
              data;
            return (
              <div
                style={{
                  display: "flex",
                  gap: "1.3rem",
                  justifyContent: "center",
                  alignContent: "center",
                }}
                key={id}
              >
                <FormControl
                  display={"flex"}
                  flexDirection={"column"}
                  flex={"1"}
                  isInvalid={!!error[index].universityName}
                >
                  <FormLabel fontSize={"1.3rem"}>University Name</FormLabel>
                  <Input
                    size={"lg"}
                    variant="outline"
                    borderColor={"#1B65A7"}
                    name="universityName"
                    type="text"
                    value={universityName}
                    onChange={(e) => onChange(index, e)}
                  ></Input>
                  <FormHelperText color={"red"}>
                    {error[index].universityName}
                  </FormHelperText>
                </FormControl>

                <FormControl
                  display={"flex"}
                  flexDirection={"column"}
                  flex={"1"}
                  isInvalid={!!error[index].courseName}
                >
                  <FormLabel fontSize={"1.3rem"}>Course Name</FormLabel>
                  <Input
                    size={"lg"}
                    variant="outline"
                    borderColor={"#1B65A7"}
                    name="courseName"
                    type="text"
                    value={courseName}
                    onChange={(e) => onChange(index, e)}
                  ></Input>
                  <FormHelperText color={"red"}>
                    {error[index].courseName}
                  </FormHelperText>
                </FormControl>

                <FormControl
                  display={"flex"}
                  flexDirection={"column"}
                  flex={"1"}
                  isInvalid={!!error[index].countryName}
                >
                  <FormLabel fontSize={"1.3rem"}>Country Name</FormLabel>
                  <Input
                    size={"lg"}
                    variant="outline"
                    borderColor={"#1B65A7"}
                    name="countryName"
                    type="text"
                    value={countryName}
                    onChange={(e) => onChange(index, e)}
                  ></Input>
                  <FormHelperText color={"red"}>
                    {error[index].countryName}
                  </FormHelperText>
                </FormControl>

                <FormControl
                  display={"flex"}
                  flexDirection={"column"}
                  flex={"1"}
                  isInvalid={!!error[index].intakeDate}
                >
                  <FormLabel fontSize={"1.3rem"}>Intake Month-Year</FormLabel>
                  <Input
                    size={"lg"}
                    variant="outline"
                    borderColor={"#1B65A7"}
                    name="intakeDate"
                    type="month"
                    value={intakeDate}
                    onChange={(e) => onChange(index, e)}
                  ></Input>
                  <FormHelperText color={"red"}>
                    {error[index].intakeDate}
                  </FormHelperText>
                </FormControl>
                <div style={{ flex: ".3" }}>
                  {uniPref.length > 1 ? (
                    <Button
                      onClick={() => removeUniversity(index)}
                      className="university-pref__remove-button"
                    >
                      Remove
                    </Button>
                  ) : (
                    <Button
                      onClick={() => removeUniversity(index)}
                      disabled={"true"}
                      className="university-pref__remove-button remove"
                    >
                      Remove
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
          <Button
            onClick={addUniversity}
            className="university-pref__add-button"
          >
            Add
          </Button>
        </CardBody>
      </Card>
    </>
  );
};
export default UniversityPrefList;
