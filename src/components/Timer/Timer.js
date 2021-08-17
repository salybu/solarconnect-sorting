import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import twoDigitsForTimer from 'utils/twoDigitsForTimer';

const Timer = ({ locale }) => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const clock = () => {
      let time = new Date();

      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZoneName: 'long' };

      if (locale === 'en-US') {
        // 미국 동부 표준시(뉴욕)로 타임존 세팅.
        options.timeZone = 'America/New_York';

        const nyDate = time.toLocaleDateString(locale, options);

        let nyTime;

        if (nyDate.includes('Daylight')) {
          // 서머타임이 적용되는 경우 북미 동부 표준시는 한국 표준시보다 13시간 느리다.
          nyTime = new Date(time.getTime() - 13 * 60 * 60 * 1000);
        } else {
          // 일반적인 북미 동부 표준시는 한국 표준시보다 14시간 느리다.
          nyTime = new Date(time.getTime() - 14 * 60 * 60 * 1000);
        }

        const hours = nyTime.getHours();
        const minutes = nyTime.getMinutes();
        const seconds = nyTime.getSeconds();

        setTime(`${twoDigitsForTimer(hours)}:${twoDigitsForTimer(minutes)}:${twoDigitsForTimer(seconds)}`);
      } else if (locale === 'ko-KR') {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        setTime(`${twoDigitsForTimer(hours)}:${twoDigitsForTimer(minutes)}:${twoDigitsForTimer(seconds)}`);
      }

      setDate(time.toLocaleDateString(locale, options));
    };

    setInterval(clock, 1000);

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <StyledTimer>
      <div>{date}</div>
      <div>{time}</div>
    </StyledTimer>
  );
};

const StyledTimer = styled.div`
  width: 100%;
  margin: 2rem 0;
  padding: 1rem 0.5rem;
  text-align: center;
  border: 2px dotted #03e9f4;
  color: white;
  font-size: 2rem;

  & > div:first-child {
    font-size: 1.25rem;
    margin-bottom: 6px;
  }
`;

Timer.propTypes = {
  locale: PropTypes.oneOf(['ko-KR', 'en-US']),
};

export default Timer;
