import React, { useState } from 'react';
import { auth, googleProvider, githubProvider } from './firebase'; // Ensure the path is correct
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = async () => {
    if (!isSignUp) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Logged in successfully', userCredential.user);
      } catch (error) {
        console.error('Login error', error.message);
      }
    } else {
      handleSignUp();
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Account created successfully', userCredential.user);
    } catch (error) {
      console.error('Sign up error', error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Logged in with Google', result.user);
    } catch (error) {
      console.error('Google login error', error.message);
    }
  };

  const handleGithubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      console.log('Logged in with GitHub', result.user);
    } catch (error) {
      console.error('GitHub login error', error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>{isSignUp ? 'Create Account' : 'Login'}</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>
        {isSignUp ? 'Create Account' : 'Login'}
      </button>

      <div className="social-login">
        <button onClick={handleGoogleLogin} className="google-btn">Login with Google</button>
        <button onClick={handleGithubLogin} className="github-btn">Login with GitHub</button>
      </div>

      <p>
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}
        <span
          className="toggle-link"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? 'Login' : 'Create Account'}
        </span>
      </p>
    </div>
  );
};

export default LoginPage;
