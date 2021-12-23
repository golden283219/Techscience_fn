import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeHeader from '../../Layout/Header/HomeHeader';
import Footer from '../../Layout/Footer/Footer'
import SignInSection from '../../Utils/Auth/Section/SignInSection'
import './Auth.css'

const SignIn = () => {
  const history = useHistory()
  const authenticated = useSelector(state => state.auth.role)

  useEffect(() => {
    if (!!authenticated)
      history.push('/')
  }, [ authenticated, history ])

  return (
      <>
          <div className='classic-form-page' id='login'>
              <HomeHeader />
              <SignInSection />
          </div>
          <Footer />
      </>
  )
}

export default SignIn;
