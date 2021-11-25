import { useNavigate } from 'react-router-dom';

import { Form } from './';

import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/user';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, pass) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
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
        title='sign in'
        handleClick={handleLogin} />
    </>
  );
};

export default Login;
