import React from 'react';
import { Navigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/actions/user';

import { useAuth } from '../hooks/useAuth';

function HomePage() {

  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();

  console.log(isAuth);

  return isAuth ? (
    <>
      <h1>Welcome!</h1>

      <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
    </>
  )
    : (
      <div>
        HomePage
        <Navigate to='/login' />
      </div>
    )
}

export default HomePage;
