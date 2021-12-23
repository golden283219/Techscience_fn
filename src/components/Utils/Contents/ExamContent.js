import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ExamNav from '../Tabs/Navs/ExamNav';
import CoursePane from '../Tabs/Panes/Exam/CoursePane';
import ExamPane from '../Tabs/Panes/Exam/ExamPane';
import SubjectPane from '../Tabs/Panes/Exam/SubjectPane';
import ExamLevelPane from '../Tabs/Panes/Exam/ExamLevelPane';
import { MDBTabContent } from 'mdbreact';

const ExamContent = () => {
	const role = useSelector(state => state.auth.role);
	const [ activeTab, setActiveTab ] = useState('1');
	const toggleTabs = tab => () => {
		if (activeTab !== tab) {
			return setActiveTab(tab);
		}
	};

	return (
    <div className="">
        <ExamNav toggleTabs={ toggleTabs } activeTab={ activeTab } />
        <MDBTabContent activeItem={ activeTab }>
            <ExamPane />
            {role !== 2 ? <ExamLevelPane /> : ''}
            <CoursePane />
            <SubjectPane />
        </MDBTabContent>
    </div>
	);
};

export default ExamContent;