import React from 'react';
import { useSelector } from 'react-redux';
import { MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

const ExamNav = ({ toggleTabs, activeTab }) => {
  const role = useSelector(state => state.auth.role)

  return (
      <div className="dashboard-nav-container">
          <MDBNav pills className="nav-justified pills-outline-info container">
              <MDBNavItem>
                  <MDBNavLink link to="#" active={ activeTab === '1' } onClick={ toggleTabs('1') } className='z-depth-1'>
                      Exam
                  </MDBNavLink>
              </MDBNavItem>
              {role !== 2 ? 
                  <MDBNavItem className='outlined'>
                      <MDBNavLink link to="#" active={ activeTab === '2' } onClick={ toggleTabs('2') } className='z-depth-1'>
                          Exam Level
                      </MDBNavLink>
                  </MDBNavItem> : ''
        }
              <MDBNavItem>
                  <MDBNavLink link to="#" active={ activeTab === '3' } onClick={ toggleTabs('3') } className='z-depth-1'>
                      Course
                  </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                  <MDBNavLink link to="#" active={ activeTab === '4' } onClick={ toggleTabs('4') } className='z-depth-1'>
                      Subject
                  </MDBNavLink>
              </MDBNavItem>
          </MDBNav>
      </div>
  )
}

export default ExamNav