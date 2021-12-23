import React, { useEffect, useState } from "react";
import MathJax from "react-mathjax-preview";
import ReactStars from "react-rating-stars-component";
import Grade from "./Grade";
import { _getAnswersToGrade } from "../../../redux/action/dataAction";
import { _gradeResult } from "../../../redux/action/testAction";
import { MDBBox, MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from "mdbreact";

export default ({ resultId, closeModal }) => {
	const [answers, setAnswers] = useState([]);
	const [activePanel, setActivePanel] = useState(0);
	const [grades, setGrades] = useState({});

	const handleSetGrade = (id, grade) => {
		return setGrades(prev => {
			return {
				...prev,
				[id]: { ...prev[id], id, grade: grade - 1 },
			};
		});
	};

	const handleSetComment = (id, comment) => {
		return setGrades(prev => {
			return {
				...prev,
				[id]: { ...prev[id], id, comment },
			};
		});
	};

	const handleNext = id => {
		if (!grades[id] || !grades[id].comment || !grades[id].grade) {
			return false;
		}

		return setActivePanel(prev => prev + 1);
	};

	const getAverage = () => {
		let totalGrade = 0;
		Object.keys(grades).forEach(key => {
			totalGrade += grades[key].grade;
		});

		return Math.round(totalGrade / answers.length);
	};

	const handleSubmit = () => {
		const gradesToSend = Object.keys(grades).map(key => {
			return {
				id: grades[key].id,
				grade: grades[key].grade,
				comment: grades[key].comment,
			};
		});

		_gradeResult({
			id: resultId,
			grades: gradesToSend,
		});

		return closeModal();
	};

	useEffect(() => {
		_getAnswersToGrade({
			resultId,
			grade: null,
		}).then(answers => setAnswers(answers));
	}, [resultId]);

	if (!answers.length) {
		return (
			<MDBContainer>
				<MDBRow>
					<MDBCol>
						<MDBCard>
							<MDBCardBody>
								<MDBRow>
									<MDBCol md="12">
										<h3 className="font-weight-bold pl-0 my-4">
											<strong>No answers to grade.</strong>
										</h3>
										<MDBBtn
											color="info"
											rounded
											className="float-right"
											onClick={closeModal}
										>
											Close
										</MDBBtn>
									</MDBCol>
								</MDBRow>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}

	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol>
					<MDBCard>
						<MDBCardBody>
							<MDBRow>
								{answers.map((answer, i) => {
									if (i !== activePanel) {
										return (<></>);
									}

									return (
										<MDBCol md="12" key={answer.id}>
											<MDBBox
												variant="h5"
												className="mt-2 mb-4 d-flex"
											>
												<div>Question {i + 1} / {answers.length}:</div>
												<div className='ml-2'><MathJax math={String.raw`${answer.question.name}`} /></div>
											</MDBBox>
											<MDBBox
												variant="p"
												className="mt-2 mb-4 d-flex"
											>
												<div><strong>Answer: </strong></div>
												<div className='ml-2'><MathJax math={String.raw`${answer.answer}`} /></div>
											</MDBBox>
											<MDBBox
												variant='p'
											>
												<strong>Grade: </strong>
											</MDBBox>
											<ReactStars
												count={6}
												size={30}
												value={!!grades[answer.id] ? grades[answer.id].grade : 0}
												activeColor="#ffd700"
												emptyIcon={<MDBIcon far icon="star" />}
												filledIcon={<MDBIcon icon="star" />}
												onChange={rating => handleSetGrade(answer.id, rating)}
											/>
											<MDBInput
												type='textarea'
												row='3'
												label='Comment'
												valueDefault={!!grades[answer.id] ? grades[answer.id].comment : ""}
												onChange={e => handleSetComment(answer.id, e.target.value)}
											/>
											<br />
											<MDBCol size='12'>
												{i !== 0 && (
													<MDBBtn
														color="info"
														rounded
														className="float-left mt-5"
														onClick={() => setActivePanel(prev => prev - 1)}
													>
														Previous
													</MDBBtn>
												)}
												<MDBBtn
													color="info"
													rounded
													className="float-right mt-5"
													onClick={() => handleNext(answer.id)}
												>
													Next
												</MDBBtn>
											</MDBCol>
										</MDBCol>
									);
								})}
								{activePanel === answers.length && (
									<MDBCol md="12">
										<h3 className="font-weight-bold pl-0 my-4">
											<strong>Review</strong>
										</h3>
										<MDBBox variant="h6">
											Average Grade <Grade grade={getAverage()} /> for {answers.length} Questions
										</MDBBox>
										<MDBBtn
											color="info"
											rounded
											className="float-left"
											onClick={() => setActivePanel(prev => prev - 1)}
										>
											Previous
										</MDBBtn>
										<MDBBtn
											color="info"
											rounded
											outline
											className="float-right"
											onClick={handleSubmit}
										>
											Submit
										</MDBBtn>
									</MDBCol>
								)}
							</MDBRow>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}