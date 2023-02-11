import { Card, CardHeader, CardBody,Input, Heading,FormLabel,FormControl} from '@chakra-ui/react'


const LorLetter=({onChange})=>{
    return(
        <Card margin={"4rem 7rem 5rem 5rem"}>
            <CardHeader>
                <Heading
                paddingLeft={"1.5rem"}
                borderLeft="4px solid #1B65A7"
                color="#1B65A7"
                >
                    Letter head for LOR
                </Heading>
            </CardHeader>
            <CardBody margin={"3rem 0 4rem 6rem"}>
                <FormControl display={"flex"}>
                    <FormLabel margin={".4rem 0 0 0"} fontSize={"1.5rem"} width={"15rem"}>
                        Number of LOR you required
                    </FormLabel>
                    <Input  name="noOfLetterhead" onChange={onChange} type="number" width={"25rem"} size={"lg"} variant="outline" borderColor={"#1B65A7"} fontSize={"1.4rem"} />
                </FormControl>
            </CardBody>
        </Card>
    )
}

export default LorLetter;