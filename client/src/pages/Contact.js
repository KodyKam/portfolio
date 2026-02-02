// client/src/pages/Contact.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import createContact from '../api/api-contact';
import {
  Snackbar,
  Alert,
  TextField,
  Button,
  Typography,
  Box,
  Link as MuiLink
} from '@mui/material';
import './Contact.css';

function Contact() {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const submitForm = async (data) => {
    console.log("Payload being sent:", data);
    try {
      const result = await createContact(data);
      console.log('✅ Contact saved:', result);
      reset();
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      console.error('❌ Submission failed:', err.message);
      alert("❌ Submission failed: " + err.message);
    }
  };

  return (
    <Box className="contact-container">
      <Typography variant="h4" component="h1" gutterBottom>
        Start a Project
      </Typography>

      <Typography sx={{ mb: 3 }}>
        Have an idea, a problem, or a system that needs fixing?  
        Fill this out and I’ll get back to you shortly.
      </Typography>

      <Box className="contact-panel" sx={{ textAlign: 'left', mb: 4 }}>
        <Typography>
          <strong>Email:</strong>{' '}
          <MuiLink href="mailto:kamara.alleyne@gmail.com">
            kamara.alleyne@gmail.com
          </MuiLink>
        </Typography>
        <Typography>
          <strong>Phone:</strong>{' '}
          <MuiLink href="tel:6477220548">(647) 722-0548</MuiLink>
        </Typography>
        <Typography>
          <strong>Location:</strong> Toronto, ON
        </Typography>
        <Typography>
          <strong>GitHub:</strong>{' '}
          <MuiLink
            href="https://github.com/kodykam"
            target="_blank"
            rel="noreferrer"
          >
            github.com/kodykam
          </MuiLink>
        </Typography>
      </Box>

      <form
        className="contact-form"
        onSubmit={handleSubmit(submitForm)}
        noValidate
      >
        <TextField
          label="First Name *"
          variant="standard"
          fullWidth
          margin="normal"
          error={!!errors.firstname}
          helperText={errors.firstname?.message}
          {...register('firstname', {
            required: 'First name is required',
            maxLength: { value: 20, message: 'Max 20 characters' }
          })}
        />

        <TextField
          label="Last Name *"
          variant="standard"
          fullWidth
          margin="normal"
          error={!!errors.lastname}
          helperText={errors.lastname?.message}
          {...register('lastname', {
            required: 'Last name is required',
            pattern: { value: /^[A-Za-z]+$/i, message: 'Only letters allowed' }
          })}
        />

        <TextField
          label="Age *"
          type="number"
          variant="standard"
          fullWidth
          margin="normal"
          error={!!errors.age}
          helperText={errors.age?.message}
          {...register('age', {
            required: 'Age is required',
            min: { value: 18, message: 'Minimum age is 18' },
            max: { value: 99, message: 'Maximum age is 99' }
          })}
        />

        <TextField
          label="Contact Number *"
          type="tel"
          variant="standard"
          fullWidth
          margin="normal"
          error={!!errors.contactNumber}
          helperText={errors.contactNumber?.message}
          {...register('contactNumber', {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: 'Enter 10–15 digits'
            }
          })}
        />

        <TextField
          label="Email Address *"
          type="email"
          variant="standard"
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Enter a valid email address'
            }
          })}
        />

        <TextField
          label="Tell me about your project *"
          variant="standard"
          fullWidth
          margin="normal"
          multiline
          rows={5}
          error={!!errors.message}
          helperText={errors.message?.message}
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 10, message: 'At least 10 characters' }
          })}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: '#3498db',
            '&:hover': { backgroundColor: '#2c80b4' }
          }}
        >
          Submit Inquiry
        </Button>

        <Button
          type="button"
          variant="contained"
          sx={{
            mt: 2,
            ml: 2,
            backgroundColor: '#1abc9c',
            '&:hover': { backgroundColor: '#16a085' }
          }}
          onClick={() => reset()}
        >
          Clear
        </Button>
      </form>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity="success"
          onClose={() => setOpenSnackbar(false)}
          sx={{ width: '100%' }}
        >
          Inquiry submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;