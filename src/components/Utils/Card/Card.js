import React from 'react';
import { useHistory } from 'react-router-dom';
import './Card.scss';
import { MDBBox, MDBCard, MDBCardBody, MDBCol } from 'mdbreact';

import rightAnswer from '../../../assets/sounds/right_answer.mp3';
import wrongAnswer from '../../../assets/sounds/wrong_answer.mp3';
import { playAudio } from '../board/Utils';

export default ({ name, link, audio, value }) => {

	const history = useHistory();

	const speak = text => {
		const utterance = new SpeechSynthesisUtterance(text);
		utterance.rate = 0.6;
		speechSynthesis.speak(utterance);
	};

	let func = null;

	if (!!audio) {
		func = () => {
			const audioSrc = new Audio(require(`../../../assets/audios${ audio }`));
			return audioSrc.play();
		};
	}

	if (!!value) {
		func = (e) => {
			e.target.value = e.target.value.toUpperCase();
			if (String(value) === e.target.value.toUpperCase()) {
				e.target.style.backgroundColor = '#00C851';
				playAudio(rightAnswer);
			} else {
				e.target.style.backgroundColor = '#ff4444';
				playAudio(wrongAnswer);
			}
		};
	}

	const renderCardbody = () => {
		if (!!link) {
			return (
    <MDBCardBody
					className="card-body-link h-100"
					onClick={ () => history.push(link) }
				>
        <MDBBox tag='h4' variant='h4-responsive' className='learning-card'>{name}</MDBBox>
    </MDBCardBody>
			);
		}

		if (!!audio) {
			return (
    <MDBCardBody
					className="h-100"
					onClick={ func }
				>
        <MDBBox tag='h1' variant='h1-responsive'>{name}</MDBBox>
    </MDBCardBody>
			);
		}

		if (!!value) {
			return (
    <MDBCardBody>
        <input type="text" onChange={ func } />
    </MDBCardBody>
			);
		}

		return (
    <MDBCardBody onClick={ () => speak(name) }>
        <MDBBox tag='h1' variant='h1-responsive'>{name}</MDBBox>
    </MDBCardBody>
		);
	};

	return (
    <MDBCol xs="6" sm="6" md="4" lg="3" className="card-container mb-3">
        <MDBCard color="info-color" className="h-100 card-content">
            {renderCardbody()}
        </MDBCard>
    </MDBCol>
	)
}