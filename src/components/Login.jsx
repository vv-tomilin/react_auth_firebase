import { Form } from './';

import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/user';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const dispatch = useDispatch();

  const handleLogin = (email, pass) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then((data) => {
        console.log('Data:', data);
      })
      .catch((error) => {
        console.log('Error', error);
      })
  };

  return (
    <>
      <Form
        title='sign in'
        handleClick={handleLogin} />
    </>
  );
};

export default Login;
