// import Personal from '../../components/lor_request_components/personalInfo';
import './lor_request.css';
import { Input } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const LorRequest = () =>{
    return(
        <div className="Lor__container">
            <div className='form__Container'>
                <form action="post">
                <Card>
                    <div className="personalinfo_container">
                        <h1>Personal Information :</h1>
                        <div className="controls">
                            <h3 style={{fontSize:'1.5rem'}}>Student Id</h3>
                            <Input  borderColor='#040615' size='lg' opacity='1' margin='-.4rem 0 0 2rem' width='18rem' color='#000' _placeholder={{ opacity: 2, color: '#000'}} required/>
                        </div>
                        
                    </div>
                </Card>
                </form>
            </div>
        </div>
    )
}

export default LorRequest;