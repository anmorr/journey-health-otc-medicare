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
import { useFormik, Field, FormikProvider } from 'formik';
import { Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { states } from '../../shared/data/states';
import FormGroup from '@mui/material/FormGroup';
import { Button } from '@mui/material';
import Image from 'next/image'
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import MuiAlert from '@mui/material/Alert';
import { useRouter } from 'next/router';
import SignaturePad from "react-signature-canvas";
import classes from './MedicareForm.module.css';



export default function MedicareForm({ addressAttributes, medicareAttributes, setMedicareAttributes, activeStep, setActiveStep, handleNext, handleBack, isLoading, setIsLoading, isLoadingalertSuccessOpen, setSuccessAlertOpen }) {

  const router = useRouter()
  const [sigUrl, setSigUrl] = React.useState("")
  const sigCanvas = React.useRef();

  const clearSignature = () => {
    sigCanvas.current.clear()
  }
  const saveSignature = () => {
    console.log("Saving signature...")
    setSigUrl(String(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png")));
  }

  const [alertOpen, setAlertOpen] = React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleAlertClose = (event) => {
    setAlertOpen(false);
  }

  const [DOBAlertOpen, setDOBAlertOpen] = React.useState(false);

  const handleDOBAlertClose = (event) => {
    setDOBAlertOpen(false);
  }

  const [nameAlertOpen, setNameAlertOpen] = React.useState(false);

  const handleNameAlertClose = (event) => {
    setNameAlertOpen(false);
  }
  

  const [memberIdValid, setMemberIdValid] = React.useState(true)
  
  function isAlphaNumeric(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)){ // lower alpha (a-z)
        return false;
      }
    }
    return true;
  };

  function isAlphaNumericWithSpaces(str) {
    var code, i, len;
  
    for (i = 0, len = str.length; i < len; i++) {
      code = str.charCodeAt(i);
      if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123) && // lower alpha (a-z)
        !(code === 32)){ 
        return false;
      }
    }
    return true;
  };
  
  const validate = values => {

    const errors = {};
    if (!values.memberFirstName) {
        errors.memberFirstName = 'Required';
      } else if (values.memberFirstName.length > 15) {
        errors.memberFirstName = 'Must be 15 characters or less';
    }
    // else if (!isAlphaNumericWithSpaces(values.memberFirstName)) {
    //     errors.memberFirstName = 'Invalid Character!'
    //   } 
    
    if (!values.memberLastName) {
        errors.memberLastName = 'Required';
    } else if (values.memberLastName.length > 20) {
        errors.memberLastName = 'Must be 20 characters or less';
    }
    // else if (!isAlphaNumericWithSpaces(values.memberLastName)) {
    //   errors.memberLastName = 'Invalid Character!'
    // } 
    
    if (!values.memberId) {
        errors.memberId = 'Required';
    } else if (values.memberId.length < 11) {
        errors.memberId = 'Invalid Medicare Number. Missing digits';
    }

    if (!values.memberId1) {
      errors.memberId1 = 'Required';
    } else if (values.memberId1.length < 4) {
      const currentLength = (4 - values.memberId1.length)
      errors.memberId1 = `Missing ${currentLength} ${currentLength > 1 ? ' digits.' : ' digit.'}`;
    } else if (!isAlphaNumeric(values.memberId1)) {
      errors.memberId1 = 'Invalid Character!'
    } 
    

    if (!values.memberId2) {
      errors.memberId2 = 'Required';
    } else if (values.memberId2.length < 3) {
      const currentLength = (3 - values.memberId2.length)
      errors.memberId2 = `Missing ${currentLength} ${currentLength > 1 ? ' digits.' : ' digit.'}`;
    } else if (!isAlphaNumeric(values.memberId2)) {
      errors.memberId2 = 'Invalid Character!'
    } 

    if (!values.memberId3) {
      errors.memberId3 = 'Required';
    } else if (values.memberId3.length < 4) {
      const currentLength = (4 - values.memberId3.length)
      errors.memberId3 = `Missing ${currentLength} ${currentLength > 1 ? ' digits.' : ' digit.'}`;
    } else if (!isAlphaNumeric(values.memberId3)) {
      errors.memberId3 = 'Invalid Character!'
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

    if (!values.memberSex) {
      errors.memberSex = 'Required';
  } 
    
    if (!values.memberShippingAddress) {
      errors.memberShippingAddress = 'Required';
    } 

    if (values.memberShippingAddress === 'Yes') {

      if (!values.memberAddress1) {
        errors.memberAddress1 = 'Required';
      } else if (values.memberAddress1.length > 255) {
        errors.memberAddress1 = 'Must be 255 characters or less';
      }
    
      if (values.memberAddress2.length > 255) {
          errors.memberAddress2 = 'Must be 255 characters or less';
      }

      if (!values.memberCity) {
        errors.memberCity = 'Required';
      } else if (values.memberCity.length > 50) {
        errors.memberCity = 'Must be 50 characters or less';
      }
    
      if (!values.memberState) {
          errors.memberState = 'Required';
      } else if (values.memberState.length > 20) {
          errors.memberState = 'Must be 20 characters or less';
      }

      if (!values.memberZip) {
        errors.memberZip = 'Required';
      } else if (values.memberZip.length > 10) {
        errors.memberZip = 'Must be 10 characters or less';
      }
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

    if (!values.memberAgreement) {
      errors.memberAgreement = 'Required';
    }

    if ((values.memberId1 && values.memberId2 && values.memberId3) && !(errors.memberId1 || errors.memberId2 || errors.memberId3)) {
      values.memberId1 = values.memberId1.toUpperCase()
      values.memberId2 = values.memberId2.toUpperCase()
      values.memberId3 = values.memberId3.toUpperCase()
      values.memberId = `${values.memberId1}${values.memberId2}${values.memberId3}`.toUpperCase()
      setAlertOpen(false)
    }
    if ((values.memberFirstName && values.memberLastName) && !(errors.memberFirstName || errors.memberLastName)) {
      values.memberFirstName = values.memberFirstName.toUpperCase()
      values.memberLastName = values.memberLastName.toUpperCase()
    }
    setMedicareAttributes(values)
    // console.log(values)
    // if (!sigUrl) {
    //   errors.memberSignatrue = 'Required'
    // }
    // console.log(medicareAttributes)
    // console.log("errors: ", errors)
    return errors;
  }

  const url = "/api/check-member-eligibility" //"https://mm23tf5iwh.execute-api.us-west-1.amazonaws.com/Prod/eligibility"



    const formik = useFormik({
      initialValues: {...medicareAttributes},
      validate,
      onSubmit: values => {
        
        if (DOBAlertOpen) {
          setDOBAlertOpen(false)
        }
        if (nameAlertOpen) {
          setNameAlertOpen(false)
        }
        // saveSignature()
        // medicareAttributes.memberSignature = String(sigUrl)
        // console.log("medicareAttributes: ", medicareAttributes)
        // medicareAttributes = {...medicareAttributes, memberId:`${values.memberId1} ${values.memberId2} ${values.memberId3}` }
        checkEligibility({
          memberId: values.memberId,
          firstName: values.memberFirstName,
          lastName: values.memberLastName,
          memberId1: values.memberId1,
          memberId2: values.memberId2,
          memberId3: values.memberId3,
          dateOfBirth: `${values.memberYear}-${values.memberMonth}-${values.memberDay}`,
          email: addressAttributes.email,
          address1: addressAttributes.address1,
          address2: addressAttributes.address2,
          city: addressAttributes.city,
          state: addressAttributes.state,
          zip: addressAttributes.zip,
          phoneNumber: addressAttributes.phoneNumber
        }, values)
        // handleNext()
          // alert(JSON.stringify(values, null, 2))
      }
    })
  
    const checkEligibility = (memberInfo, values) => {

      setIsLoading(true)
  
      axios.post(`${url}`,
        {
          ...memberInfo

        })
        .then(function (response) {
          if (response) {
            // console.log(response)
            // console.log(response.data.member_eligibility_status)
            if (response.data.member_eligibility_status === "malformed_member_id") {
              if (response.data.member_id_sections.memberId1 === "invalid") {
                
                setAlertOpen(true)
                formik.values.memberId1 = ""
              }
              if (response.data.member_id_sections.memberId2 === "invalid") {
              
                setAlertOpen(true)
                formik.values.memberId2 = ""
              }
              if (response.data.member_id_sections.memberId3 === "invalid") {
                
                setAlertOpen(true)
                formik.values.memberId3 = ""
              }
              setIsLoading(false)
            } else if (response.data.member_eligibility_status === "member_already_enrolled") {
              setIsLoading(false)
              router.replace({
                pathname: "/eligibility-verification",
                query: {reason: "alreadyEnrolled"}
              })
            } else if (response.data.member_eligibility_status.status === "Inactive") {
              setIsLoading(false)
              router.replace({
                pathname: "/eligibility-verification",
                query: { reason: "Inactive" }
              })
              // console.log("eligibiltiy_status: ", response.data.member_eligibility_status.status)
            } else if (response.data.member_eligibility_status.status === "Active Coverage") {
              // console.log("eligibiltiy_status: ", response.data.member_eligibility_status.status)
              setIsLoading(false)
              setSuccessAlertOpen(true)
              handleNext();
            } else if (response.data.member_eligibility_status.status === "not_found" && response.data.member_eligibility_status["request-errors"]) {
              setIsLoading(false)
              // router.replace({
              //   pathname: "/eligibility-verification",
              //   query: {reason: "notFound"}
              // })
              if (response.data.member_eligibility_status["request-errors"][0]) {
                const failureReason = response.data.member_eligibility_status["request-errors"][0].reasonCode;
                if (failureReason === 71) {
                  setDOBAlertOpen(true);
                  // console.log("Patient Birth Date Does Not Match That for the Patient on the Database")
                }
                // if (failureReason === 72) {
                //   setAlertOpen(true);
                //   console.log("Invalid/Missing Subscriber/Insured ID (72)")
                // }
                if (failureReason === 73) {
                  setNameAlertOpen(true);
                  // console.log("Invalid/Missing Subscriber/Insured Name")
                }
              }
            } else {
              setIsLoading(false)
              router.replace({
                pathname: "/eligibility-verification",
                query: {reason: "notFound"}
              })
              // console.log(response.data.member_eligibility_status.status)
              // console.log("No Condition Met")
            }
          } else {
            throw new Error("Eligibility Check Faiiled")
          }
        }).catch(function (error) {
          console.log("error: ", error)
          setIsLoading(false)
        })
      }
  
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
  for (let j = 1975; j >= 1920; j--){
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
  
    var elts = document.getElementsByClassName('medicareNumberInput')
    Array.from(elts).forEach(function(elt){
      elt.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        
          if (event.keyCode === 13 || (elt.childNodes[0].childNodes[0].defaultValue.length === 4) && elt.childNodes[0].childNodes[0].name === "memberId1") {
          // Focus on the next sibling
            // console.log(elt.childNodes[0].childNodes[0])
            if (elt.childNodes[0].childNodes[0].name === "memberId1") {
              document.getElementById("memberId2").focus()
            }
          }

          if (event.keyCode === 13 || (elt.childNodes[0].childNodes[0].defaultValue.length === 3) && elt.childNodes[0].childNodes[0].name === "memberId2") {
            // Focus on the next sibling
              // console.log(elt.childNodes[0].childNodes[0])
              if (elt.childNodes[0].childNodes[0].name === "memberId2") {
                document.getElementById("memberId3").focus()
              }
          }
        
          if (event.keyCode === 13 || (elt.childNodes[0].childNodes[0].defaultValue.length === 4) && elt.childNodes[0].childNodes[0].name === "memberId3") {
            // Focus on the next sibling
              // console.log(elt.childNodes[0].childNodes[0])
              if (elt.childNodes[0].childNodes[0].name === "memberId3") {
                document.getElementById("memberId3").blur()
              }
            }
     
      });
    })
  
  
  return (
    <React.Fragment>
      {!isLoading && 
        <Box>
      <Typography variant="h6" gutterBottom>
        Medicare Member Information
      </Typography>
          <Grid container spacing={3}>
          {nameAlertOpen && <Grid item xs={12} md={12}>
              <Alert onClose={handleNameAlertClose} severity="error">We were unable to verify your eligibility. Please ensure the Medicare Member&apos;s Name is exactly as it appears on the Memeber ID Card.</Alert>
            </Grid>}
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
            variant="outlined"
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
            variant="outlined"
            onChange={formik.handleChange}
                      value={formik.values.memberLastName}
                      onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={12} sm={12} sx={{
          textAlign: "center",
          paddingTop: 10
        }}>
          <Typography variant="p" gutterBottom sx={{
            // fontWeight: "bold"
            color: "black"
          }}>
                  Medicare Member Identification Number
            </Typography>
        </Grid>
        
        <Grid item xs={12} md={12}  sx={{
          textAlign: "center",
          paddingTop: 4
        }}>
            <Box>
              <Image src='https://journey-health-images.s3.us-west-1.amazonaws.com/medicare-card-new-marked-black.png' alt="me" width="375" height="225" />
            </Box>
          </Grid>
            {alertOpen && <Grid item xs={12} md={12}>
              <Alert onClose={handleAlertClose} severity="error">The Member ID Format is Incorrect. Please ensure the input matches the numbers on the ID card exactly!</Alert>
            </Grid>}
        <Grid item xs={12} md={12} sx={{
          textAlign: 'center'
        }}>
          <TextField
            error={formik.touched.memberId1 && formik.errors.memberId1 ? true : false}
            helperText={
                formik.touched.memberId1 && formik.errors.memberId1 ?
                    formik.errors.memberId1 :
                    ""
            }

            className="medicareNumberInput"

            name='memberId1'
            required
            id="memberId1"
            // label="Medicare Number"
            placeholder='XXXX'
            // fullWidth
            // autoComplete="cc-exp"
            variant="outlined"
            inputProps={{ min: 0, maxLength: 4, style: { textAlign: 'center' } }}
            sx={{
              padding: 1
            }}
            // onChange={(e) => { 
            //   formik.handleChange(e)
            //   console.log(e)
            //   console.log(e.target.defaultValue.length)
            //   if (e.target.defaultValue.length === 3) {
            //     console.log(
            //       "Equal to 4"
            //     )
                
            //     document.getElementById("memberId2").focus();
            //     formik.handleBlur(e)
                
            //   }
              
            // }}
            onChange={formik.handleChange}
                      value={formik.values.memberId1}
                      onBlur={formik.handleBlur}
          />
          {/* <span> - </span> */}
          <TextField
            error={formik.touched.memberId2 && formik.errors.memberId2 ? true : false}
            helperText={
                formik.touched.memberId2 && formik.errors.memberId2 ?
                    formik.errors.memberId2 :
                    ""
            }
            sx={{
              padding: 1
            }}

            name='memberId2'
            required
            id="memberId2"
            // label="Medicare Number"
            placeholder='XXX'
            // fullWidth
            // autoComplete="cc-exp"
            variant="outlined"
            inputProps={{ min: 0, maxLength: 3, style: { textAlign: 'center' } }}
            className="medicareNumberInput"
            padding="1"
            onChange={formik.handleChange}
                      value={formik.values.memberId2}
                      onBlur={formik.handleBlur}
          />
          {/* <span> - </span> */}
          <TextField
            error={formik.touched.memberId3 && formik.errors.memberId3 ? true : false}
            helperText={
                formik.touched.memberId3 && formik.errors.memberId3 ?
                    formik.errors.memberId3 :
                    ""
            }

            sx={{
              padding: 1
            }}
            name='memberId3'
            required
            id="memberId3"
            // label="Medicare Number"
            placeholder='XXXX'
            // fullWidth
            // autoComplete="cc-exp"
            variant="outlined"
            inputProps={{ min: 0, maxLength: 4, style: { textAlign: 'center' } }}
            className="medicareNumberInput"
            onChange={formik.handleChange}
                      value={formik.values.memberId3}
                      onBlur={formik.handleBlur}
          />
            </Grid> 
          {DOBAlertOpen && <Grid item xs={12} md={12}>
            <Alert onClose={handleDOBAlertClose} severity="error">We were unable to verify your eligibility. Please ensure the Medicare Member&apos;s Date of Birth is correct.</Alert>
          </Grid>}
        <Grid item xs={12} sm={12}>
          <Typography variant="p" gutterBottom sx={{
            // fontWeight: "bold"
            color: "black"
          }}>
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
        {/* </Grid>
        <Grid item xs={12} md={4}> */}
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
        {/* </Grid>
        <Grid item xs={12} md={4}> */}
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

        <Grid item xs={12} md={12}>
          <FormControl
            error={formik.touched.memberSex && formik.errors.memberSex ? true : false}
            
          
          >
            <FormLabel id="demo-controlled-radio-buttons-group" sx={{
        color: 'black'
      }}>Medicare Member&apos;s Sex</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="memberSex"
        id='memberSex'
        value={formik.values.memberSex}
              onChange={formik.handleChange}
              
      >
        <FormControlLabel value="M" control={<Radio />} label="Male" />
        <FormControlLabel value="F" control={<Radio />} label="Female" />
        <FormControlLabel value="U" control={<Radio />} label="Unknown" />
        
        </RadioGroup>
        <FormHelperText>{formik.touched.memberSex && formik.errors.memberSex ?
                  formik.errors.memberSex :
                  ""}</FormHelperText>
    </FormControl>
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
            variant="outlined"
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
                      variant="outlined"
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
            variant="outlined"
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
            variant="outlined"
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
          <FormControl>
          <FormGroup
            // error={true}
            // helperText={formik.touched.memberAgreement && formik.errors.memberAgreement ?
            //   formik.errors.memberAgreement :
            //   ""
            // }

          
          >
            <FormControlLabel
              control={<Checkbox
              checked={formik.values.memberAgreement ? true : false}
              name='memberAgreement'
              onChange={formik.handleChange}
              value={formik.values.memberAgreement}
            />} label="I agree to receive eight FDA Rapid Antigen Test Kits (with no out-of-pocket costs) per month from Journey Health for the duration of the Public Health Emergency." />
            </FormGroup>
            <FormHelperText error={formik.errors.memberAgreement ? true : false}>
            {formik.errors.memberAgreement}
        </FormHelperText>
          </FormControl>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
            <Typography variant="p" gutterBottom sx={{
            fontWeight: "bold",
                color: "black",
              }}> */}
                {/* <FormHelperText error={formik.errors.memberSignature ? true : false}>
            {formik.errors.memberSignature}
        </FormHelperText> */}
                
                  {/* Signature {formik.errors.memberSignature}
              </Typography>
              
            <SignaturePad
        ref={sigCanvas}
        canvasProps={{
          className: classes.signatureCanvas
        }}
              />
              <Button onClick={clearSignature} sx={{
            mt: 1,
            color: "#1D4E78"
          }}>Clear</Button>

            </Grid> */}

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
                { <Button
                    // disabled={(activeStep === 1 && (medicareErrors === true))}
                    variant="contained"
                    onClick={formik.handleSubmit}
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
          </Box>
      }
      {isLoading && <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        
      }}>
        <CircularProgress />
      </Box>}

        {isLoading &&<Box sx={{
          display: 'flex',
          justifyContent: 'center',
          
        }}>
          <br/>
          Verifying Eligibility
      </Box>
    }
    </React.Fragment>
  );
}