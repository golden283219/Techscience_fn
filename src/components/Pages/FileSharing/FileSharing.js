import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import { MDBCard, MDBContainer, MDBRow } from "mdbreact";

const FileSharing = () => {
	return (
		<DashboardLayout>
			<MDBCard>
				<MDBContainer className="mt-3 mb-3">
					<MDBRow>
						<iframe title="flipsnack" src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=xmqbmii1ci" width="100%" height="620" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
					</MDBRow>
				</MDBContainer>
			</MDBCard>
		</DashboardLayout>
	);
};

export default FileSharing;