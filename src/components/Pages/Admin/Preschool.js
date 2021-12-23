import React from 'react';
import DashboardLayout from '../../Layout/DashboardLayout';
import PreschoolContent from '../../Utils/Contents/PreschoolContent';
import { useSelector } from 'react-redux';

const Preschool = () => {
	const role = useSelector(state => state.auth.role);
	if (role !== 1 && role !== 2) {
		return false;
	}
	return (
    <DashboardLayout>
        <PreschoolContent />
    </DashboardLayout>
	);
};

export default Preschool;