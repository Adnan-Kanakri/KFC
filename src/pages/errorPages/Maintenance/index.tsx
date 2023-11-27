import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { ReactComponent as Logo } from '../../../assets/icon/maintenance.svg';

const Maintenance = () => {
  const navigate = useNavigate();

  const onGoBackToHome = () => {
    navigate(-1);
  };

  return (
    <div className='error-container' key='a'>
      <div className='error-img-lg'>
        <Logo />
      </div>
      <div className='error-content error-content-lg'>
        <h3>
          Our site is under maintenance        </h3>
        <div className='error-para'>
          <p className='mb-0'>
            Our site is currently under scheduled          </p>
          <p className='mb-0'>
            maintenance. We will be back shortly.          </p>
        </div>
        <Button type='primary' className='error-btn' onClick={onGoBackToHome}>
          Go To HomePage
        </Button>
      </div>
    </div>
  );
};

export default Maintenance;
