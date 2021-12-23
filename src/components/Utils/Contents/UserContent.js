import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UserNav from '../Tabs/Navs/UserNav'
import UserPane from '../Tabs/Panes/User/UserPane'
import MembershipPane from '../Tabs/Panes/User/MembershipPane'
import RolePane from '../Tabs/Panes/User/RolePane'
import { MDBTabContent } from 'mdbreact';

export default () => {
  const role = useSelector(state => state.auth.role)
  const [ activeTab, setActiveTab ] = useState('1')

  const toggleTabs = tab => () => {
    if (activeTab !== tab)
      return setActiveTab(tab)
  };

  if (role === 2)
    return (
        <div className="classic-tabs">
            <MDBTabContent activeItem={ '1' }>
                <UserPane />
            </MDBTabContent>
        </div>
    )

  return (
      <div className="classic-tabs">
          <UserNav toggleTabs={ toggleTabs } activeTab={ activeTab } />
          <MDBTabContent activeItem={ activeTab }>
              <UserPane />
              <MembershipPane />
              <RolePane />
          </MDBTabContent>
      </div>
  )
}