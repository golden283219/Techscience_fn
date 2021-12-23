import React from "react";
import "./SpeechCard.scss";
import { MDBBox, MDBCard, MDBCardBody, MDBCol } from "mdbreact";

export default ({ text }) => {

	const speak = text => {
		const utterance = new SpeechSynthesisUtterance(text);
		speechSynthesis.speak(utterance);
	};

	return (
		<MDBCol xs="3" sm="3" md="3" lg="2" className="speech-card-container mb-3">
			<MDBCard color="success-color-dark" className="h-100 card-content">
				<MDBCardBody
					className="card-body-link h-100"
					onClick={() => speak(text)}
				>
					<MDBBox display={"flex"} flex={"column"}>
						<MDBBox tag='h1' variant='h1-responsive' className='learning-card'>{text}</MDBBox>
					</MDBBox>
				</MDBCardBody>
			</MDBCard>
		</MDBCol>
	);
}