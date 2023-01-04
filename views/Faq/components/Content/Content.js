import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} variant={'h5'} color="#1D4E78">
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography color="#1D4E78" fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="#EC7F33">{item.subtitle}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const Content = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'General'}
          items={[
            {
              title: 'Am I eligible to receive tests?',
              subtitle:
                'Medicare covers and pays for 8 over-the-counter (OTC) COVID-19 tests at no cost to people with Medicare Part B, including those with Medicare Advantage (MA) plans. If you are not a Medicare member, or do not have Part B, please see https://covid.gov/tests to receive 4 OTC tests per houshold.',
            },
            {
              title: 'Is this a Medicare initiative and when did this start?',
              subtitle:
                "Yes, this is a Medicare initiative. Medicare will cover up to eight over-the-counter COVID-19 tests each calendar month, at no cost to you. Starting April 4, 2022, and through the end of the COVID-19 public health emergency(PHE), Medicare covers and pays for 8 over-the-counter (OTC) COVID-19 tests, every calendar month. For more info on the initiative, please see the following link: https://www.cms.gov/newsroom/fact-sheets/medicare-covers-over-counter-covid-19-tests",
            },
            {
              title: 'Is there any out of pocket cost for the tests?',
              subtitle:
                "Per this Medicare initiative, we only accept the Medicare payment amount as payment in full and do not collect any additional amounts from patients for tests provided within the quantity limit.",
            },
            {
              title: 'What is Journey Health?',
              subtitle:
                'Journey Health is a registerd Medicare Provider, comprised of a team of highly skilled healthcare professionals dedicated to keeping families together during their most vulnerable moments by treating patients’ medical needs in the comfort of the home. Journey Health is anchored by four pillars: Clinical Expertise, Operational Excellence, Patient and Family Engagement, and Tactical Innovation.',
            },
            // {
            //   title: 'Can I change plans later on?',
            //   subtitle:
            //     'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            // },
            // {
            //   title: 'Is this a subscription service?',
            //   subtitle:
            //     'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            // },
          ]}
        />
      </Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Enrollment and Shipping'}
          items={[
            {
              title: 'How do I enroll?',
              subtitle:
                'Once the Sign-Up form has been completed, we will perform a real-time eligibility check to confirm you are eligible. Once eligibililty is confirmed, you will be enrolled into the program and will receive 8 over-the-counter (OTC) COVID-19 tests at no cost, every calendar month.',
            },
            {
              title: 'How long does it take to receive my tests?',
              subtitle:
                'It usually takes between 3-5 business days to receive the tests.',
            },
            {
              title: 'What is your return policy?',
              subtitle:
                'Due to the nature of COVID-19, we do not accept any returns.',
            },
            {
              title: 'Can I cancel my recurring orders?',
              subtitle:
                'Yes. You can cancel your recurring orders at any time by calling us or emailing us using the information found on the contact page.',
            },
          ]}
        />
      </Box>
      {/* <Box>
        <FaqGroupItem
          title={'Security'}
          items={[
            {
              title: 'Can I purchase a gift certificate?',
              subtitle:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            },
            {
              title: 'What is your return policy?',
              subtitle:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            },
            {
              title: 'Do you sell gift cards?',
              subtitle:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            },
            {
              title: 'Can I change plans later on?',
              subtitle:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            },
            {
              title: 'Is this a subscription service?',
              subtitle:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            },
          ]}
        />
      </Box> */}
    </Box>
  );
};

export default Content;
