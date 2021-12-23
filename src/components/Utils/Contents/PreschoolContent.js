import React, { useState } from 'react';
import { MDBTabContent } from 'mdbreact';
import PreschoolNav from '../Tabs/Navs/PreschoolNav'
import CategoryPane from '../Tabs/Panes/Preschool/CategoryPane'
import TextToSpeechPane from '../Tabs/Panes/Preschool/TextToSpeechPane'
import MissingLettersPane from '../Tabs/Panes/Preschool/MissingLettersPane'
import ArithmeticsPane from '../Tabs/Panes/Preschool/ArithmeticsPane'

const UserContent = () => {
  const [ activeTab, setActiveTab ] = useState('1')

  const toggleTabs = tab => () => {
    if (activeTab !== tab)
      return setActiveTab(tab)
  };

  return (
      <div className="classic-tabs">
          <PreschoolNav toggleTabs={ toggleTabs } activeTab={ activeTab } />
          <MDBTabContent activeItem={ activeTab }>
              <CategoryPane />
              <TextToSpeechPane />
              <MissingLettersPane />
              <ArithmeticsPane />
          </MDBTabContent>
      </div>
  )
}

export default UserContent