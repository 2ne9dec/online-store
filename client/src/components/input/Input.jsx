import React from 'react';
import './Input.scss';

const Input = ({ value, setValue, type, placeholder }) => {
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      className='input'
      value={value}
      onChange={onChangeHandler}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
