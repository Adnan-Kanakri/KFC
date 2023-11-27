import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { ReactComponent as Logo } from '../../../assets/icon/403.svg';

const Error403 = () => {
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
        <h3>Unauthorized</h3>
        <div className='error-para'>
          <p className='mb-0'>You are not authorized for this page!</p>
        </div>
        <Button type='primary' className='error-btn' onClick={onGoBackToHome}>
          GO To HomePage
        </Button>
      </div>
    </div>

  );
};

export default Error403;
