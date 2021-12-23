import React from 'react';
import HomeHeader from '../../Layout/Header/HomeHeader';
import Footer from '../../Layout/Footer/Footer'
import ResetPasswordSection from '../../Utils/Auth/Section/ResetPasswordSection'
import './Auth.css'

export default () => {
  return (
      <>
          <div className='classic-form-page' id='login'>
              <HomeHeader />
              <ResetPasswordSection />
          </div>
          <Footer />
      </>
  )
}