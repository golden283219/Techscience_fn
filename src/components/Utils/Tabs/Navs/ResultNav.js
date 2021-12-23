import React from 'react';
import { 
  MDBNav, 
  MDBNavItem, 
  MDBNavLink 
} from 'mdbreact';

export default ({ toggleTabs, activeTab }) => {
  return (
      <div className="dashboard-nav-container">
          <MDBNav pills className="nav-justified pills-outline-info container">
              <MDBNavItem className="ml-0">
                  <MDBNavLink link to="#" active={ activeTab === '1' } onClick={ toggleTabs('1') } className='z-depth-1' >
                      Pending
                  </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                  <MDBNavLink link to="#" active={ activeTab === '2' } onClick={ toggleTabs('2') } className='z-depth-1' >
                      Assignment
                  </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                  <MDBNavLink link to="#" active={ activeTab === '3' } onClick={ toggleTabs('3') } className='z-depth-1' >
                      Requested
                  </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                  <MDBNavLink link to="#" active={ activeTab === '4' } onClick={ toggleTabs('4') } className='z-depth-1' >
                      Graded
                  </MDBNavLink>
              </MDBNavItem>
          </MDBNav>
      </div>
  )
}