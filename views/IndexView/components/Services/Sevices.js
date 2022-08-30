/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';

const mock = [
  {
    title: 'Provide Your Information',
    subtitle:
      'Once your information is received, your part is done!',
    icon: (
      <LooksOneIcon sx={{
        color: "#EC7E32",
        fontSize: 40
      }} />
      // <svg
      //   height={24}
      //   width={24}
      //   xmlns="http://www.w3.org/2000/svg"
      //   fill="none"
      //   viewBox="0 0 24 24"
      //   stroke="currentColor"
      // >
      //   <path
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //     strokeWidth={2}
      //     d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
      //   />
      // </svg>
    ),
  },
  {
    title: 'We Bill Medicare',
    subtitle:
      'We submit a clain to Medicare. There is $0 cost to you.',
    icon: (
      <LooksTwoIcon sx={{
        color: "#EC7E32",
        fontSize: 40
      }} />
      // <svg
      //   height={24}
      //   width={24}
      //   xmlns="http://www.w3.org/2000/svg"
      //   fill="none"
      //   viewBox="0 0 24 24"
      //   stroke="currentColor"
      // >
      //   <path
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //     strokeWidth={2}
      //     d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      //   />
      // </svg>
    ),
  },
  {
    title: 'We will send the tests to your home.',
    subtitle:
      'To ensure you are able to remain safe. We will send 8 tests each month for the duration of the Public Health Emergency.',
    icon: (
      <Looks3Icon sx={{
        color: "#EC7E32",
        fontSize: 40
      }} />
      // <svg
      //   height={24}
      //   width={24}
      //   xmlns="http://www.w3.org/2000/svg"
      //   fill="none"
      //   viewBox="0 0 24 24"
      //   stroke="currentColor"
      // >
      //   <path
      //     strokeLinecap="round"
      //     strokeLinejoin="round"
      //     strokeWidth={2}
      //     d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      //   />
      // </svg>
    ),
  },
];
// #EC7E32
const Services = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h4"
            color="#1D4E78"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Interested in how the process works...
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="#EC7E32"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            Under the current Public Health Emergency, Medicare will cover at-home COVID-19 test kits every month with no out-of-pocket fees to you, even if you have a deductible.
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box width={1} height={1}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  color="#1D4E78"
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="#1D4E78">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
