import React, { useEffect, useState } from "react";
import Card from "../../Card/Card";
import { MDBBox, MDBBtn, MDBCard, MDBContainer, MDBRow } from "mdbreact";

const cards = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const cards1 = [
	["a", "b", "c", "d"], ["e", "f", "g", "h"], ["i", "j", "k", "l"], ["m", "n", "o", "p"], ["q", "r", "s", "t"], ["u", "v", "w", "x"], ["y", "z"],
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

	return (
		<MDBCard>
			<MDBContainer className="mt-3 mb-3">
				<MDBRow className="mt-5 ml-2 mb-2">
					<MDBBox tag='h1' variant='h1-responsive'>ABC Games</MDBBox>
				</MDBRow>
				<MDBRow>
					<MDBBtn className='ml-3' color='info' onClick={() => setRefresh(!refresh)}>
						Refresh
					</MDBBtn>
				</MDBRow>
				<MDBRow>
					{cards.map((card, i) => {
						if (!!blanks.includes(i)) {
							return (
								<Card
									value={card.toUpperCase()}
									key={i}
								/>
							);
						}

						return (
							<Card
								name={card.toUpperCase()}
								key={i}
							/>
						);
					})}
				</MDBRow>
			</MDBContainer>
		</MDBCard>
	);
}