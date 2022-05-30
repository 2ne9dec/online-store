import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { registration } from '../../redux/actions/user';
import './Login.scss';
import Input from '../input/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isCreate, setIsCreate] = useState(false);

  const createHandler = (e) => {
    e.preventDefault();
    setIsCreate(!isCreate);
  };

  const handleRegistration = () => {
    registration(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='login _container'>
      <form className='form'>
        <Link className='form__close' to='/'>
          <AiOutlineClose />
        </Link>

        {isCreate ? (
          <label className='form__title'>Registration</label>
        ) : (
          <label className='form__title'>Login</label>
        )}

        <Input value={email} setValue={setEmail} type='text' placeholder='Email' />
        <Input value={password} setValue={setPassword} type='password' placeholder='Password...' />

        {isCreate ? (
          <button type='button' className='form__btn' onClick={handleRegistration}>
            Registration
          </button>
        ) : (
          <button type='button' className='form__btn'>
            Login
          </button>
        )}

        {!isCreate ? (
          <div className='form__create'>
            <Link to='/login' className='form__create-text' onClick={createHandler}>
              Sign up
            </Link>
            <span>if you don't have an account yet.</span>
          </div>
        ) : (
          <div className='form__registrate'>
            <Link to='/registration' className='form__registrate-text' onClick={createHandler}>
              Sign in
            </Link>
            <span>if you already have an account.</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
