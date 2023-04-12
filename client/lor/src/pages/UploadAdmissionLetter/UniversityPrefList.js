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

const UniversityPrefList = ({ onChange, uniPref, onUpload, error }) => {
  return (
    <>
      <Card margin={"4rem 7rem 5rem 5rem"}>
        <CardHeader>
          <Heading
            paddingLeft={"1.5rem"}
            borderLeft={"4px solid #1b65a7"}
            color={"#1b65a7"}
          >
            University
          </Heading>
        </CardHeader>
        <CardBody
          margin={"3rem 0 4rem 6rem"}
          display={"flex"}
          flexDirection={"column"}
          gap={"10"}
        >
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <FormControl
              display={"flex"}
              flexDirection={"column"}
              flex={"1"}
              isInvalid={!!error.universityName}
            >
              <FormLabel fontSize={"1.3rem"}>University Name</FormLabel>
              <Input
                size={"lg"}
                variant="outline"
                borderColor={"#1B65A7"}
                name="universityName"
                type="text"
                value={uniPref.universityName}
                onChange={(e) => onChange(e)}
              ></Input>
              <FormHelperText color={"red"}>
                {error.universityName}
              </FormHelperText>
            </FormControl>

            <FormControl
              display={"flex"}
              flexDirection={"column"}
              flex={"1"}
              isInvalid={!!error.courseName}
            >
              <FormLabel fontSize={"1.3rem"}>Course Name</FormLabel>
              <Input
                size={"lg"}
                variant="outline"
                borderColor={"#1B65A7"}
                name="courseName"
                type="text"
                value={uniPref.courseName}
                onChange={(e) => onChange(e)}
              ></Input>
              <FormHelperText color={"red"}>{error.courseName}</FormHelperText>
            </FormControl>

            <FormControl
              display={"flex"}
              flexDirection={"column"}
              flex={"1"}
              isInvalid={!!error.countryName}
            >
              <FormLabel fontSize={"1.3rem"}>Country Name</FormLabel>
              <Input
                size={"lg"}
                variant="outline"
                borderColor={"#1B65A7"}
                name="countryName"
                type="text"
                value={uniPref.countryName}
                onChange={(e) => onChange(e)}
              ></Input>
              <FormHelperText color={"red"}>{error.countryName}</FormHelperText>
            </FormControl>

            <FormControl
              display={"flex"}
              flexDirection={"column"}
              flex={"1"}
              isInvalid={!!error.intakeDate}
            >
              <FormLabel fontSize={"1.3rem"}>Intake Month-Year</FormLabel>
              <Input
                size={"lg"}
                variant="outline"
                borderColor={"#1B65A7"}
                name="intakeDate"
                type="month"
                value={uniPref.intakeDate}
                onChange={(e) => onChange(e)}
              ></Input>
              <FormHelperText color={"red"}>{error.intakeDate}</FormHelperText>
            </FormControl>
            <FormControl
              display={"flex"}
              flexDirection={"column"}
              flex={"1"}
              isInvalid={!!error.admissionCard}
            >
              <FormLabel fontSize={"1.3rem"}>Upload Admission Card</FormLabel>
              <Input
                size={"lg"}
                variant={"unstyled"}
                padding={".35rem 0 0 1rem"}
                name="admissionCard"
                type="file"
                onChange={(e) => onUpload(e)}
                accept=".pdf, .doc, .docx"
              ></Input>
              <FormHelperText color={"red"}>
                {error.admissionCard}
              </FormHelperText>
            </FormControl>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
export default UniversityPrefList;
