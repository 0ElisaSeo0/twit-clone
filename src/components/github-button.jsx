import {
  GithubAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';
import styled from 'styled-components';
import { auth } from '../firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Error } from './auth-components';

const Button = styled.span`
  margin-top: 50px;
  background-color: white;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 50px;
  width: 100%;
  color: black;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Logo = styled.img`
  height: 25px;
`;

export default function GithubButton() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      console.log(auth.currentUser);
      if (auth.currentUser) {
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  return (
    <>
      <Button onClick={onClick}>
        <Logo src="/github-logo.svg" />
        Continue with Github
      </Button>
      {error !== '' ? <Error>{error}</Error> : null}
    </>
  );
}
