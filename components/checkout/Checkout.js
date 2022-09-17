import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import MedicareForm from './MedicareForm';
import Review from './Review';
import { useState } from 'react';
import Main from '../../layout/Main/Main';
import { makeStyles } from '@mui/styles';
import OrderConfirmation from './OrderConfirmation';
import OrderConfirmationPage from '../../pages/order-confirmation';
import { useRouter } from 'next/router';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        JourneyHealth.io
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Basic Info', 'Medicare Info', 'Review'];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//           return <AddressForm
//               addressAttributes={addressAttributes}
//               setAddressAttributes={setAddressAttributes}
//           />;
//     case 1:
//       return <PaymentForm />;
//     case 2:
//       return <Review />;
//     default:
//       throw new Error('Unknown step');
//   }
// }

const theme = createTheme();

export default function Checkout() {

  let initialAddressValues = {
    firstName: '',
    lastName: '',
    email: '',
    emailConfirmation: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    phoneNumber: ''
  }

  let initialMedicareValues = {
    memberFirstName: '',
    memberLastName: '',
    memberDOB: '',
    memberMonth: '',
    memberDay: '',
    memberYear: '',
    memberId: '',
    memberId1: '',
    memberId2: '',
    memberId3: '',
    memberRelation: null,
    memberSex: '',
    memberShippingAddress: '',
    memberAddress1: '',
    memberAddress2: '',
    memberCity: '',
    memberState: '',
    memberZip: '',
    memberAgreement: '',
  }

  const router = useRouter()

    const [addressAttributes, setAddressAttributes] = useState(initialAddressValues);
    const [addressErrors, setAddressErrors] = useState({});
    const [medicareAttributes, setMedicareAttributes] = useState(initialMedicareValues);
    const [medicareErrors, setMedicareErrors] = useState({});
  const [activeStep, setActiveStep] = React.useState(0);
  const [orderNumber, setOrderNumber] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [alertSuccessOpen, setSuccessAlertOpen] = React.useState(false);

    const addressFormSubmitHandler = (values) => {
      setAddressAttributes(values)

    }
    const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
    
  function getStepContent(step) {
    switch (step) {
      case 0:
            return <AddressForm
                addressAttributes={addressAttributes}
                setAddressAttributes={setAddressAttributes}
                addressErrors={addressErrors}
              setAddressErrors={setAddressErrors}
              addressFormSubmitHandler={addressFormSubmitHandler}
              handleNext={handleNext}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />;
      case 1:
        return <MedicareForm
          medicareAttributes={medicareAttributes}
          setMedicareAttributes={setMedicareAttributes}
          medicareErrors={medicareErrors}
          setMedicareErrors={setMedicareErrors}
          handleNext={handleNext}
              activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleBack={handleBack}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          alertSuccessOpen={alertSuccessOpen}
          setSuccessAlertOpen={setSuccessAlertOpen}
        />;
      
      case 2:
        return <Review
          addressAttributes={addressAttributes}
          medicareAttributes={medicareAttributes}
          handleNext={handleNext}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          handleBack={handleBack}
          setOrderNumber={setOrderNumber}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
          alertSuccessOpen={alertSuccessOpen}
          setSuccessAlertOpen={setSuccessAlertOpen}
        />;
      default:
        throw new Error('Unknown step');
    }
  }
  // const useStyles = makeStyles(() => ({
  //   root: {
  //     "& .MuiStepIcon-active": { color: "#1D4E78" },
  //     "& .MuiStepIcon-completed": { color: "#1D4E78" },
  //     // "& .Mui-disabled .MuiStepIcon-root": { color: "cyan" }
  //   }
  // }));

  // const c = useStyles();

  // console.log('Address Attributes: ', addressAttributes)
  // console.log('Medicare Attributes: ', medicareAttributes)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main>
      {/* <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center" color="#1D4E78">
            <strong>Medicare COVID-19 Test Kit Sign-Up</strong>
          </Typography>
          <Stepper  activeStep={activeStep} sx={{
            pt: 3,
            pb: 5,
            
          }}>
            {steps.map((label) => (
              <Step key={label}
              >
                <StepLabel>
                {label}
              </StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
              {activeStep === steps.length ? (
                // <OrderConfirmation orderNumber={orderNumber} />
                router.replace({
                  pathname: "/order-confirmation",
                  query: {orderNumber: orderNumber}

                })
                // <React.Fragment>
                //   <Typography variant="h5" gutterBottom>
                //     Thank you for your order.
                //   </Typography>
                //   <Typography variant="subtitle1">
                //     Your order id is #<strong>{orderNumber}</strong>. We have emailed your order
                //     confirmation, and will send you an update when your order has
                //     shipped.
                //   </Typography>
                // </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                                      )} */}

                {/* {<Button
                    // disabled={(activeStep === 0 && (Object.keys(addressErrors).length > 0))}
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                      </Button>} */}
                {/* { <Button
                    // disabled={(activeStep === 1 && (medicareErrors === true))}
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>} */}
                                      
                {/* </Box> */}
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        {/* <Copyright /> */}
        </Container>
        </Main>
    </ThemeProvider>
  );
}

