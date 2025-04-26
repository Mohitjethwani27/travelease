import React, { useRef } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import emailjs from 'emailjs-com';

function GetInTouch() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_c94otfj',
      'template_c6u70og',
      form.current,
      'qaSHayWWsFF9QS146'
    )
    .then((result) => {
      console.log(result.text);
      alert('✅ Message sent successfully!');
    }, (error) => {
      console.error("EmailJS error:", error);
      alert('❌ Something went wrong. Please try again.');
    });

    e.target.reset();
  };

  return (
    <Box sx={{ textAlign: 'center', padding: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#222', marginBottom: 2 }}>
        Contact Us Anytime
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 3 }}>
        Have a question? We’re here to help! Drop us a message and we’ll get back to you shortly.
      </Typography>

      <Paper elevation={3} sx={{ maxWidth: 600, margin: '0 auto', padding: 4, borderRadius: 3 }}>
        <form ref={form} onSubmit={sendEmail}>
          <TextField name="name" fullWidth label="Your Name" variant="outlined" margin="normal" required />
          <TextField name="email" fullWidth label="Your Email" variant="outlined" margin="normal" required />
          <TextField name="title" fullWidth label="Subject" variant="outlined" margin="normal" required />
          <TextField name="message" fullWidth label="Message" variant="outlined" margin="normal" multiline rows={4} required />

          <Button 
            type="submit"
            variant="contained" 
            sx={{ 
              marginTop: 2, 
              backgroundColor: '#FFA500',
              '&:hover': { backgroundColor: '#e69500' } 
            }}
          >
            Send Message
          </Button>
        </form>
      </Paper>
      <Grid container spacing={3} sx={{ marginTop: 4, justifyContent: 'center' }}>
  {/* Email */}
  <Grid item xs={12} sm={4}>
    <Box display="flex" alignItems="center" justifyContent="center">
      <Email sx={{ marginRight: 1, color: '#FFA500' }} />
      <Typography
        variant="body1"
        component="a"
        href="mailto:contact@travelease.com"
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          '&:hover': { textDecoration: 'underline' }
        }}
      >
        contact@travelease.com
      </Typography>
    </Box>
  </Grid>

  {/* Phone */}
  <Grid item xs={12} sm={4}>
    <Box display="flex" alignItems="center" justifyContent="center">
      <Phone sx={{ marginRight: 1, color: '#FFA500' }} />
      <Typography
        variant="body1"
        component="a"
        href="tel:+1234567890"
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          '&:hover': { textDecoration: 'underline' }
        }}
      >
        +1 234 567 890
      </Typography>
    </Box>
  </Grid>

  {/* Location */}
  <Grid item xs={12} sm={4}>
    <Box display="flex" alignItems="center" justifyContent="center">
      <LocationOn sx={{ marginRight: 1, color: '#FFA500' }} />
      <Typography
        variant="body1"
        component="a"
        href="https://www.google.com/maps/search/?api=1&query=Kota,+Rajasthan"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          '&:hover': { textDecoration: 'underline' }
        }}
      >
        KOTA, RAJASTHAN
      </Typography>
    </Box>
  </Grid>
</Grid>

    </Box>
  );
}

export default GetInTouch;
