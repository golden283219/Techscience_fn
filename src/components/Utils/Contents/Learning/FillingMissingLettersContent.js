import React from "react";
import BlankInput from "../../BlankInput/BlankInput";
import { MDBBox, MDBCard, MDBContainer, MDBListGroup, MDBRow } from "mdbreact";

const texts = [
	{
		text: "this is _ apple",
		answer: "an",
	},
	{
		text: "what _ your name?",
		answer: "is",
	},
	{
		text: "mind _ I smoke?",
		answer: "if",
	},
	{
		text: "do you _ time?",
		answer: "have",
	},
	{
		text: "how old _ you?",
		answer: "are",
	},
];

export default () => {
	return (
		<MDBCard>
			<MDBContainer className="mt-3 mb-5">
				<MDBRow className="mt-5 ml-2 mb-2">
					<MDBBox tag='h1' variant='h1-responsive'>Filling Missing Letters</MDBBox>
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