import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const GetStarted = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Typography
        variant="h4"
        color="#1D4E78"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 700,
        }}
      >
        Start receiving your tests today
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        sx={{ fontWeight: 400 }}
        align={'center'}
      >
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
        justifyContent={'center'}
        marginTop={4}
      >
        <Button
          component={'a'}
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
          href={'/signup'}
          sx={{
            background: "#EC7E32",
            "&:hover": {
              //you want this to be the same as the backgroundColor above
              background: "#1D4E78",
              color: "#EC7E32"
          }
            }}
          
        >
          Sign Up
        </Button>
        <Box
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 2 }}
          width={{ xs: '100%', md: 'auto' }}
        >
          {/* <Button
            component={'a'}
            href={'/docs/introduction'}
            variant="outlined"
            color="primary"
            size="large"
            fullWidth={isMd ? false : true}
          >
            Documentation
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
};

export default GetStarted;
