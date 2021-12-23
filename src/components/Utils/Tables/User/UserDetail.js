import React from "react";
import moment from "moment";
import { MDBBox, MDBCol, MDBContainer, MDBRow, MDBSwitch } from "mdbreact";

const UserDetail = ({ data: { membership, updatedAt, approved, lockedOut } }) => {
	return (
		<MDBContainer className="mt-2 ml-5">
			<MDBRow>
				<MDBCol size='2'>
					<MDBBox tag="h6" variant="h6-responsive">
                      <span className="font-weight-bolder">
                          Membership
                      </span>
						<span>
                          : {membership.name}
                      </span>
					</MDBBox>
				</MDBCol>
				<MDBCol size='2'>
					<MDBSwitch
						labelLeft="Approved"
						labelRight=""
						checked={approved}
						className="font-weight-bolder"
						disabled
					/>
				</MDBCol>
				<MDBCol size='2'>
					<MDBSwitch
						labelLeft="Locked out"
						labelRight=""
						checked={lockedOut}
						className="font-weight-bolder"
						disabled
					/>
				</MDBCol>
				<MDBCol size='4'>
					<MDBBox tag="h6" variant="h6-responsive">
                      <span className="font-weight-bolder">
                          Last Modified
                      </span>
						<span>
                          : {moment(updatedAt).format("YYYY-MM-DD h:mm:ss")}
                      </span>
					</MDBBox>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default UserDetail;