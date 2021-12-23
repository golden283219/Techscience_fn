import React, { useEffect, useState } from "react";
import Card from "../../Card/Card";
import { MDBBox, MDBBtn, MDBCard, MDBContainer, MDBRow } from "mdbreact";

const cards1 = [
	["1", "2", "3", "4"], ["5", "6", "7", "8"], ["9", "10", "11"],
];

export default () => {
	const [blanks, setBlanks] = useState([]);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		setBlanks(cards1.map((item, index) => {
			const ranIndex = Math.floor((Math.random() * 3));
			return index * 4 + ranIndex;
		}));
	}, [refresh]);

	const renderCards = () => {
		let cards = [];
		for (let i = 1; i < 11; i++) {
			if (blanks.includes(i - 1)) {
				cards = [...cards, <Card key={i} value={i} />];
			} else {
				cards = [...cards, <Card key={i} name={i} />];
			}
		}
		return cards;
	};

	return (
		<MDBCard>
			<MDBContainer className="mt-3 mb-3">
				<MDBRow className="mt-5 ml-2 mb-2">
					<MDBBox tag='h1' variant='h1-responsive'>Number Games</MDBBox>
				</MDBRow>
				<MDBRow>
					<MDBBtn className='ml-3' color='info' onClick={() => setRefresh(!refresh)}>
						Refresh
					</MDBBtn>
				</MDBRow>
				<MDBRow>
					{renderCards()}
				</MDBRow>
			</MDBContainer>
		</MDBCard>
	);
}