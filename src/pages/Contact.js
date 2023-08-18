import React from 'react';
import Layout from '../components/Layout/Layout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', // Ensure the container takes up at least the full viewport height
        }}
      >
        <Box sx={{ my: 5, ml: 10, '& h4': { fontWeight: 'bold', mb: 2 } }}>
          <Typography sx={{ ml: -7 }} variant="h4">
            Our Location
          </Typography>
          <p>
            No:6, 133, Arcot Rd,
            <br />
            near Porur Signal, Devi Nagar,
            <br />
            Porur, Chennai, Tamil Nadu 600116
          </p>
        </Box>
        <Box
          sx={{
            m: 3,
            width: '600px',
            ml: 10,
            '@media (max-width:600px)': {
              width: '300px',
            },
          }}
        ></Box>

        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: 'black', color: 'white' }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: 'skyblue', pt: 1 }} />{' '}
                  info@copperkitchen.in
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: 'green', pt: 1 }} /> +91-96771 23851
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ flex: 1 }} />{' '}
      {/* Flexible space to push the footer to the bottom */}
    </Layout>
  );
};

export default Contact;
