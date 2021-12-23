import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeHeader from '../../Layout/Header/HomeHeader';
import Footer from '../../Layout/Footer/Footer'
import SignUpSection from '../../Utils/Auth/Section/SignUpSection'
import './Auth.css'

const SignUp = () => {
  const history = useHistory()
  const authenticated = useSelector(state => state.auth.role)

  useEffect(() => {
    if(!!authenticated)
      history.push('/')
  }, [ authenticated, history ])
  
  return (
      <>
          <div className='classic-form-page' id='login'>
              <HomeHeader />
              <SignUpSection />
          </div>
          <Footer />
      </>
  )
}

export default SignUp;
