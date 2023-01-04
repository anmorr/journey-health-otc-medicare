import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  return (
    <Box>
      <Typography
        sx={{
          // textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'#1D4E78'}
        align={'center'}
      >
        Frequently Asked Questions
      </Typography>
      <Typography variant="h2" align={'center'} color={'#1D4E78'} fontWeight={700} gutterBottom>
        Have a question?
      </Typography>
      <Typography variant="h6" align={'center'} color={'#EC7F33'}>
        Search our FAQ for answers to anything you might ask. For any additional information, please feel free to reach out to us.
      </Typography>
    </Box>
  );
};

export default Headline;
