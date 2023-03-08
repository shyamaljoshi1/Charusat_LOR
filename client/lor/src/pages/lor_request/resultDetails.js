import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Input,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";

const ResultDetails = ({ onChange, error }) => {
  return (
    <Card margin={"4rem 7rem 5rem 5rem"}>
      <CardHeader>
        <Heading
          paddingLeft={"1.5rem"}
          borderLeft="4px solid #1B65A7"
          color="#1B65A7"
        >
          Result Details
        </Heading>
      </CardHeader>
      <CardBody margin={"3rem 0 4rem 6rem"}>
        <FormControl>
          <table width={"100%"}>
            <tbody>
              <tr
                style={{
                  display: "flex",
                  marginBottom: "1rem",
                  alignItems: "center",
                }}
              >
                <td
                  style={{ flex: ".5", fontSize: "1.3rem", maxWidth: "6rem" }}
                >
                  Semester
                </td>
                <td
                  style={{ flex: "1", textAlign: "center", fontSize: "1.3rem" }}
                >
                  1<sup>st</sup>Sem
                </td>
                <td
                  style={{ flex: "1", textAlign: "center", fontSize: "1.3rem" }}
                >
                  2<sup>nd</sup>Sem
                </td>
                <td
                  style={{ flex: "1", textAlign: "center", fontSize: "1.3rem" }}
                >
                  3<sup>rd</sup>Sem
                </td>
                <td
                  style={{ flex: "1", textAlign: "center", fontSize: "1.3rem" }}
                >
                  4<sup>th</sup>Sem
                </td>
                <td
                  style={{ flex: "1", textAlign: "center", fontSize: "1.3rem" }}
                >
                  5<sup>th</sup>Sem
                </td>
                <td
                  style={{ flex: "1", textAlign: "center", fontSize: "1.3rem" }}
                >
                  6<sup>th</sup>Sem
                </td>
                <td
                  style={{ flex: "1", textAlign: "center", fontSize: "1.3rem" }}
                >
                  7<sup>th</sup>Sem
                </td>
                <td
                  style={{ flex: "1", textAlign: "center", fontSize: "1.3rem" }}
                >
                  8<sup>th</sup>Sem
                </td>
              </tr>
              <tr
                style={{
                  display: "flex",
                  marginBottom: "1rem",
                  alignItems: "center",
                }}
              >
                <td
                  style={{ flex: ".5", fontSize: "1.1rem", maxWidth: "6rem" }}
                >
                  Attendence(in%)
                </td>
                <td style={{ flex: "1" }}>
                  <FormControl>
                    <Input
                      onChange={onChange}
                      name="firstSAtt"
                      type="number"
                      variant="outline"
                      borderColor={"#1B65A7"}
                      size="md"
                      width={"11rem"}
                    />
                  </FormControl>
                </td>
                <td style={{ flex: "1" }}>
                  <FormControl>
                    <Input
                      onChange={onChange}
                      name="secondSAtt"
                      type="number"
                      variant="outline"
                      borderColor={"#1B65A7"}
                      size="md"
                      width={"11rem"}
                    />
                  </FormControl>
                </td>
                <td style={{ flex: "1" }}>
                  <FormControl>
                    <Input
                      onChange={onChange}
                      name="thirdSAtt"
                      type="number"
                      variant="outline"
                      borderColor={"#1B65A7"}
                      size="md"
                      width={"11rem"}
                    />
                  </FormControl>
                </td>
                <td style={{ flex: "1" }}>
                  <FormControl>
                    <Input
                      onChange={onChange}
                      name="forthSAtt"
                      type="number"
                      variant="outline"
                      borderColor={"#1B65A7"}
                      size="md"
                      width={"11rem"}
                    />
                  </FormControl>
                </td>
                <td style={{ flex: "1" }}>
                  <FormControl>
                    <Input
                      onChange={onChange}
                      name="fifthSAtt"
                      type="number"
                      variant="outline"
                      borderColor={"#1B65A7"}
                      size="md"
                      width={"11rem"}
                    />
                  </FormControl>
                </td>
                <td style={{ flex: "1" }}>
                  <FormControl>
                    <Input
                      onChange={onChange}
                      name="sixthSAtt"
                      type="number"
                      variant="outline"
                      borderColor={"#1B65A7"}
                      size="md"
                      width={"11rem"}
                    />
                  </FormControl>
                </td>
                <td style={{ flex: "1" }}>
                  <FormControl>
                    <Input
                      onChange={onChange}
                      name="seventhSAtt"
                      type="number"
                      variant="outline"
                      borderColor={"#1B65A7"}
                      size="md"
                      width={"11rem"}
                    />
                  </FormControl>
                </td>
                <td style={{ flex: "1" }}>
                  <FormControl>
                    <Input
                      onChange={onChange}
                      name="eightthSAtt"
                      type="number"
                      variant="outline"
                      borderColor={"#1B65A7"}
                      size="md"
                      width={"11rem"}
                    />
                  </FormControl>
                </td>
              </tr>
              <tr style={{ display: "flex", alignItems: "center" }}>
                <td
                  style={{ flex: ".5", fontSize: "1.1rem", maxWidth: "6rem" }}
                >
                  CGPA
                </td>
                <td style={{ flex: "1" }}>
                  <FormControl>
                    <Input
                      onChange={onChange}
                      name="firstSCG"
                      type="number"
                      variant="outline"
                      borderColor={"#1B65A7"}
                      size="md"
                      width={"11rem"}
                    />
                  </FormControl>
                </td>
                <td style={{ flex: "1" }}>
                  <FormControl>
                    <Input
                      onChange={onChange}
                      name="secondSCG"
                      type="number"
                      variant="outline"
                      borderColor={"#1B65A7"}
                      size="md"
                      width={"11rem"}
                    />
                  </FormControl>
                </td>
                <td style={{ flex: "1" }}>
                  <FormControl>
                    <Input
                      onChange={onChange}
                      name="thirdSCG"
                      type="number"
                      variant="outline"
                      borderColor={"#1B65A7"}
                      size="md"
                      width={"11rem"}
                    />
                  </FormControl>
                </td>
                <td style={{ flex: "1" }}>
                  <FormControl>
                    <Input
                      onChange={onChange}
                      name="forthSCG"
                      type="number"
                      variant="outline"
                      borderColor={"#1B65A7"}
                      size="md"
                      width={"11rem"}
                    />
                  </FormControl>
                </td>
                <td style={{ flex: "1" }}>
                  <FormControl>
                    <Input
                      onChange={onChange}
                      name="fifthSCG"
                      type="number"
                      variant="outline"
                      borderColor={"#1B65A7"}
                      size="md"
                      width={"11rem"}
                    />
                  </FormControl>
                </td>
                <td style={{ flex: "1" }}>
                  <FormControl>
                    <Input
                      onChange={onChange}
                      name="sixthSCG"
                      type="number"
                      variant="outline"
                      borderColor={"#1B65A7"}
                      size="md"
                      width={"11rem"}
                    />
                  </FormControl>
                </td>
                <td style={{ flex: "1" }}>
                  <FormControl>
                    <Input
                      onChange={onChange}
                      name="seventhSCG"
                      type="number"
                      variant="outline"
                      borderColor={"#1B65A7"}
                      size="md"
                      width={"11rem"}
                    />
                  </FormControl>
                </td>
                <td style={{ flex: "1" }}>
                  <FormControl>
                    <Input
                      onChange={onChange}
                      name="eightthSCG"
                      type="number"
                      variant="outline"
                      borderColor={"#1B65A7"}
                      size="md"
                      width={"11rem"}
                    />
                  </FormControl>
                </td>
              </tr>
            </tbody>
          </table>
          <FormHelperText color={"red"} margin={"2rem 0 0 0"}>
            {error.res}
          </FormHelperText>
        </FormControl>
      </CardBody>
    </Card>
  );
};
export default ResultDetails;
