import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import { useFormik } from 'formik';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import * as Yup from 'yup';
import { states } from '../../shared/data/states.js'
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import MuiPhoneNumber from 'material-ui-phone-number';

// const validate = values => {


//     const errors = {};
//     if (!values.firstName) {
//         errors.firstName = 'Required';
//       } else if (values.firstName.length > 15) {
//         errors.firstName = 'Must be 15 characters or less';
//       }
    
//     if (!values.lastName) {
//         errors.lastName = 'Required';
//     } else if (values.lastName.length > 20) {
//         errors.lastName = 'Must be 20 characters or less';
//     }
    
//     if (!values.email) {
//         errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }
    
//     if (!values.emailConfirmation) {
//         errors.emailConfirmation = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.emailConfirmation = 'Invalid email address';
//     } else if (values.email !== values.emailConfirmation) {
//         errors.emailConfirmation = 'Email Addresses do not match!'
//     }

//     //=========

//     if (!values.address1) {
//         errors.address1 = 'Required';
//       } else if (values.address1.length > 255) {
//         errors.address1 = 'Must be 255 characters or less';
//       }
    
//     if (values.address2.length > 255) {
//         errors.address2 = 'Must be 255 characters or less';
//     }

//     if (!values.city) {
//         errors.city = 'Required';
//       } else if (values.city.length > 50) {
//         errors.city = 'Must be 50 characters or less';
//       }
    
//     if (!values.state) {
//         errors.state = 'Required';
//     } else if (values.state.length > 20) {
//         errors.state = 'Must be 20 characters or less';
//     }

//     if (!values.zip) {
//         errors.zip = 'Required';
//       } else if (values.zip.length > 10) {
//         errors.zip = 'Must be 10 characters or less';
//       }

//     console.log(errors)
//     setAddressErrors(errors)
//     return errors;
// }



