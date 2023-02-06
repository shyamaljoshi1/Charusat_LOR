import { Card, CardHeader, CardBody,Input, Heading,Radio,Stack, RadioGroup,FormLabel,FormControl} from '@chakra-ui/react'
import { useState } from 'react';


const PlacementInfo = () =>{
    const[cdpc,checkCdpc]=useState(false);

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
                        <Stack spacing={5} direction='row'>
                            <Radio colorScheme='blue' value='yes' size={"lg"}  onChange={()=>checkCdpc(true)}>
                            Yes
                            </Radio>
                            <Radio colorScheme='blue' value='no' size={"lg"}  onChange={()=>checkCdpc(false)}>
                            No
                            </Radio>
                            {cdpc && <Input  name="studentId" type="text" width={"25rem"} size={"lg"} variant="outline" borderColor={"#1B65A7"} fontSize={"1.4rem"} />}
                            
                        </Stack>
                    </RadioGroup>
                </FormControl>
            </CardBody>
        </Card>
    )
}

export default PlacementInfo;