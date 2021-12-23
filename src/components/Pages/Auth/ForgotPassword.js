import React from 'react';
import HomeHeader from '../../Layout/Header/HomeHeader';
import Footer from '../../Layout/Footer/Footer'
import ForgotPasswordSection from '../../Utils/Auth/Section/ForgotPasswordSection'
import './Auth.css'

export default () => {
  return (
      <>
          <div className='classic-form-page' id='login'>
              <HomeHeader />
              <ForgotPasswordSection />
          </div>
          <Footer />
      </>
  )
}