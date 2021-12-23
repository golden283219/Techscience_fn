import React from 'react';
import HomeHeader from '../../Layout/Header/HomeHeader';
import Footer from '../../Layout/Footer/Footer'
import ChangePasswordSection from '../../Utils/Auth/Section/ChangePasswordSection'
import './Auth.css'

const ChangePassword = () => {
  return (
      <>
          <div className='classic-form-page' id='login'>
              <HomeHeader />
              <ChangePasswordSection />
          </div>
          <Footer />
      </>
  )
}

export default ChangePassword;
