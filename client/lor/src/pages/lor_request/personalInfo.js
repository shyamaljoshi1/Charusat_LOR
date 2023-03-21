import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Input,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";

const PersonalInfo = ({ onChange, error }) => {
  return (
    <Card margin={"7rem 7rem 4rem 5rem"}>
      <CardHeader>
        <Heading
          paddingLeft={"1.5rem"}
          borderLeft="4px solid #1B65A7"
          color="#1B65A7"
        >
          Personal Information
        </Heading>
      </CardHeader>
      <CardBody margin={"3rem 0 4rem 6rem"}>
        <FormControl display={"flex"} isInvalid={!!error.studentId}>
          <FormLabel
            margin={".4rem 0 0 3rem"}
            fontSize={"1.5rem"}
            width={"15rem"}
          >
            Student ID
          </FormLabel>
          <Input
            onChange={onChange}
            name="studentId"
            type="text"
            width={"25rem"}
            size={"lg"}
            variant="outline"
            borderColor={"#1B65A7"}
            fontSize={"1.4rem"}
          />
          <FormHelperText color="red" margin=".7rem 1rem">
            {error.studentId}
          </FormHelperText>
        </FormControl>
        <FormControl
          display={"flex"}
          marginTop={"2rem"}
          isInvalid={!!error.studentName}
        >
          <FormLabel
            margin={".4rem 0 0 3rem"}
            fontSize={"1.5rem"}
            width={"15rem"}
          >
            Student Fullname
          </FormLabel>
          <Input
            onChange={onChange}
            name="studentName"
            type="text"
            width={"25rem"}
            size={"lg"}
            variant="outline"
            borderColor={"#1B65A7"}
            fontSize={"1.4rem"}
          />
          <FormHelperText color="red" margin=".7rem 1rem">
            {error.studentName}
          </FormHelperText>
        </FormControl>
        <FormControl
          display={"flex"}
          marginTop={"2rem"}
          isInvalid={!!error.emailId}
        >
          <FormLabel
            margin={".4rem 0 0 3rem"}
            fontSize={"1.5rem"}
            width={"15rem"}
          >
            Email-ID
          </FormLabel>
          <Input
            onChange={onChange}
            name="emailId"
            type="email"
            width={"25rem"}
            size={"lg"}
            variant="outline"
            borderColor={"#1B65A7"}
            fontSize={"1.4rem"}
          />
          <FormHelperText color="red" margin=".7rem 1rem">
            {error.emailId}
          </FormHelperText>
        </FormControl>
        <FormControl
          display={"flex"}
          marginTop={"2rem"}
          isInvalid={!!error.studentMobile}
        >
          <FormLabel
            name="studentMobile"
            margin={".4rem 0 0 3rem"}
            fontSize={"1.5rem"}
            width={"15rem"}
          >
            Student Mobile
          </FormLabel>
          <Input
            onChange={onChange}
            name="studentMobile"
            type="text"
            width={"25rem"}
            size={"lg"}
            variant="outline"
            borderColor={"#1B65A7"}
            fontSize={"1.4rem"}
          />
          <FormHelperText color="red" margin=".7rem 1rem">
            {error.studentMobile}
          </FormHelperText>
        </FormControl>
        <FormControl
          display={"flex"}
          marginTop={"2rem"}
          isInvalid={!!error.parentMobile}
        >
          <FormLabel
            margin={".4rem 0 0 3rem"}
            fontSize={"1.5rem"}
            width={"15rem"}
          >
            Parent Mobile
          </FormLabel>
          <Input
            onChange={onChange}
            name="parentMobile"
            type="text"
            width={"25rem"}
            size={"lg"}
            variant="outline"
            borderColor={"#1B65A7"}
            fontSize={"1.4rem"}
          />
          <FormHelperText color="red" margin=".7rem 1rem">
            {error.parentMobile}
          </FormHelperText>
        </FormControl>
        <FormControl
          display={"flex"}
          marginTop={"2rem"}
          isInvalid={!!error.passoutDate}
        >
          <FormLabel
            margin={".4rem 0 0 3rem"}
            fontSize={"1.5rem"}
            width={"15rem"}
          >
            Date of Graduation
          </FormLabel>
          <Input
            onChange={onChange}
            name="passoutDate"
            width={"25rem"}
            size={"lg"}
            variant="outline"
            borderColor={"#1B65A7"}
            fontSize={"1.4rem"}
            type="date"
          />
          <FormHelperText color="red" margin=".7rem 1rem">
            {error.passoutDate}
          </FormHelperText>
        </FormControl>
      </CardBody>
    </Card>
  );
};

export default PersonalInfo;
