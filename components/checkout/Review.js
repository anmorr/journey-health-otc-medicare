import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import MuiAlert from '@mui/material/Alert';

const products = [
  {
    name: 'COVID-19 Antigen Test Kit x 8',
    desc: 'COVID-19 Self-test Kit',
    price: '$0.00',
  },
 
  { name: 'Shipping', desc: '', price: 'Free' },
];

// const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Medicare'},
  // { name: 'Card holder', detail: 'Mr John Smith' },
  // { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  // { name: 'Expiry date', detail: '04/2024' },
];

export default function Review({ addressAttributes, medicareAttributes, handleBack, handleNext, activeStep, setActiveStep, setOrderNumber, setIsLoading, isLoading, alertSuccessOpen, setSuccessAlertOpen }) {
  
  const formAttributes = { ...addressAttributes, ...medicareAttributes }
  
  // console.log("formAttributes: ", formAttributes)

  

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleAlertClose = (event) => {
    setSuccessAlertOpen(false);
  }

  

  
  
  const url = "https://hyql0rc1o6.execute-api.us-west-1.amazonaws.com/Prod"

  const placeOrderHandler = (event) => {

    setIsLoading(true)

    axios.post(`${url}/orders`,
      {
        ...addressAttributes, ...medicareAttributes
      })
      .then(function (response) {
        if (response.data.orderId) {
          setOrderNumber(response.data.orderId)
        } else {
          throw new Error("Order Creation Failed. Please try again.")
        }
        setIsLoading(false)
        setSuccessAlertOpen(false);
        handleNext();
      }).catch(function (error) {
        console.log("error: ", error)
        setIsLoading(false)
      })
  }
  // console.log("alertSuccessOpen: ", alertSuccessOpen)

  return (
    <React.Fragment>
      {!isLoading && <Box>
        {alertSuccessOpen && <Grid item xs={12} md={12}>
          <Box paddingBottom={5}>
              <Alert onClose={handleAlertClose} severity="success">Great News! Your eligibility has been verified.</Alert>
          </Box>
        </Grid>}
      <Typography variant="h6" gutterBottom>
        <strong>Order summary</strong>
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $0.00
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            <strong>Shipping</strong>
          </Typography>
          <Typography gutterBottom>{medicareAttributes.memberFirstName + " " + medicareAttributes.memberLastName}</Typography>
          <Typography gutterBottom>
            {medicareAttributes.memberAddress1 ? medicareAttributes.memberAddress1 : addressAttributes.address1}</Typography>
          {(medicareAttributes.memberAddress2 || addressAttributes.address2) && <Typography gutterBottom>{medicareAttributes.memberAddress2 ? medicareAttributes.memberAddress2 : addressAttributes.address2}</Typography>}
          <Typography gutterBottom>
            {medicareAttributes.memberCity ? medicareAttributes.memberCity : addressAttributes.city + ", "}
            {medicareAttributes.memberState ? medicareAttributes.memberState : addressAttributes.state + " "}
            {medicareAttributes.memberZip ? medicareAttributes.memberZip : addressAttributes.zip}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            <strong>Payment details</strong>
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {activeStep !== 0 && (
            <Button onClick={handleBack} sx={{
              mt: 3,
              ml: 1,
              color: "#1D4E78"
            }}>
            Back
          </Button>
        )}

        {/* {<Button
                    // disabled={(activeStep === 0 && (Object.keys(addressErrors).length > 0))}
                    variant="contained"
                    onClick={formik.handleSubmit}
                    sx={{ mt: 3, ml: 1 }}
                >
                    {'Next'}
                                      </Button>} */}
        {<Button
          // disabled={(activeStep === 1 && (medicareErrors === true))}
          variant="contained"
          onClick={placeOrderHandler}
            sx={{
              mt: 3,
              ml: 1,
              background: "#EC7E32",
        "&:hover": {
          //you want this to be the same as the backgroundColor above
          background: "#1D4E78",
          color: "#EC7E32"
        }
            }}
        >
          {activeStep === 2 ? 'Place order' : 'Next'}
        </Button>}
                                      
        </Box>
      </Box>}
      {isLoading && <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        
      }}>
      <CircularProgress />
    </Box>}
    </React.Fragment>
  );
}