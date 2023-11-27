import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { ReactComponent as Logo } from '../../../assets/icon/404.svg';

const Error404 = () => {
  const navigate = useNavigate();

  const onGoBackToHome = () => {
    navigate('/');
  };

  return (

    <div className='error-container' key='a'>
      <div className='error-img'>
        <Logo />
      </div>
      <div className='error-content'>
        <h3>
          404 Error
        </h3>
        <div className='error-para'>
          <p className='mb-0'>
            We can't find the page that
          </p>
          <p className='mb-0'>
            you are looking for.
          </p>
        </div>
        <Button type='primary' className='error-btn' onClick={onGoBackToHome}>
          GO To HomePage
        </Button>
      </div>
    </div>
  );
};

export default Error404;
