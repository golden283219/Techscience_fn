import React, { useCallback, useRef, useState } from "react";
import readXlsxFile from "read-excel-file";
import * as _ from "lodash";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-classic-with-mathtype";
import { _createQuestions, _mutateQuestion } from "../../../../redux/action/dataAction";
import { MDBBox, MDBBtn, MDBFileInput, MDBSelect, MDBSelectInput, MDBSelectOption, MDBSelectOptions, MDBSpinner, MDBSwitch } from "mdbreact";

export function splitStr (str) {
	return str.split(")")[1].trimStart();
}

export default ({ row, examId }) => {
	const fileRef = useRef();
	const [formErrors, setFormErrors] = useState(null);
	const data = !!row ? row : {};
	const [name, setName] = useState(data.name);
	const [free, setFree] = useState(!!data.free);
	const [type, setType] = useState(data.type);
	const [image, setImage] = useState(null);
	const [xlsUploading, setXlsUploading] = useState(false);

	const renderErrors = useCallback(() => {
		const errorFields = Object.keys(formErrors);

		return errorFields.map((field, i) => (
			<li key={i}>{formErrors[field].message}</li>
		));
	}, [formErrors]);

	const onSubmit = () => {
		if (!name) {
			return setFormErrors({
				name: { message: "You should input question description." },
			});
		}

		if (!type) {
			return setFormErrors({
				type: { message: "You should select question type." },
			});
		}

		if (!!image && image.type.indexOf("image") < 0) {
			return setFormErrors({
				image: { message: "You should select only image file." },
			});
		}

		setFormErrors(null);
		return _mutateQuestion({
			id: Number(data.id), examId: Number(examId),
			name, type, free, image,
		}).then(value => {
			console.log(value);
		});
	};

	const uploadXls = useCallback(
		e => {
			const xls = e.target.files[0];
			if (!xls) return;
			if (!xls.type.includes("sheet")) return setFormErrors({ file: { message: "You should select excel file only." } });

			setFormErrors({});
			setXlsUploading(true);

			readXlsxFile(xls).then(rows => {
				const rowCount = rows.length;
				const questions = [];
				let question = "";
				let choices = [];
				for (let i = 0; i < rowCount; i++) {
					const row = rows[i];
					if (!row[0]) {
						continue;
					}
					const sentence = row[0].trim();

					const parsedQuestion = sentence.match(/\d+\)\s+(.*)/);
					if (parsedQuestion) {
						questions.push({
							name: question,
							choices: choices,
							free: true,
							type: "objective",
							examId: Number(examId),
						});
						question = parsedQuestion[1];
						choices = [];
					}

					const parsedChoice = sentence.match(/[A-Z]\)\s+(.*)/);
					if (parsedChoice) {
						let rightChoice = false;
						if (row[1]) {
							rightChoice = true;
						}
						choices.push({
							name: parsedChoice[1],
							correct: rightChoice,
							comment: row[2] ? row[2] : "",
						});
					}
				}
				questions.push({
					name: question,
					choices: choices,
					free: true,
					type: "objective",
					examId: Number(examId),
				});

				return _createQuestions({
					examId: Number(examId),
					questions: _.flatten(questions.slice(1)),
				}).then(() => {
					fileRef.current.value = null;
					return setXlsUploading(false);
				});
			});
		},
		[examId],
	);

	return (
		<>
			{!_.isEmpty(formErrors) &&
			<MDBBox note noteColor='danger' className="mb-3">
				{renderErrors()}
			</MDBBox>
			}
			<CKEditor
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
				}}
				data={name}
				onChange={(e, editor) => setName(editor.getData())}
			/>
			<MDBSelect
				label="Type"
				getValue={value => setType(value[0])}
				color='info'
			>
				<MDBSelectInput selected="Choose Question Type" />
				<MDBSelectOptions>
					<MDBSelectOption value="objective" checked={data.type === "objective"}>Objective</MDBSelectOption>
					<MDBSelectOption value="subjective" checked={data.type === "subjective"}>Subjective</MDBSelectOption>
				</MDBSelectOptions>
			</MDBSelect>
			<MDBSwitch
				checked={free}
				labelLeft='Paid'
				labelRight='Free'
				onChange={() => setFree(prevState => !prevState)}
			/>
			<MDBFileInput
				btnColor='info'
				btnTitle='Choose Image'
				textFieldTitle='Choose Image for Question'
				getValue={value => setImage(value[0])}
			/>
			<div className='text-center mt-3 black-text'>
				<MDBBtn
					color="info"
					className="w-100 m-auto"
					onClick={onSubmit}
				>
					Confirm
				</MDBBtn>
			</div>
			<div className='text-center mt-3 black-text'>
				<input
					type='file'
					ref={fileRef}
					accept='.xls, .xlsx'
					className='d-none'
					onChange={uploadXls}
				/>
				<MDBBtn
					outline
					color="info"
					disabled={xlsUploading}
					className="w-100 m-auto"
					onClick={() => fileRef.current.click()}
				>
					{!xlsUploading
						? "Or Load from Excel"
						: <>
							{"Uploading "}
							<MDBSpinner
								crazy
								small
								className='text-info border border-info rounded-circle'
							/>
						</>
					}
				</MDBBtn>
			</div>
		</>
	);
}