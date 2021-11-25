import { Form } from './';

import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/user';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {

  const dispatch = useDispatch();

  const handleRegister = (email, pass) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
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
        title='register'
        handleClick={handleRegister} />
    </>
  );
};

export default SignUp;