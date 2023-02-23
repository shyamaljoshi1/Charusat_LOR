import { Card, CardBody, CardHeader, FormControl, FormLabel, Heading, RadioGroup, Radio, Stack, Input } from "@chakra-ui/react";
const CompiExamDetail = ({ onChange, compiExam }) => {
    return (
        <Card margin={"7rem 7rem 4rem 5rem"}>
            <CardHeader>
                <Heading paddingLeft='1.5rem' borderLeft='4px solid #1B65A7' color='#1B65A7'>
                    Compititive Exam Details
                </Heading>
            </CardHeader>
            <CardBody margin={'3rem 0 4rem 6rem'}>
                <FormControl display={'flex'} flexDirection='column'>
                    <FormLabel margin={".4rem 0 0 3rem"} fontSize={'1.5rem'}>
                        Given any compititive Exam?
                    </FormLabel>
                    <RadioGroup defaultValue="2" margin={'1rem 0 0 3rem'}>
                        <Stack spacing={5} direction='row'>
                            <Radio onChange={onChange} colorScheme='blue' name="compiExam" value='true' size={"lg"}  >
                                Yes
                            </Radio>
                            <Radio onChange={onChange} colorScheme='blue' name="compiExam" value='false' size={"lg"}  >
                                No
                            </Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                {compiExam &&
                    <div>
                        <FormControl margin={'2rem 0 2rem 0'} display={'grid'} gridTemplateColumns={'125px .5fr 1fr'}>
                            <FormLabel margin={".4rem 0 0 3rem"} fontSize={'1.3rem'} color={'black'}>GRE Score</FormLabel>
                            <Input name='greSc' type={'number'} size='md' width={'auto'} borderColor={"#1B65A7"} fontSize={"1.2rem"} margin={'0 0 0 3rem'}></Input>
                            <Input name='gre' variant='unstyled' type={'file'} padding={'0.2rem 0 0 2rem'} size='lg' width={'auto'}></Input>
                        </FormControl>

                        <FormControl margin={'2rem 0 2rem 0'} display={'grid'} gridTemplateColumns={'125px .5fr 1fr'}>
                            <FormLabel margin={".4rem 0 0 3rem"} fontSize={'1.3rem'} color={'black'}>IELTS Score</FormLabel>
                            <Input name='ieltsSc' type={'number'} size='md' width={'auto'} borderColor={"#1B65A7"} fontSize={"1.2rem"} margin={'0 0 0 3rem'}></Input>
                            <Input name='ielts' variant='unstyled' type={'file'} padding={'0.2rem 0 0 2rem'} size='lg' width={'auto'}></Input>
                        </FormControl>

                        <FormControl margin={'2rem 0 2rem 0'} display={'grid'} gridTemplateColumns={'125px .5fr 1fr'}>
                            <FormLabel margin={".4rem 0 0 3rem"} fontSize={'1.3rem'} color={'black'}>TOEFL Score</FormLabel>
                            <Input name='toeflSc' type={'number'} size='md' width={'auto'} borderColor={"#1B65A7"} fontSize={"1.2rem"} margin={'0 0 0 3rem'}></Input>
                            <Input name='toefl' variant='unstyled' type={'file'} padding={'0.2rem 0 0 2rem'} size='lg' width={'auto'}></Input>
                        </FormControl>

                        <FormControl margin={'2rem 0 2rem 0'} display={'grid'} gridTemplateColumns={'125px .5fr 1fr'}>
                            <FormLabel margin={".4rem 0 0 3rem"} fontSize={'1.3rem'} color={'black'}>GMAT Score</FormLabel>
                            <Input name='gmatSc' type={'number'} size='md' width={'auto'} borderColor={"#1B65A7"} fontSize={"1.2rem"} margin={'0 0 0 3rem'}></Input>
                            <Input name='gmat' variant='unstyled' type={'file'} padding={'0.2rem 0 0 2rem'} size='lg' width={'auto'}></Input>
                        </FormControl>

                        <FormControl margin={'2rem 0 2rem 0'} display={'grid'} gridTemplateColumns={'125px .5fr 1fr'}>
                            <FormLabel margin={".4rem 0 0 3rem"} fontSize={'1.3rem'} color={'black'}>GATE Score</FormLabel>
                            <Input name='gateSc' type={'number'} size='md' width={'auto'} borderColor={"#1B65A7"} fontSize={"1.2rem"} margin={'0 0 0 3rem'}></Input>
                            <Input name='gate' variant='unstyled' type={'file'} padding={'0.2rem 0 0 2rem'} size='lg' width={'auto'}></Input>
                        </FormControl>

                        <FormControl margin={'2rem 0 2rem 0'} display={'grid'} gridTemplateColumns={'125px .5fr 1fr'}>
                            <FormLabel margin={".4rem 0 0 3rem"} fontSize={'1.3rem'} color={'black'}>Other Score</FormLabel>
                            <Input name='otherSc' type={'number'} size='md' width={'auto'} borderColor={"#1B65A7"} fontSize={"1.2rem"} margin={'0 0 0 3rem'}></Input>
                            <Input name='other' variant='unstyled' type={'file'} padding={'0.2rem 0 0 2rem'} size='lg' width={'auto'}></Input>
                        </FormControl>
                    </div>
                }
            </CardBody>
        </Card>
    );
}
export default CompiExamDetail;