import React from "react";
import Card from "../../../Card/Card";
import { MDBBox, MDBCard, MDBContainer, MDBRow } from "mdbreact";

const cards = [
	{
		name: "Addition",
		link: "/learning/arithmetic/addition",
	},
	{
		name: "Substraction",
		link: "/learning/arithmetic/substraction",
	},
	{
		name: "Multiplication",
		link: "/learning/arithmetic/multiplication",
	},
	{
		name: "Division",
		link: "/learning/arithmetic/division",
	},
];

const ArithmeticContent = () => {
	return (
		<MDBCard>
			<MDBContainer className="mt-3 mb-5">
				<MDBRow className="mt-5 ml-2 mb-2">
					<MDBBox tag='h1' variant='h1-responsive'>Arithmetics</MDBBox>
				</MDBRow>
				<MDBRow>
					{cards.map(card => <Card {...card} />)}
				</MDBRow>
			</MDBContainer>
		</MDBCard>
	);
};

export default ArithmeticContent;