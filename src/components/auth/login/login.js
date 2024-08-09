import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Box, Divider } from '@mui/material';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { useAuth } from '../../../contexts/authContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const { userLoggedIn } = useAuth();
  const {currentUser} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password).catch(err => {
        setErrorMessage(err.message);
        setIsSigningIn(false);
      });
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      // navigate("/")
      doSignInWithGoogle().catch(err => {
        setErrorMessage(err.message);
        setIsSigningIn(false);
      });
    }
  };
  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      {userLoggedIn && navigate("/")}
      <Box sx={{ boxShadow: 3, p: 4, borderRadius: 2 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Welcome Back
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && (
            <Typography color="error" variant="body2">
              {errorMessage}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            disabled={isSigningIn}
          >
            {isSigningIn ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>
        <Typography align="center" variant="body2" sx={{ mt: 2 }}>
          Don't have an account? <Link to={'/signUp'}>Sign up</Link>
        </Typography>
        <Divider sx={{ my: 2 }}>OR</Divider>
        <Button
        
          fullWidth
          variant="outlined"
          color="primary"
          onClick={onGoogleSignIn}
          disabled={isSigningIn}
          startIcon={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google logo"
              style={{ width: 20, height: 20 }}
            />
          }
        >
          {isSigningIn ? 'Signing In...' : 'Continue with Google'}
        </Button>
      </Box>
    </Container>
  );
}
