import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';

import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  const router = useRouter();

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={"https://journey-health-images.s3.us-west-1.amazonaws.com/journey_health_image.webp"}
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        {/* <Box>
          <NavItem title={'Landings'} items={landingPages} />
        </Box>
        <Box>
          <NavItem title={'Company'} items={companyPages} />
        </Box>
        <Box>
          <NavItem title={'Pages'} items={secondaryPages} />
        </Box>
        <Box>
          <NavItem title={'Account'} items={accountPages} />
        </Box>
        <Box>
          <NavItem title={'Blog'} items={blogPages} />
        </Box>
        <Box>
          <NavItem title={'Portfolio'} items={portfolioPages} />
        </Box> */}
        {/* <Box marginTop={2}>
          <Button
            size={'large'}
            variant="outlined"
            fullWidth
            component="a"
            href="/docs/introduction"
          >
            Documentation
          </Button>
        </Box> */}
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            fullWidth
            component="a"
            target="blank"
            onClick={() => {router.push("/signup")}}
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
          
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            fullWidth
            component="a"
            target="blank"
            onClick={() => {router.push("/contact")}}
            sx={{
              background: "#EC7E32",
              "&:hover": {
                //you want this to be the same as the backgroundColor above
                background: "#1D4E78",
                color: "#EC7E32"
            }
            }}
          
          >
            Contact Us
          </Button>
          
        </Box>
        <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            fullWidth
            component="a"
            target="blank"
            onClick={() => {router.push("/faq")}}
            sx={{
              background: "#EC7E32",
              "&:hover": {
                //you want this to be the same as the backgroundColor above
                background: "#1D4E78",
                color: "#EC7E32"
            }
            }}
          
          >
            FAQ
          </Button>
          
        </Box>
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
