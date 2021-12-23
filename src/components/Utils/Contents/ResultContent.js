import React, { useState } from 'react';
import { MDBTabContent } from 'mdbreact';
import ResultNav from '../Tabs/Navs/ResultNav'
import PendingPane from '../Tabs/Panes/Result/PendingPane'
import AssignedPane from '../Tabs/Panes/Result/AssignedPane'
import RequestedPane from '../Tabs/Panes/Result/RequestedPane'
import GradedPane from '../Tabs/Panes/Result/GradedPane'

export default () => {
  const [ activeTab, setActiveTab ] = useState('1')

  const toggleTabs = tab => () => {
    if (activeTab !== tab)
      return setActiveTab(tab)
  };

  return (
      <div className="classic-tabs">
          <ResultNav toggleTabs={ toggleTabs } activeTab={ activeTab } />
          <MDBTabContent activeItem={ activeTab }>
              <PendingPane />
              <AssignedPane />
              <RequestedPane />
              <GradedPane />
          </MDBTabContent>
      </div>
  )
}