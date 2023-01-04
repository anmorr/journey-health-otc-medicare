import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Main from '../../layout/Main/Main';
// import Main from 'layouts/Main';
// import Container from 'components/Container';
import Container from '../../components/Container';
import { Content, Footer, Headline } from './components';

const Faq = () => {
  const theme = useTheme();
  return (
    <Main>
      <Box>
        <Box
          sx={{
            backgroundColor: '#f7faff',
            backgroundImage: `linear-gradient(120deg, ${'#ffffff'} 0%, ${'#f7faff'} 100%)`,
            marginTop: -13,
            paddingTop: 13,
          }}
        >
          <Container>
            <Headline />
          </Container>
        </Box>
        <Container maxWidth={800}>
          <Content />
        </Container>
        {/* <Box bgcolor={'#f7faff'}>
          <Container>
            <Footer />
          </Container>
        </Box> */}
      </Box>
    </Main>
  );
};

export default Faq;
