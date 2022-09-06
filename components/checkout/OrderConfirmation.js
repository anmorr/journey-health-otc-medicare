import Typography from '@mui/material/Typography';
import * as React from 'react';

const OrderConfirmation = ({ orderNumber }) => {


    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
            Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
            Your order id is #<strong>{orderNumber}</strong>. We have emailed your order
            confirmation, and will send you an update when your order has
            shipped.
            </Typography>
        </React.Fragment>
    )
}

export default OrderConfirmation;