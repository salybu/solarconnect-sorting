import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { bubbleSort, selectionSort, insertionSort } from 'utils/sorting';
import Timer from 'components/Timer';

const sortTypeToMethod = {
  bubble: bubbleSort,
  select: selectionSort,
  insert: insertionSort,
};

const Home = () => {
  const [inputNumbers, setInputNumbers] = useState('');
  const [sortInfo, setSortInfo] = useState({
    type: 'bubble',
    resultAsc: null,
    resultDesc: null,
  });

  const [calculating, setCalculating] = useState(false);

  const onChangeInputNumbers = (e) => {
    if (calculating) return;

    const { value } = e.target;

    if (!value || value === value.match(/[0-9]+,?/g)?.join('')) {
      setInputNumbers(value);
    }
  };

  const onChangeSortInfo = (e) => {
    const { value } = e.target;

    setSortInfo({
      ...sortInfo,
      type: value,
    });
  };

  const onStartSorting = (e) => {
    e.preventDefault();

    if (calculating) return;

    setCalculating(true);

    let result = inputNumbers;

    if (inputNumbers[inputNumbers.length - 1] === ',') {
      result = inputNumbers.slice(0, -1);
      setInputNumbers(result);
    }

    getSortResult(true, result);
  };

  const getSortResult = (isAsc = true, input) => {
    const data = input.split(',').map((elem) => parseInt(elem));
    const sortMethod = sortTypeToMethod[sortInfo.type];
    const result = sortMethod(data, isAsc).toString().replaceAll(',', ', ');

    if (isAsc) {
      setSortInfo({
        ...sortInfo,
        resultAsc: result,
        resultDesc: null,
      });
    } else {
      setSortInfo({
        ...sortInfo,
        resultDesc: result,
      });
    }
  };

  useEffect(() => {
    if (sortInfo.resultAsc) {
      const timer = setTimeout(() => {
        getSortResult(false, inputNumbers);
        setCalculating(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [sortInfo.resultAsc, calculating]);

  return (
    <SortingMachineBox>
      <Timer locale='ko-KR' />
      <form onSubmit={onStartSorting}>
        <InputField>
          <input type='text' name='numbers' value={inputNumbers} required autoComplete='off' onChange={onChangeInputNumbers} />
          <label htmlFor='numbers'>숫자 입력</label>
        </InputField>
        <ResultField>
          <h1>결과 (오름차순)</h1>
          <div>{sortInfo.resultAsc}</div>
        </ResultField>
        <ResultField>
          <h1>결과 (내림차순)</h1>
          <div>{calculating ? '계산중...' : sortInfo.resultDesc}</div>
        </ResultField>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SelectField name='type' value={sortInfo.type} disabled={calculating} onChange={onChangeSortInfo}>
            <option value='bubble'>버블정렬</option>
            <option value='select'>선택정렬</option>
            <option value='insert'>삽입정렬</option>
          </SelectField>
          <StartButton type='submit'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            시작
          </StartButton>
        </div>
      </form>
      <Timer locale='en-US' />
    </SortingMachineBox>
  );
};

const SortingMachineBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 520px;
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

const ResultField = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
  color: #fff;
  & h1 {
    color: #03e9f4;
  }
  & div {
    padding: 10px 0;
  }
`;

const SelectField = styled.select`
  outline: none;
  border: 1px solid #03e9f4;
  border-radius: 8px;
  background: transparent;
  padding: 10px 20px;
  font-size: 16px;
  width: 180px;
  height: 40px;
  text-align-last: center;
  text-align: center;
  -ms-text-align-last: center;
  -moz-text-align-last: center;
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
  letter-spacing: 4px;
  width: 120px;

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
