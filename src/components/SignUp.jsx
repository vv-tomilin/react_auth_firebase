import { useNavigate } from 'react-router-dom';

import { Form } from './';

import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/user';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, pass) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then(({ user }) => {
        console.log(user);

        dispatch(setUser({
          email: user.email,
          token: user.accessToken,
          id: user.uid
        }));

        navigate('/');
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