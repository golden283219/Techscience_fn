import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MathJax from "react-mathjax-preview";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-classic-with-mathtype";
import { _getExamForTest } from "../../../redux/action/dataAction";
import { _saveResult } from "../../../redux/action/testAction";
import { MDBBox, MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBFormInline, MDBInput, MDBLightbox, MDBRow, MDBSwitch } from "mdbreact";

export default ({ resultId, examId, closeModal, examType }) => {
	const role = useSelector(state => state.auth.role);
	const [exam, setExam] = useState({ questions: [] });
	const [activePanel, setActivePanel] = useState(1);
	const [showComment, setShowComment] = useState(false);
	const [numberOfQuestions, setNumberOfQuestions] = useState(null);
	const [examStarted, setExamStarted] = useState(false);
	const [answers, setAnswers] = useState({});
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [choiceCommentText, setChoiceCommentText] = useState("");
	let trueComment = "";

	const checkExamConstruct = () => {
		if (!exam) {
			return false;
		}

		if (!exam.questions || !exam.questions.length) {
			return false;
		}

		for (let i = 0; i < exam.questions.length; i++) {
			if (exam.questions[i].type === "objective" && (!exam.questions[i].choices || !exam.questions[i].choices.length)) {
				return false;
			}
		}

		return true;
	};

	const handleSetNumberOfQuestions = e => {
		if (e.target.value > exam.questions.length || e.target.value < 1) {
			return;
		}

		return setNumberOfQuestions(e.target.value);
	};

	const handleNext = (i, questionId) => {
		setChoiceCommentText("");
		if (!answers[questionId]) {
			return;
		}

		if (!String(answers[questionId].answer).trim()) {
			return;
		}

		if ((i + 1) >= numberOfQuestions && !!examStarted) {
			return handleSubmit();
		}

		return setActivePanel(prevState => prevState + 1);
	};

	const handleStartExam = () => {
		if (!numberOfQuestions) {
			return;
		}

		setExamStarted(true);
		return setActivePanel(2);
	};

	const handleAnswerQuestion = (questionId, questionType, answer, isChoice) => {
		if (!examStarted) {
			return;
		}

		if (!isChoice) {
			return setAnswers(prevState => {
				return {
					...prevState,
					[questionId]: { questionId, questionType, answer },
				};
			});
		}

		setChoiceCommentText(answer.comment);

		return setAnswers(prevState => {
			return {
				...prevState,
				[questionId]: { questionId, questionType, answer: answer.id, correct: answer.correct },
			};
		});
	};

	const handleTrueComment = (choice) => {
		if (choice.correct) {
			trueComment = choice.comment;
		}
	}

	const checkChoiceSelect = (questionId, choice) => {
		if (!answers[questionId]) {
			return false;
		}
		return answers[questionId].answer === choice.id;
	};

	const handleSubmit = () => {
		setExamStarted(false);

		setCorrectAnswers(Object.keys(answers).reduce((total, key) => {
			if (!!answers[key].correct) {
				return total + 1;
			}

			return total;
		}, 0));

		if (role !== 3) {
			return setActivePanel(Number(numberOfQuestions) + 2);
		}

		const answersToSend = Object.keys(answers).map(key => {
			return {
				questionId: answers[key].questionId,
				questionType: answers[key].questionType,
				answer: String(answers[key].answer),
			};
		});

		_saveResult({
			id: resultId,
			totalQuestion: Number(exam.questions.length),
			attempedQuestion: Number(numberOfQuestions),
			tookAt: new Date().toISOString(),
			answers: answersToSend,
		});

		return setActivePanel(Number(numberOfQuestions) + 2);
	};

	useEffect(() => {
		_getExamForTest(examId).then(exam => setExam(exam));
	}, [examId]);

	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol>
					<MDBCard>
						<MDBCardBody>
							<form action="" method="post">
								<MDBRow>
									{!checkExamConstruct() && (
										<MDBCol md="12">
											<MDBBox
												variant='h5'
												className="font-weight-bold pl-0 my-4 text-center"
											>
												<strong>This exam construction not completed yet. Please try again later.</strong>
											</MDBBox>
											<MDBBtn
												color="info"
												rounded
												outline
												className="float-right mt-5"
												onClick={closeModal}
											>
												Close
											</MDBBtn>
										</MDBCol>
									)}
									{!!checkExamConstruct() && activePanel === 1 && (
										<MDBCol md="12">
											<MDBBox
												variant='h5'
												className="font-weight-bold pl-0 my-4"
											>
												<strong>Please read below description</strong>
											</MDBBox>
											<MDBBox variant="h6">
												You have elected to run the above practice exam. Once you start the exam,
												you should not stop the exam before reaching the end of the exam because
												the exam will not be scored. You may also elect to run the exam showing
												answer hints.
											</MDBBox>
											<MDBFormInline>
												<MDBSwitch
													checked={showComment}
													labelLeft='Hide Comment'
													labelRight='Show Comment'
													onChange={() => setShowComment(prevState => !prevState)}
												/>
											</MDBFormInline>
											<MDBInput
												type="number"
												label={`Number of questions of out ${exam.questions.length}`}
												className="mt-3"
												onChange={handleSetNumberOfQuestions}
											/>
											<MDBBtn
												color="info"
												rounded
												outline
												className="float-right mt-5"
												onClick={closeModal}
											>
												Close
											</MDBBtn>
											<MDBBtn
												color="info"
												rounded
												className="float-right mt-5"
												onClick={handleStartExam}
											>
												Start Exam
											</MDBBtn>
										</MDBCol>
									)}
									{exam.questions.map((question, i) => {
										if (i >= numberOfQuestions || (i + 2) !== activePanel) {
											return (<></>);
										}
										return (
											<>
												<MDBCol md="7" key={question.id}>
													<MDBBox
														variant="h5"
														className="mt-2 mb-4 d-flex"
													>
														<div>Question {i + 1}:</div>
														<div className='ml-2'><MathJax math={String.raw`${question.name}`} /></div>
													</MDBBox>
													{question.type === "subjective" ? (
														<CKEditor
															label='Type your answer here'
															editor={ClassicEditor}
															config={{
																toolbar: {
																	items: [
																		"heading",
																		"MathType",
																		"|",
																		"bold",
																		"italic",
																		"bulletedList",
																		"numberedList",
																		"blockQuote",
																		"undo",
																		"redo",
																	],
																},
																placeholder: "Type your answer here",
															}}
															data={answers[question.id] && answers[question.id].answer}
															onChange={(e, editor) => handleAnswerQuestion(question.id, question.type, editor.getData())}
														/>
													) : question.choices.map(choice => {
														handleTrueComment(choice);
														return (
															<MDBInput
																key={choice.id}
																type='radio'
																label={<MathJax math={String.raw`${choice.name}`} />}
																checked={checkChoiceSelect(question.id, choice)}
																containerClass={`mr-5 ${(!examStarted && choice.correct) ? "text-success" : ""}`}
																onFocus={() => handleAnswerQuestion(question.id, question.type, choice, true)}
															/>
														);
													})}
													{
														!examStarted && trueComment && (examType === "practice" || examType === "example") &&
														<div className="ml-5 font-italic font-weight-bolder">
															{trueComment}
														</div>
													}
													{
														examStarted && choiceCommentText && (examType === "practice" || examType === "example") &&
														<div className="ml-5 font-italic font-weight-bolder">
															{choiceCommentText}
														</div>
													}
												</MDBCol>
												{!!question.image && (
													<MDBCol size='5'>
														<MDBLightbox
															images={[{
																src: `${process.env.NODE_ENV === "development" ? process.env.REACT_APP_DEV_IMAGE_URI : process.env.REACT_APP_PROD_IMAGE_URI}/${process.env.REACT_APP_QUESTION_IMAGE_FOLDER}/${question.image}`,
																alt: "question image",
															}]}
															itemClassName="p-1"
														/>
													</MDBCol>
												)}
												<br />
												<MDBCol size='12'>
													{!examStarted && (
														<MDBBtn
															color="info"
															rounded
															className="float-left mt-5"
															onClick={() => setActivePanel(i + 1 > 1 ? i + 1 : 2)}
														>
															Previous
														</MDBBtn>
													)}
													<MDBBtn
														color="info"
														rounded
														className="float-right mt-5"
														onClick={() => handleNext(i, question.id)}
													>
														{(i + 1) >= numberOfQuestions ? "Submit" : "Next"}
													</MDBBtn>
												</MDBCol>
											</>
										);
									})}
									{activePanel === (Number(numberOfQuestions) + 2) && (
										<MDBCol md="12">
											<h3 className="font-weight-bold pl-0 my-4">
												<strong>{role === 3 ? "Your result submitted" : "Test Finished"}</strong>
											</h3>
											<MDBBox variant="h6">
												You correctly answered {correctAnswers} out of objective questions. Your entire exam is sent for review.
											</MDBBox>
											<MDBBtn
												color="info"
												rounded
												className="float-left mt-5"
												onClick={() => setActivePanel(Number(numberOfQuestions) + 1)}
											>
												Review
											</MDBBtn>
											<MDBBtn
												color="info"
												rounded
												outline
												className="float-right mt-5"
												onClick={closeModal}
											>
												Close
											</MDBBtn>
										</MDBCol>
									)}
								</MDBRow>
							</form>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}