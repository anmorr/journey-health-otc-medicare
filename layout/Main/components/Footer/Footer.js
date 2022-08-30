import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const router = useRouter()
  const pathname = router.pathname


  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            title="Journey Health"
            width={80}
            onClick={() => {router.push("/")}}
          >
            <Box
              component={'img'}
              src={"https://journey-health-images.s3.us-west-1.amazonaws.com/journey_health_image.webp"}
              height={1}
              width={1} 
              
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                Home
              </Link>
            </Box>
            {/* {pathname !== "/contact" && <Box marginTop={1}>
              <Button
                onClick={() => {router.push("/signup")}}
                variant='contained'
                sx={{
                  background: "#EC7E32",
                  "&:hover": {
                    //you want this to be the same as the backgroundColor above
                    background: "#1D4E78",
                    color: "#EC7E32"
                  }
                }}
              
              >
                Sign Up Now
              </Button>
            </Box>} */}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; Journey Health. 2022. All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorized service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
