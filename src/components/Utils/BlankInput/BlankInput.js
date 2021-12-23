import React from "react";
import "./BlankInput.scss";
import { MDBBox, MDBListGroupItem } from "mdbreact";

import rightAnswer from "../../../assets/sounds/right_answer.mp3";
import wrongAnswer from "../../../assets/sounds/wrong_answer.mp3";
import { playAudio } from "../board/Utils";

export default ({ no, text, answer }) => {
	const func = e => {
		if (String(answer) === e.target.value) {
			e.target.style.backgroundColor = "#00C851";
			playAudio(rightAnswer);
		} else {
			e.target.style.backgroundColor = "#ff4444";
			playAudio(wrongAnswer);
		}
	};

	const renderText = () => {
		const blankInput = [" "];
		for (let i = 0; i < text.length; i++) {
			if (text[i] === "_") {
				blankInput.push(<input className='blank-input ml-3 mr-3' onChange={func} />);
			} else {
				blankInput.push(text[i]);
			}
		}
		return blankInput;
	};

	return (
		<MDBListGroupItem tag='p' variant='display-3'>
			<MDBBox tag='h3' variant='h3-responsive'>
				<strong>{no}. </strong>
				{renderText()}
			</MDBBox>
		</MDBListGroupItem>
	);
}