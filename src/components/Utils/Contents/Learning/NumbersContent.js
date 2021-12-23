import React from "react";
import { MDBBox, MDBCard, MDBContainer, MDBRow } from "mdbreact";
import SpeechCard from "../../SpeechCard/SpeechCard";

export default () => {
	const renderCards = () => {
		let cards = [];
		for (let i = 1; i <= 10; i++) {
			cards = [...cards, <SpeechCard key={i} text={i} />];
		}
		return cards;
	};

	return (
		<MDBCard>
			<MDBContainer className="mt-3 mb-3">
				<MDBRow className="mt-5 ml-2 mb-2">
					<MDBBox tag='h1' variant='h1-responsive'>Numbers</MDBBox>
				</MDBRow>
				<MDBRow>
					{renderCards()}
				</MDBRow>
			</MDBContainer>
		</MDBCard>
	);
}