export default function AddressForm({
    addressAttributes,
    setAddressAttributes,
    addressErrors,
    setAddressErrors,
    addressFormSubmitHandler,
    activeStep,
    handleNext
    }) {

    
        const validate = values => {


            const errors = {};
            if (!values.firstName) {
                errors.firstName = 'Required';
              } else if (values.firstName.length > 15) {
                errors.firstName = 'Must be 15 characters or less';
              }
            
            if (!values.lastName) {
                errors.lastName = 'Required';
            } else if (values.lastName.length > 20) {
                errors.lastName = 'Must be 20 characters or less';
            }
            
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            
            if (!values.emailConfirmation) {
                errors.emailConfirmation = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.emailConfirmation = 'Invalid email address';
            } else if (values.email !== values.emailConfirmation) {
                errors.emailConfirmation = 'Email Addresses do not match!'
            }
        
            //=========
          
            if (!values.phoneNumber) {
              errors.phoneNumber = 'Required';
            } 
        
            if (!values.address1) {
                errors.address1 = 'Required';
              } else if (values.address1.length > 255) {
                errors.address1 = 'Must be 255 characters or less';
              }
            
            if (values.address2.length > 255) {
                errors.address2 = 'Must be 255 characters or less';
            }
        
            if (!values.city) {
                errors.city = 'Required';
              } else if (values.city.length > 50) {
                errors.city = 'Must be 50 characters or less';
              }
            
            if (!values.state) {
                errors.state = 'Required';
            } else if (values.state.length > 20) {
                errors.state = 'Must be 20 characters or less';
            }
        
            if (!values.zip) {
                errors.zip = 'Required';
              } else if (values.zip.length > 10) {
                errors.zip = 'Must be 10 characters or less';
              }
        
            // console.log(errors)
            if (Object.keys(errors).length > 0) {
                setAddressErrors(errors)
                // console.log('addressErrors sad: ', addressErrors)
            } else {
                setAddressErrors(errors)
                setAddressAttributes(values)
                // console.log('addressErrors happy: ', errors)
            }
            setAddressErrors(errors)
            // console.log(errors)
            // console.log("Values: ", values)
            return errors;
        }

    
    const formik = useFormik({
        initialValues: {...addressAttributes},
        validate,
        // validationSchema: Yup.object({
        //     firstName: Yup.string()
        //         .max(15, "Must be 15 characters or less")
        //         .required('Required'),
        //         lastName: Yup.string()
        //         .max(20, "Must be 20 characters or less")
        //         .required('Required'),
        // }),
        onSubmit: values => {
            handleNext()
            // alert(JSON.stringify(values, null, 2))
        }
    })

    // console.log("States: ", states)

    let menuItems = []
    Object.keys(states).forEach(function(key, value) {
        // console.log(key, states[key])
        menuItems.push(
            <option value={key} key={key}>{states[key]}</option>
        )
    } )


  return (
      <React.Fragment>
      <Typography variant="h6" gutterBottom>
       <strong>Basic Information</strong>
        </Typography>
        <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <TextField
          error={formik.touched.firstName && formik.errors.firstName ? true : false}
            helperText={
                formik.touched.firstName && formik.errors.firstName ?
                    formik.errors.firstName :
                    ""
            }
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            onChange={formik.handleChange}
                      value={formik.values.firstName}
                      onBlur={formik.handleBlur}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            error={formik.touched.lastName && formik.errors.lastName ? true : false}
            helperText={
                formik.touched.lastName && formik.errors.lastName ?
                    formik.errors.lastName :
                    ""
            }
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
                      variant="outlined"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      onBlur={formik.handleBlur}
          />
              </Grid>
              <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="outlined"
            onChange={formik.handleChange}
                      value={formik.values.email}
                          onBlur={formik.handleBlur}
                          error={formik.touched.email && formik.errors.email ? true : false}
            helperText={formik.touched.email && formik.errors.email ?
                    formik.errors.email :
                    ""
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="emailConfirmation"
            name="emailConfirmation"
            label="Confirm Email"
            fullWidth
            autoComplete="email"
                      variant="outlined"
                      onChange={formik.handleChange}
                      value={formik.values.emailConfirmation}
                          onBlur={formik.handleBlur}
                          error={formik.touched.emailConfirmation && formik.errors.emailConfirmation ? true : false}
            helperText={formik.touched.emailConfirmation && formik.errors.emailConfirmation ?
                    formik.errors.emailConfirmation :
                    ""
            }
          />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
            country="US"
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            autoComplete="phone"
                      variant="outlined"
                      onChange={formik.handleChange}
                      value={formik.values.phoneNumber}
                          onBlur={formik.handleBlur}
                          error={formik.touched.phoneNumber && formik.errors.phoneNumber ? true : false}
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber ?
                    formik.errors.phoneNumber :
                    ""
            }
          />
          </Grid>
          <Grid  item xs={12}>
             <Typography paddingTop={"1em"} variant="h6" gutterBottom>
       <strong>Shipping Address</strong>
        </Typography>
          </Grid>
         
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
                      variant="outlined"
                      onChange={formik.handleChange}
                          value={formik.values.address1}

                          onBlur={formik.handleBlur}
                          error={formik.touched.address1 && formik.errors.address1 ? true : false}
            helperText={formik.touched.address1 && formik.errors.address1 ?
                    formik.errors.address1 :
                    ""
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
                      variant="outlined"
                      onChange={formik.handleChange}
                          value={formik.values.address2}
                          
                          onBlur={formik.handleBlur}
                          error={formik.touched.address2 && formik.errors.address2 ? true : false}
            helperText={formik.touched.address2 && formik.errors.address2 ?
                    formik.errors.address2 :
                    ""
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
                      variant="outlined"
                      onChange={formik.handleChange}
                          value={formik.values.city}
                          
                          onBlur={formik.handleBlur}
                          error={formik.touched.city && formik.errors.city ? true : false}
            helperText={formik.touched.city && formik.errors.city ?
                    formik.errors.city :
                    ""
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
                      
        <FormControl
            sx={{ minWidth: 200 }}
                          disabled={false}
                          error={formik.touched.state && formik.errors.state ? true : false}
        >
        <InputLabel id="demo-simple-select-label">State</InputLabel>
              <NativeSelect
        name="state"
        fullWidth
          id="state"
          value={formik.values.state}
          onChange={formik.handleChange}
                              label="State"
                              onBlur={formik.handleBlur}
        >
        
            <option value="">
            {/* <em>State</em> */}
          </option>
          {menuItems}
        </NativeSelect>
        <FormHelperText>{formik.touched.state && formik.errors.state ?
                    formik.errors.state :
                    ""
            }</FormHelperText>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
                      variant="outlined"
                      onChange={formik.handleChange}
                          value={formik.values.zip}
                          
                          onBlur={formik.handleBlur}
                          error={formik.touched.zip && formik.errors.zip ? true : false}
            helperText={formik.touched.zip && formik.errors.zip ?
                    formik.errors.zip :
                    ""
            }
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid> */}
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
              </Grid>
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end',
            
        }}>

               
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
                    {'Next'}
                </Button>}
                                      
                </Box>
              </form>
    </React.Fragment>
  );
}