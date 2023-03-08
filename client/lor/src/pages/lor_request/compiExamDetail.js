import {
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  RadioGroup,
  Radio,
  Stack,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
const CompiExamDetail = ({ onChange, compiExam, onUpload, error }) => {
  return (
    <Card margin={"7rem 7rem 4rem 5rem"}>
      <CardHeader>
        <Heading
          paddingLeft="1.5rem"
          borderLeft="4px solid #1B65A7"
          color="#1B65A7"
        >
          Compititive Exam Details
        </Heading>
      </CardHeader>
      <CardBody margin={"3rem 0 4rem 6rem"}>
        <FormControl display={"flex"} flexDirection="column">
          <FormLabel margin={".4rem 0 0 3rem"} fontSize={"1.5rem"}>
            Given any compititive Exam?
          </FormLabel>
          <RadioGroup defaultValue="2" margin={"1rem 0 0 3rem"}>
            <Stack spacing={5} direction="row">
              <Radio
                onChange={onChange}
                colorScheme="blue"
                name="compiExam"
                value="true"
                size={"lg"}
              >
                Yes
              </Radio>
              <Radio
                onChange={onChange}
                colorScheme="blue"
                name="compiExam"
                value="false"
                size={"lg"}
              >
                No
              </Radio>
            </Stack>
          </RadioGroup>
          <FormHelperText color="red" margin={"1rem 0 0 3rem"}>
            {error.compiExam}
          </FormHelperText>
        </FormControl>

        {compiExam && (
          <div>
            <FormControl
              margin={"2rem 0 2rem 0"}
              display={"flex"}
              isInvalid={!!error.gre}
            >
              <FormLabel
                width={"95px"}
                margin={".4rem 0 0 3rem"}
                fontSize={"1.3rem"}
                color={"black"}
              >
                GRE Score
              </FormLabel>
              <Input
                zIndex={"100"}
                flex={"1"}
                onChange={onChange}
                name="greSc"
                type={"number"}
                size="md"
                width={"auto"}
                borderColor={"#1B65A7"}
                fontSize={"1.2rem"}
                margin={"0 0 0 3rem"}
              ></Input>
              <Input
                flex={"1"}
                onChange={onUpload}
                name="gre"
                variant="unstyled"
                type={"file"}
                padding={"0.2rem 0 0 2rem"}
                size="lg"
                width={"auto"}
              ></Input>
              <FormHelperText flex={"1"} color="red" margin=".4rem 0 0 0">
                {error.gre}
              </FormHelperText>
            </FormControl>

            <FormControl
              margin={"2rem 0 2rem 0"}
              display={"flex"}
              isInvalid={!!error.ielts}
            >
              <FormLabel
                width={"95px"}
                margin={".4rem 0 0 3rem"}
                fontSize={"1.3rem"}
                color={"black"}
              >
                IELTS Score
              </FormLabel>
              <Input
                zIndex={"100"}
                flex={"1"}
                onChange={onChange}
                name="ieltsSc"
                type={"number"}
                size="md"
                width={"auto"}
                borderColor={"#1B65A7"}
                fontSize={"1.2rem"}
                margin={"0 0 0 3rem"}
              ></Input>
              <Input
                flex={"1"}
                onChange={onUpload}
                name="ielts"
                variant="unstyled"
                type={"file"}
                padding={"0.2rem 0 0 2rem"}
                size="lg"
                width={"auto"}
              ></Input>
              <FormHelperText flex={"1"} color="red" margin=".4rem 0 0 0">
                {error.ielts}
              </FormHelperText>
            </FormControl>

            <FormControl
              margin={"2rem 0 2rem 0"}
              display={"flex"}
              isInvalid={!!error.toefl}
            >
              <FormLabel
                width={"95px"}
                margin={".4rem 0 0 3rem"}
                fontSize={"1.3rem"}
                color={"black"}
              >
                TOEFL Score
              </FormLabel>
              <Input
                zIndex={"100"}
                flex={"1"}
                onChange={onChange}
                name="toeflSc"
                type={"number"}
                size="md"
                width={"auto"}
                borderColor={"#1B65A7"}
                fontSize={"1.2rem"}
                margin={"0 0 0 3rem"}
              ></Input>
              <Input
                flex={"1"}
                onChange={onUpload}
                name="toefl"
                variant="unstyled"
                type={"file"}
                padding={"0.2rem 0 0 2rem"}
                size="lg"
                width={"auto"}
              ></Input>
              <FormHelperText flex={"1"} color="red" margin=".4rem 0 0 0">
                {error.toefl}
              </FormHelperText>
            </FormControl>

            <FormControl
              margin={"2rem 0 2rem 0"}
              display={"flex"}
              isInvalid={!!error.gmat}
            >
              <FormLabel
                width={"95px"}
                margin={".4rem 0 0 3rem"}
                fontSize={"1.3rem"}
                color={"black"}
              >
                GMAT Score
              </FormLabel>
              <Input
                zIndex={"100"}
                flex={"1"}
                onChange={onChange}
                name="gmatSc"
                type={"number"}
                size="md"
                width={"auto"}
                borderColor={"#1B65A7"}
                fontSize={"1.2rem"}
                margin={"0 0 0 3rem"}
              ></Input>
              <Input
                flex={"1"}
                onChange={onUpload}
                name="gmat"
                variant="unstyled"
                type={"file"}
                padding={"0.2rem 0 0 2rem"}
                size="lg"
                width={"auto"}
              ></Input>
              <FormHelperText flex={"1"} color="red" margin=".4rem 0 0 0">
                {error.gmat}
              </FormHelperText>
            </FormControl>

            <FormControl
              margin={"2rem 0 2rem 0"}
              display={"flex"}
              isInvalid={!!error.gate}
            >
              <FormLabel
                width={"95px"}
                margin={".4rem 0 0 3rem"}
                fontSize={"1.3rem"}
                color={"black"}
              >
                GATE Score
              </FormLabel>
              <Input
                zIndex={"100"}
                flex={"1"}
                onChange={onChange}
                name="gateSc"
                type={"number"}
                size="md"
                width={"auto"}
                borderColor={"#1B65A7"}
                fontSize={"1.2rem"}
                margin={"0 0 0 3rem"}
              ></Input>
              <Input
                flex={"1"}
                onChange={onUpload}
                name="gate"
                variant="unstyled"
                type={"file"}
                padding={"0.2rem 0 0 2rem"}
                size="lg"
                width={"auto"}
              ></Input>
              <FormHelperText flex={"1"} color="red" margin=".4rem 0 0 0">
                {error.gate}
              </FormHelperText>
            </FormControl>

            <FormControl
              margin={"2rem 0 2rem 0"}
              display={"flex"}
              isInvalid={!!error.other}
            >
              <FormLabel
                width={"95px"}
                margin={".4rem 0 0 3rem"}
                fontSize={"1.3rem"}
                color={"black"}
              >
                Other Score
              </FormLabel>
              <Input
                zIndex={"100"}
                flex={"1"}
                onChange={onChange}
                name="otherSc"
                type={"number"}
                size="md"
                width={"auto"}
                borderColor={"#1B65A7"}
                fontSize={"1.2rem"}
                margin={"0 0 0 3rem"}
              ></Input>
              <Input
                onChange={onUpload}
                flex={"1"}
                name="other"
                variant="unstyled"
                type={"file"}
                padding={"0.2rem 0 0 2rem"}
                size="lg"
                width={"auto"}
              ></Input>
              <FormHelperText flex={"1"} color="red" margin=".4rem 0 0 0">
                {error.other}
              </FormHelperText>
            </FormControl>
          </div>
        )}
      </CardBody>
    </Card>
  );
};
export default CompiExamDetail;
