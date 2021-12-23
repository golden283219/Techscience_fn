import React, { useState } from "react";
import MathJax from "react-mathjax-preview";
import Grade from "./Grade";
import { MDBBox, MDBContainer, MDBSelect, MDBSelectInput, MDBSelectOption, MDBSelectOptions } from "mdbreact";

export default ({ data: { answers } }) => {
	const [answerIndex, setAnswerIndex] = useState(0);

	return (
		<MDBContainer className="pt-0 pl-5 pr-5 pb-5">
			<MDBSelect
				color='info'
				outline
				label='Select a question'
				className='select-question-review text-info'
				getValue={value => setAnswerIndex(Number(value[0]))}
			>
				<MDBSelectInput selected="Choose question" />
				<MDBSelectOptions>
					{answers.map((answer, i) => {
						return (
							<MDBSelectOption
								value={String(i)}
								checked={i === answerIndex}
							>
								{`Question ${i + 1}`}
							</MDBSelectOption>
						);
					})}
				</MDBSelectOptions>
			</MDBSelect>
			<MDBBox tag="h6" variant="h6-responsive">
              <span className="font-weight-bolder">
                  Question Type
              </span>
				<span>
                  : {answers[answerIndex].question.type}
              </span>
			</MDBBox>
			<MDBBox tag="h6" variant="h6-responsive d-flex mt-1">
				<div className="font-weight-bolder">Question:</div>
				<div className='ml-2'><MathJax math={String.raw`${answers[answerIndex].question.name}`} /></div>
			</MDBBox>
			<MDBBox tag="h6" variant="h6-responsive d-flex">
				<div className="font-weight-bolder">Answer:</div>
				<div className='ml-2'><MathJax math={String.raw`${answers[answerIndex].answer}`} /></div>
			</MDBBox>
			<hr className='w-25 ml-0 mt-2 mb-2' />
			<MDBBox tag="h6" variant="h6-responsive">
              <span className="font-weight-bolder">
                  Grade
              </span>
				<span>
                  : <Grade grade={answers[answerIndex].grade} />
              </span>
			</MDBBox>
			{answers[answerIndex].question.type === "subjective" && (
				<MDBBox tag="h6" variant="h6-responsive">
              <span className="font-weight-bolder">
                  Comment
              </span>
					<span>
                  : {answers[answerIndex].comment}
              </span>
				</MDBBox>
			)}
		</MDBContainer>
	);
}