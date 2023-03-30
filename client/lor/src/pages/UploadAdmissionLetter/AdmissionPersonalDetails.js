import {
  Card,
  CardHeader,
  Heading,
  FormLabel,
  FormControl,
  Input,
  CardBody,
} from "@chakra-ui/react";
import "./UploadAdmissionLetter.css";
const AdmissionPersonalDetails = () => {
  return (
    <>
      <Card margin={"7rem 7rem 4rem 5rem"}>
        <CardHeader>
          <Heading
            paddingLeft={"1.5rem"}
            borderLeft="4px solid #1b65a7"
            color="#1b65a7"
          >
            Personal Information
          </Heading>
        </CardHeader>
        <CardBody margin={"3rem 0 4rem 6rem"}>
          <FormControl display={"flex"}>
            <FormLabel
              margin={".4rem 0 0 3rem"}
              fontSize={"1.5rem"}
              width={"15rem"}
            >
              Student ID
            </FormLabel>
            <Input
              name="studentId"
              type="text"
              width={"25rem"}
              size={"lg"}
              variant="outline"
              borderColor={"#1B65A7"}
              fontSize={"1.4rem"}
            />
          </FormControl>
          <FormControl display={"flex"} marginTop={"2rem"}>
            <FormLabel
              margin={".4rem 0 0 3rem"}
              fontSize={"1.5rem"}
              width={"15rem"}
            >
              Student Fullname
            </FormLabel>
            <Input
              name="studentName"
              type="text"
              width={"25rem"}
              size={"lg"}
              variant="outline"
              borderColor={"#1B65A7"}
              fontSize={"1.4rem"}
            />
          </FormControl>
          <FormControl display={"flex"} marginTop={"2rem"}>
            <FormLabel
              margin={".4rem 0 0 3rem"}
              fontSize={"1.5rem"}
              width={"15rem"}
            >
              Email-ID
            </FormLabel>
            <Input
              name="emailId"
              type="email"
              width={"25rem"}
              size={"lg"}
              variant="outline"
              borderColor={"#1B65A7"}
              fontSize={"1.4rem"}
            />
          </FormControl>
          <FormControl display={"flex"} marginTop={"2rem"}>
            <FormLabel
              name="studentMobile"
              margin={".4rem 0 0 3rem"}
              fontSize={"1.5rem"}
              width={"15rem"}
            >
              Student Mobile
            </FormLabel>
            <Input
              name="studentMobile"
              type="text"
              width={"25rem"}
              size={"lg"}
              variant="outline"
              borderColor={"#1B65A7"}
              fontSize={"1.4rem"}
            />
          </FormControl>
          <FormControl display={"flex"} marginTop={"2rem"}>
            <FormLabel
              margin={".4rem 0 0 3rem"}
              fontSize={"1.5rem"}
              width={"15rem"}
            >
              Parent Mobile
            </FormLabel>
            <Input
              name="parentMobile"
              type="text"
              width={"25rem"}
              size={"lg"}
              variant="outline"
              borderColor={"#1B65A7"}
              fontSize={"1.4rem"}
            />
          </FormControl>
          <FormControl display={"flex"} marginTop={"2rem"}>
            <FormLabel
              margin={".4rem 0 0 3rem"}
              fontSize={"1.5rem"}
              width={"15rem"}
            >
              Date of Graduation
            </FormLabel>
            <Input
              name="passoutDate"
              width={"25rem"}
              size={"lg"}
              variant="outline"
              borderColor={"#1B65A7"}
              fontSize={"1.4rem"}
              type="date"
            />
          </FormControl>
        </CardBody>
      </Card>
    </>
  );
};
export default AdmissionPersonalDetails;
