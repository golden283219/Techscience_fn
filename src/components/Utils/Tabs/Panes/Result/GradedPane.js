import React from 'react';
import GradedTable from '../../../Tables/Result/GradedTable';
import { MDBContainer, MDBTabPane } from 'mdbreact';

export default () => {
	return (
    <MDBTabPane tabId="4">
        <MDBContainer className="mt-3 mb-3">
            <GradedTable />
        </MDBContainer>
    </MDBTabPane>
	);
}