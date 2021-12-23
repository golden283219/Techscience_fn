import React from "react";
import PendingTable from "../../../Tables/Student/PendingTable";
import { MDBContainer, MDBTabPane } from "mdbreact";

export default () => {
	return (
		<MDBTabPane tabId="1">
			<MDBContainer className="mt-3 mb-3">
				<PendingTable />
			</MDBContainer>
		</MDBTabPane>
	);
}