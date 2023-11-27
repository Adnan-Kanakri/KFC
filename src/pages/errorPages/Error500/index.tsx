import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { ReactComponent as Logo } from '../../../assets/icon/500.svg';

const Error500 = () => {
  const navigate = useNavigate();

  const onGoBackToHome = () => {
    navigate(-1);
  };

  return (

    <div className='error-container' key='a'>
      <div className='error-img'>
        <Logo />
      </div>
      <div className='error-content'>
        <h3>
          500 Error        </h3>
        <div className='error-para'>
          <p className='mb-0'>
            We are facing internal server error
          </p>
          <p className='mb-0'>
            and working towards to fix it soon.
          </p>
        </div>
        <Button type='primary' className='error-btn' onClick={onGoBackToHome}>
          Go To HomePage
        </Button>
      </div>
    </div>
  );
};

export default Error500;
