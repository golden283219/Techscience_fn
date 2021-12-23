import React, { useCallback, useState } from "react";
import { MDBBox, MDBBtn, MDBCard, MDBContainer, MDBRow } from "mdbreact";
import SpeechCard from "../../SpeechCard/SpeechCard";

const cards = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default () => {
	const [letterCase, setLetterCase] = useState("lowercase");

	const toggleCase = useCallback(
		() => {
			if (letterCase === "lowercase") {
				setLetterCase("uppercase");
			} else {
				setLetterCase("lowercase");
			}
		},
		[letterCase],
	);

	return (
		<MDBCard className="speech-container-bg">
			<MDBContainer className="mt-3 mb-3">
				<MDBRow className="mt-5 ml-2 mb-2">
					<MDBBox tag='h1' variant='h1-responsive'>Alphabets</MDBBox>
				</MDBRow>
				<MDBRow>
					<MDBBtn className='ml-3 mb-4' color='info' onClick={toggleCase}>
						Change to {letterCase === "lowercase" ? "uppercase" : "lowercase"}
					</MDBBtn>
				</MDBRow>
				<MDBRow>
					{cards.map((card, i) => (
						<SpeechCard key={i} text={letterCase === "lowercase" ? card : card.toUpperCase()} />
					))}
				</MDBRow>
			</MDBContainer>
		</MDBCard>
	);
}