import { Card, CardHeader, CardBody,Input, Heading,Radio,Stack, RadioGroup,FormLabel,FormControl} from '@chakra-ui/react'
// import { useState } from 'react';


const PlacementInfo = ({onChange,cdpc}) =>{
    // const[cdpc,checkCdpc]=useState(false);

    return(
        <Card margin={"4rem 7rem 5rem 5rem"}>
            <CardHeader>
                <Heading
                paddingLeft={"1.5rem"}
                borderLeft="4px solid #1B65A7"
                color="#1B65A7"
                >
                    Placement Information
                </Heading>
            </CardHeader>
            <CardBody margin={"3rem 0 4rem 6rem"}>
            <FormControl 
                display={"flex"} flexDirection={"column"}
                >
                    <FormLabel margin={".4rem 0 0 3rem"} fontSize={"1.5rem"} >
                        Place through CDPC, CHARUSAT
                    </FormLabel>
                    <RadioGroup defaultValue='2' margin={"1rem 0rem 0rem 3rem"} >
                    <Stack spacing={5} direction='column'>
                        <Stack spacing={5} direction='row'>
                            <Radio colorScheme='blue' onChange={onChange} name="placeThroughCdpc" value='true' size={"lg"}  >
                            Yes
                            </Radio>
                            <Radio colorScheme='blue' onChange={onChange} name="placeThroughCdpc" value='false' size={"lg"}  >
                            No
                            </Radio>
                        </Stack>
                            {cdpc && 
                            
                            
                            <FormControl 
                            display={"flex"}
                            >
                                <FormLabel margin={".4rem 0 0 0"} fontSize={"1.5rem"} width={"15rem"}>
                                    Company name
                                </FormLabel>
                                <Input  name="companyName" onChange={onChange} type="text" width={"25rem"} size={"lg"} variant="outline" borderColor={"#1B65A7"} fontSize={"1.4rem"} />
                            </FormControl>
                            }
                            
                    </Stack>    
                    </RadioGroup>
                    <FormLabel margin={"4rem 0 0 3rem"} fontSize={"1.5rem"} >
                        Bond period completed
                    </FormLabel>
                    <RadioGroup defaultValue='2' margin={"1rem 0rem 0rem 3rem"} >
                        <Stack spacing={5} direction='row'>
                            <Radio colorScheme='blue' onChange={onChange}  name="bondCompleted" value='true' size={"lg"} >
                            Yes
                            </Radio>
                            <Radio colorScheme='blue' onChange={onChange} name="bondCompleted" value='false' size={"lg"} >
                            No
                            </Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>
            </CardBody>
        </Card>
    )
}

export default PlacementInfo;