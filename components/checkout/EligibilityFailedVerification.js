import Typography from '@mui/material/Typography';
import * as React from 'react';
import Main from '../../layout/Main/Main';
import Container from '../Container'; 
import { Box } from '@mui/material';

const EligibilityFailedVerification = ({ reason }) => {


    return (
        <React.Fragment>
        <Main>
                <Container>
                    <Box marginTop={20} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        
                        { reason === "Inactive" &&  <Typography textAlign={"center"} variant="h5" gutterBottom>
                            We have confirmed your enrollment with Medicare, but given that your <u>Medicare Part B coverage is Inactive</u>, you are not eligble for this program.
                            
                        </Typography>}
                        
                        { reason !== "Inactive" &&<Typography textAlign={"center"} variant="h5" gutterBottom>
                            Unfortunately, <u>we could not verify your enrollment with Medicare.</u>
                        </Typography>} 
                    
                    </Box>
                    <Box marginBottom={40} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                        alignItems: 'center',
                        }}>
                        <Typography textAlign={"center"} variant="subtitle1">
                            If you would like further information, please feel free to contact us via Email or Phone.
                        </Typography>         
                    </Box>
                    {/* <Box marginBottom={40}  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                        }}>
                        <Typography variant="h4">
                            The reason is {reason}.
                        </Typography>         
                    </Box> */}
            </Container>
        </Main>
        </React.Fragment>
    )
}

export default EligibilityFailedVerification;