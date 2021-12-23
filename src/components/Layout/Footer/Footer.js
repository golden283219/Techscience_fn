import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  ToastContainer,
  toast
} from 'mdbreact';

const FooterPagePro = () => {
  const result = useSelector(state => state.result.result)

  useEffect(() => {
    if (!!result) {
      if (!result.scs) 
        toast.warn(result.msg)
      else
        toast.success(result.msg)
    }
  }, [ result ])

  return (
      <MDBFooter color="elegant-color-dark" className="font-small pt-4">
          <MDBContainer className="text-center text-md-left">
              <MDBRow className="text-center text-md-left mt-3 pb-3">
                  <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                          Techscienceonline
                      </h6>
                      <p>
                          We Acknowledge The Fact That Every Human Being Has The Potential Of Contributing Something To World Our Performance BAse APPRoach Enables This Human Quality
                      </p>
                  </MDBCol>
                  <hr className="w-100 clearfix d-md-none" />
                  <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold text-white">Information</h6>
                      <p>
                          <a href="#!">About Us</a>
                      </p>
                      <p>
                          <a href="#!">Features</a>
                      </p>
                      <p>
                          <a href="#!">Course</a>
                      </p>
                      <p>
                          <a href="#!">Event</a>
                      </p>
                  </MDBCol>
                  <hr className="w-100 clearfix d-md-none" />
                  <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                          Student Help
                      </h6>
                      <p>
                          <a href="#!">Get Started</a>
                      </p>
                      <p>
                          <a href="#!">My Questions</a>
                      </p>
                      <p>
                          <a href="#!">Download Files</a>
                      </p>
                      <p>
                          <a href="#!">Latest Course</a>
                      </p>
                  </MDBCol>
                  <hr className="w-100 clearfix d-md-none" />
                  <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
                      <h6 className="text-uppercase mb-4 font-weight-bold text-white">Contact</h6>
                      <p>
                          <i className="fa fa-home mr-3" /> P.O. Box 320 East Stroudsburg Pa 18301, USA
                      </p>
                      <p>
                          <i className="fa fa-envelope mr-3" /> asmall@techscienceonline.com
                      </p>
                      <p>
                          <i className="fa fa-phone mr-3" /> (570) 982-6567
                      </p>
                  </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow className="d-flex align-items-center">
                  <MDBCol md="8" lg="8">
                      <p className="text-center text-md-left grey-text">
                          &copy; {new Date().getFullYear()} Copyright:{' '}
                          <a href="https://www.MDBootstrap.com"> Techscienceonline.com </a>
                      </p>
                  </MDBCol>
                  <MDBCol md="4" lg="4" className="ml-lg-0">
                      <div className="text-center text-md-right">
                          <ul className="list-unstyled list-inline">
                              <li className="list-inline-item">
                                  <button className="btn btn-floating btn-sm rgba-white-slight mx-1">
                                      <i className="fab fa-facebook-f" />
                                  </button>
                              </li>
                              <li className="list-inline-item">
                                  <button className="btn btn-floating btn-sm rgba-white-slight mx-1">
                                      <i className="fab fa-twitter" />
                                  </button>
                              </li>
                              <li className="list-inline-item">
                                  <button className="btn btn-floating btn-sm rgba-white-slight mx-1">
                                      <i className="fab fa-google-plus" />
                                  </button>
                              </li>
                              <li className="list-inline-item">
                                  <button className="btn btn-floating btn-sm rgba-white-slight mx-1">
                                      <i className="fab fa-linkedin-in" />
                                  </button>
                              </li>
                          </ul>
                      </div>
                  </MDBCol>
              </MDBRow>
          </MDBContainer>
          <ToastContainer
        position="bottom-center"
        icon="bell"
        autoClose={ 5000 }
        hideProgressBar={ false }
        closeOnClick
        draggable
        pauseOnHover
        className="text-center"
      />
      </MDBFooter>
  );
}

export default FooterPagePro;