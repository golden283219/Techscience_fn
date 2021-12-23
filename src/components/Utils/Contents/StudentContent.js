import React, { useState } from 'react';
import { MDBTabContent } from 'mdbreact';
import StudentNav from '../Tabs/Navs/StudentNav'
import PendingPane from '../Tabs/Panes/Student/PendingPane'
import AssignedPane from '../Tabs/Panes/Student/AssignedPane'
import RequestedPane from '../Tabs/Panes/Student/RequestedPane'
import GradedPane from '../Tabs/Panes/Student/GradedPane'
import CodeSandboxPane from '../Tabs/Panes/Student/CodeSandboxPane'

export default () => {
  const [ activeTab, setActiveTab ] = useState('1')

  const toggleTabs = tab => () => {
    if (activeTab !== tab)
      return setActiveTab(tab)
  };

  return (
      <div className="classic-tabs">
          <StudentNav toggleTabs={ toggleTabs } activeTab={ activeTab } />
          <MDBTabContent activeItem={ activeTab }>
              <PendingPane />
              <AssignedPane />
              <RequestedPane />
              <GradedPane />
              <CodeSandboxPane />
          </MDBTabContent>
      </div>
  )
}