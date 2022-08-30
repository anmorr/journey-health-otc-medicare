import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
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

  const router = useRouter()
  const pathname = router.pathname

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Link href={"/"}>
          <Box
            component={'img'}
            src={"https://journey-health-images.s3.us-west-1.amazonaws.com/journey_health_image.webp"}
            height={1}
            width={1}
        />
        </Link>
      </Box>
          
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        {/* <Box>
          <NavItem
            title={'Landings'}
            id={'landing-pages'}
            items={landingPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Company'}
            id={'company-pages'}
            items={companyPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Account'}
            id={'account-pages'}
            items={accountPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Pages'}
            id={'secondary-pages'}
            items={secondaryPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Blog'}
            id={'blog-pages'}
            items={blogPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Portfolio'}
            id={'portfolio-pages'}
            items={portfolioPages}
            colorInvert={colorInvert}
          />
        </Box> */}

<Box marginLeft={4}>
          {pathname !== "/signup" &&
           
            <Button
            onClick={() => {router.push("/signup")}}
            variant="contained"
            // color="primary"
            component="a"
            target="blank"
            size="large"
            sx={{
              background: "#EC7E32",
              "&:hover": {
                //you want this to be the same as the backgroundColor above
                background: "#1D4E78",
                color: "#EC7E32"
            }
            }}
          >
            Sign Up Here
            </Button>
          }

          {pathname === "/signup" && <Button
            onClick={() => {router.push("/")}}
            variant="contained"
            // color="primary"
            component="a"
            target="blank"
            size="large"
            sx={{
              background: "#EC7E32",
              "&:hover": {
                //you want this to be the same as the backgroundColor above
                background: "#1D4E78",
                color: "#EC7E32"
              }
            }}
          >
            Home
          </Button>}
        </Box>

        
        <Box marginLeft={4}>
          {pathname !== "/contact" &&<Button
                onClick={() => {router.push("/contact")}}
            variant="contained"
            // color="primary"
            component="a"
            target="blank"
            size="large"
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
          </Button>}
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon

            sx={{
              color: "#EC7E32"
            }}
          
          />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
