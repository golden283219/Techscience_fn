import React from "react";
import BlankInput from "../../../BlankInput/BlankInput";
import { MDBBox, MDBCard, MDBContainer, MDBListGroup, MDBRow } from "mdbreact";

const texts = [
	{
		text: "1+_=10",
		answer: "9",
	},
	{
		text: "10-_=1",
		answer: "9",
	},
	{
		text: "1*_=10",
		answer: "10",
	},
	{
		text: "100/_=10",
		answer: "10",
	},
	{
		text: "2+_=10",
		answer: "9",
	},
];

export default () => {
	return (
		<MDBCard>
			<MDBContainer className="mt-3 mb-5">
				<MDBRow className="mt-5 ml-2 mb-2">
					<MDBBox tag='h1' variant='h1-responsive'>Multiplication</MDBBox>
				</MDBRow>
				<MDBRow>
					<MDBListGroup className='w-100'>
						{texts.map((text, i) => <BlankInput {...text} no={i + 1} key={i} />)}
					</MDBListGroup>
				</MDBRow>
			</MDBContainer>
		</MDBCard>
	);
}