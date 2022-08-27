import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import { useFormik } from 'formik';
import { Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { states } from '../../shared/data/states';
import FormGroup from '@mui/material/FormGroup';
import { Button } from '@mui/material';
import Image from 'next/image'




export default function MedicareForm({ medicareAttributes, setMedicareAttributes, activeStep, setActiveStep, handleNext, handleBack }) {
  
  const validate = values => {

    const errors = {};
    if (!values.memberFirstName) {
        errors.memberFirstName = 'Required';
      } else if (values.memberFirstName.length > 15) {
        errors.memberFirstName = 'Must be 15 characters or less';
      }
    
    if (!values.memberLastName) {
        errors.memberLastName = 'Required';
    } else if (values.memberLastName.length > 20) {
        errors.memberLastName = 'Must be 20 characters or less';
    }
    
    if (!values.medicareNumber) {
        errors.medicareNumber = 'Required';
    } else if (values.medicareNumber.length < 11) {
        errors.medicareNumber = 'Invalid Medicare Number. Missing digits';
    }
    
    // if (!values.emailConfirmation) {
    //     errors.emailConfirmation = 'Required';
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.emailConfirmation = 'Invalid email address';
    // } else if (values.email !== values.emailConfirmation) {
    //     errors.emailConfirmation = 'Email Addresses do not match!'
    // }

    // //=========

    if (!values.memberRelation) {
        errors.memberRelation = 'Required';
    } 
    
    if (!values.memberShippingAddress) {
      errors.memberShippingAddress = 'Required';
    } 
    
    // if (values.address2.length > 255) {
    //     errors.address2 = 'Must be 255 characters or less';
    // }

    if (!values.memberDay) {
      errors.memberDay = 'Required';
    }

    if (!values.memberMonth) {
        errors.memberMonth = 'Required';
    }

    if (!values.memberYear) {
      errors.memberYear = 'Required';
    }
    setMedicareAttributes(values)
    console.log(medicareAttributes)
    return errors;
}


 
  
  
    const formik = useFormik({
      initialValues: {...medicareAttributes},
      validate,
      onSubmit: values => {
          handleNext()
          // alert(JSON.stringify(values, null, 2))
      }
    })
  
  let months = [
    <option key={1}  value={1}>January</option>,
    <option key={2} value={2}>February</option>,
    <option key={3} value={3}>March</option>,
    <option key={4} value={4}>April</option>,
    <option key={5} value={5}>May</option>,
    <option key={6} value={6}>June</option>,
    <option key={7} value={7}>July</option>,
    <option  key={8}value={8}>August</option>,
    <option key={9} value={9}>September</option>,
    <option key={10} value={10}>October</option>,
    <option key={11} value={11}>November</option>,
    <option key={12} value={12}>December</option>,
  ]
  
  let days = []
  for (let i = 1; i < 32; i++){
    days.push(
      <option key={i} value={i}>{i}</option>
    )
  }
  let years = []
  for (let j = 1900; j < 1959; j++){
    years.push(
      <option key={j} value={j}>{j}</option>
    )
  }

  let menuItems = []
    Object.keys(states).forEach(function(key, value) {
        // console.log(key, states[key])
        menuItems.push(
            <option value={key} key={key}>{states[key]}</option>
        )
    })
  
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Medicare Member Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            error={formik.touched.memberFirstName && formik.errors.memberFirstName ? true : false}
            helperText={
                formik.touched.memberFirstName && formik.errors.memberFirstName ?
                    formik.errors.memberFirstName :
                    ""
            }
            required
            id="memberFirstName"
            name="memberFirstName"
            label="First Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={formik.handleChange}
                      value={formik.values.memberFirstName}
                      onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={formik.touched.memberLastName && formik.errors.memberLastName ? true : false}
            helperText={
                formik.touched.memberLastName && formik.errors.memberLastName ?
                    formik.errors.memberLastName :
                    ""
            }
            required
            id="memberLastName"
            name="memberLastName"
            label="Last Name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={formik.handleChange}
                      value={formik.values.memberLastName}
                      onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom>
                  Medicare Member&apos;s Date of Birth
            </Typography>
        </Grid>
        
        <Grid item xs={12} md={4}>
        <FormControl
            sx={{ minWidth: 100 }}
            disabled={false}
            error={formik.touched.memberMonth && formik.errors.memberMonth ? true : false}
                          // error={formik.touched.state && formik.errors.state ? true : false}
        >
            {/* <InputLabel id="dob-label"></InputLabel> */}
            <InputLabel id="demo-simple-select-label">Month</InputLabel>
        <NativeSelect
              // labelId="month"
              id="memberMonth"
        name="memberMonth"
        fullWidth
          value={formik.values.memberMonth}
          onChange={formik.handleChange}
                              label="Month"
                              onBlur={formik.handleBlur}
            >
              <option value="">
          </option>
          {months}
        </NativeSelect>
        {/* <FormHelperText>{formik.touched.state && formik.errors.state ?
                    formik.errors.state :
                    ""
            }</FormHelperText> */}
      </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
        <FormControl
            sx={{ minWidth: 100 }}
                          disabled={false}
                          error={formik.touched.memberDay && formik.errors.memberDay ? true : false}
        >
            {/* <InputLabel id="dob-label"></InputLabel> */}
            <InputLabel id="demo-simple-select-label">Day</InputLabel>
        <NativeSelect
              // labelId="day"
              
        name="memberDay"
        fullWidth
          id="day"
          value={formik.values.memberDay}
          onChange={formik.handleChange}
                              label="Day"
                              onBlur={formik.handleBlur}
            >
              <option value="">
          </option>
          {days}
        </NativeSelect>
        {/* <FormHelperText>{formik.touched.state && formik.errors.state ?
                    formik.errors.state :
                    ""
            }</FormHelperText> */}
      </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
        <FormControl
            sx={{ minWidth: 100 }}
            disabled={false}
            error={formik.touched.memberYear && formik.errors.memberYear ? true : false}
                          // error={formik.touched.state && formik.errors.state ? true : false}
        >
            {/* <InputLabel id="dob-label"></InputLabel> */}
            <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <NativeSelect
        // labelId="year"
        name="memberYear"
        fullWidth
          id="year"
          value={formik.values.memberYear}
          onChange={formik.handleChange}
                              label="Year"
                              onBlur={formik.handleBlur}
            >
              <option value="">
          </option>
          {years}
        </NativeSelect>
          </FormControl>
          
        </Grid>
        <Grid item xs={12} md={12}  sx={{
          textAlign: "center",
          paddingTop: 8
        }}>
            <Box>
              <Image src='https://journey-health-images.s3.us-west-1.amazonaws.com/medicare-card-new-marked-black.png' alt="me" width="375" height="225" />
            </Box>
          </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            error={formik.touched.medicareNumber && formik.errors.medicareNumber ? true : false}
            helperText={
                formik.touched.medicareNumber && formik.errors.medicareNumber ?
                    formik.errors.medicareNumber :
                    ""
            }

            name='medicareNumber'
            required
            id="medicareNumber"
            label="Medicare Number"
            fullWidth
            // autoComplete="cc-exp"
            variant="standard"
            onChange={formik.handleChange}
                      value={formik.values.medicareNumber}
                      onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl
            error={formik.touched.memberRelation && formik.errors.memberRelation ? true : false}
            
          
          >
            <FormLabel id="demo-controlled-radio-buttons-group" sx={{
        color: 'black'
      }}>Relationship to Medicare Member</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="memberRelation"
        id='memberRelation'
        value={formik.values.memberRelation}
              onChange={formik.handleChange}
              
      >
        <FormControlLabel value="Self" control={<Radio />} label="Self" />
        <FormControlLabel value="Spouse" control={<Radio />} label="Spouse" />
        </RadioGroup>
        <FormHelperText>{formik.touched.memberRelation && formik.errors.memberRelation ?
                  formik.errors.memberRelation :
                  ""}</FormHelperText>
    </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl
          error={formik.touched.memberShippingAddress && formik.errors.memberShippingAddress ? true : false}
          >
            <FormLabel id="demo-controlled-radio-buttons-group" sx={{
        color: 'black'
      }}>Is the Medicare Member&apos;s address different from the shipping address?</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
              name="memberShippingAddress"
              id='memberShippingAddress'
        value={formik.values.memberShippingAddress}
        onChange={formik.handleChange}
            >
              <FormControlLabel value="No" control={<Radio />} label="No" />
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        
            </RadioGroup>
            <FormHelperText>{formik.touched.memberShippingAddress && formik.errors.memberShippingAddress ?
                  formik.errors.memberShippingAddress :
                  ""}</FormHelperText>
    </FormControl>
        </Grid>
        
        {(formik.values.memberShippingAddress === "Yes") && <Grid item xs={12}>
          <TextField
            required
            id="memberAddress1"
            name="memberAddress1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.memberAddress1}

            onBlur={formik.handleBlur}
            error={formik.touched.memberAddress1 && formik.errors.memberAddress1 ? true : false}
            helperText={formik.touched.memberAddress1 && formik.errors.memberAddress1 ?
              formik.errors.memberAddress1 :
              ""
            }
          />
        </Grid>}
        {(formik.values.memberShippingAddress === "Yes") && <Grid item xs={12}>
          <TextField
            id="memberAddress2"
            name="memberAddress2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
                      variant="standard"
                      onChange={formik.handleChange}
                          value={formik.values.memberAddress2}
                          
                          onBlur={formik.handleBlur}
                          error={formik.touched.memberAddress2 && formik.errors.memberAddress2 ? true : false}
            helperText={formik.touched.memberAddress2 && formik.errors.memberAddress2 ?
                    formik.errors.memberAddress2 :
                    ""
            }
          />
        </Grid>}
        {(formik.values.memberShippingAddress === "Yes") && <Grid item xs={12} sm={6}>
          <TextField
            required
            id="memberCity"
            name="memberCity"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.memberCity}
                          
            onBlur={formik.handleBlur}
            error={formik.touched.memberCity && formik.errors.memberCity ? true : false}
            helperText={formik.touched.memberCity && formik.errors.memberCity ?
              formik.errors.memberCity :
              ""
            }
          />
        </Grid>}
        {(formik.values.memberShippingAddress === "Yes") && <Grid item xs={12} sm={6}>
                      
          <FormControl
            sx={{ minWidth: 200 }}
            disabled={false}
            error={formik.touched.state && formik.errors.state ? true : false}
          >
            <InputLabel id="demo-simple-select-label">State</InputLabel>
            <NativeSelect
              // labelId="state"
              name="memberState"
              fullWidth
              id="memberState"
              value={formik.values.memberState}
              onChange={formik.handleChange}
              label="State"
              onBlur={formik.handleBlur}
            >
              {/* <MenuItem value={formik.values.state}>
            <em>None</em>
          </MenuItem> */}
              {menuItems}
            </NativeSelect>
            <FormHelperText>{formik.touched.memberState && formik.errors.memberState ?
              formik.errors.memberState :
              ""
            }</FormHelperText>
          </FormControl>
        </Grid>}
        {(formik.values.memberShippingAddress === "Yes") && <Grid item xs={12} sm={6}>
          <TextField
            required
            id="memberZip"
            name="memberZip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={formik.handleChange}
            value={formik.values.memberZip}
                          
            onBlur={formik.handleBlur}
            error={formik.touched.memberZip && formik.errors.memberZip ? true : false}
            helperText={formik.touched.memberZip && formik.errors.memberZip ?
              formik.errors.memberZip :
              ""
            }
          />
        </Grid>}
        <Grid item xs={12} sm={12}>
        <FormGroup>
            <FormControlLabel control={<Checkbox
              defaultChecked={formik.values.memberAgreement ? true : false}
              name='memberAgreement'
              onChange={formik.handleChange}
              value={formik.values.memberAgreement}
            />} label="I agree to receive eight FDA Rapid Antigen Test Kits (with no out-of-pocket costs) per month from Journey Health for the duration of the Public Health Emergency." />
    </FormGroup>
        </Grid>

      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
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
                { <Button
                    // disabled={(activeStep === 1 && (medicareErrors === true))}
                    variant="contained"
                    onClick={formik.handleSubmit}
                    sx={{ mt: 3, ml: 1 }}
                >
                    {activeStep === 2 ? 'Place order' : 'Next'}
                </Button>}
                                      
                </Box>
    </React.Fragment>
  );
}