import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Home = () => {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    let { value } = e.target;

    if (!value || value === value.match(/[0-9]+,?/g)?.join('')) {
      setValue(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (value[value.length - 1] === ',') {
      alert('마지막 콤마를 제거해 주세요.');
      return;
    }

    let data = value.split(',').map((elem) => parseInt(elem));
  };

  return (
    <SortingMachineBox>
      <form onSubmit={onSubmit}>
        <InputField>
          <input type='text' name='numbers' value={value} required onChange={onChange} />
          <label htmlFor='numbers'>숫자 입력</label>
        </InputField>
        <StartButton type='submit'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          시작
        </StartButton>
      </form>
    </SortingMachineBox>
  );
};

const SortingMachineBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 480px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

const InputField = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }

  input:valid ~ label,
  input:focus ~ label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }
`;

const btnAnimation1 = keyframes`
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
`;

const btnAnimation2 = keyframes`
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
`;

const btnAnimation3 = keyframes`
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
`;

const btnAnimation4 = keyframes`
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
`;

const StartButton = styled.button`
  background: transparent;
  border: none;
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;

  &:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
  }

  & > span {
    position: absolute;
    display: block;
  }

  & > span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: ${btnAnimation1} 1s linear infinite;
  }

  & > span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: ${btnAnimation2} 1s linear infinite;
    animation-delay: 0.25s;
  }

  & > span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: ${btnAnimation3} 1s linear infinite;
    animation-delay: 0.5s;
  }

  & > span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: ${btnAnimation4} 1s linear infinite;
    animation-delay: 0.75s;
  }
`;

export default Home;