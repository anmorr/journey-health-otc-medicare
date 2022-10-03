import Typography from '@mui/material/Typography';
import * as React from 'react';
import Main from '../../layout/Main/Main';
import Container from '../Container'; 
import { Box } from '@mui/material';

// const OrderConfirmation = ({ orderNumber }) => {
const OrderConfirmation = () => {

    // console.log(orderNumber)


    return (
        <React.Fragment>
        <Main>
                <Container>
                    {/* <Box marginTop={20} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        <Typography variant="h5" gutterBottom>
                                Thank you for your order.
                        </Typography> 
                    
                    </Box> */}
                    {/* <Box marginBottom={40}  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                        }}>
                        <Typography variant="subtitle1">
                            Your order will be shipped
                            {/* Your order id is #<strong>{orderNumber.orderNumber}</strong>. We have emailed your order
                            confirmation, and will send you an update when your order has
                            shipped. 
                        </Typography>         
                    </Box> */}
            </Container>
        </Main>
        </React.Fragment>
    )
}

export default OrderConfirmation;