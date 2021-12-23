import React, { useCallback, useEffect, useRef, useState } from "react";
import * as _ from "lodash";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-classic-with-mathtype";
import { _mutateChoice } from "../../../../redux/action/dataAction";
import { MDBBox, MDBBtn, MDBInput, MDBSpinner, MDBSwitch } from "mdbreact";
import readXlsxFile from "read-excel-file";

export default ({ row, questionId }) => {
	const fileRef = useRef();
	const data = !!row ? row : {};
	const [name, setName] = useState(data.name);
	const [comment, setComment] = useState("");
	const [correct, setCorrect] = useState(!!data.correct);
	const [formErrors, setFormErrors] = useState(null);
	const [xlsUploading, setXlsUploading] = useState(false);

	useEffect(() => {
		setComment(data.comment);
	}, [data.comment]);

	const renderErrors = useCallback(() => {
		const errorFields = Object.keys(formErrors);

		return errorFields.map((field, i) => (
			<li key={i}>{formErrors[field].message}</li>
		));
	}, [formErrors]);

	const onSubmit = () => {
		if (!name) {
			return setFormErrors({
				name: { message: "You should input choice description" },
			});
		}

		setFormErrors(null);
		return _mutateChoice({
			id: Number(data.id),
			questionId: Number(questionId),
			name, comment, correct,
		});
	};

	const setCommentHandler = (e) => {
		setComment(e.target.value);
	};

	const uploadChoicesXls = useCallback(
		e => {
			const xls = e.target.files[0];
			if (!xls) return;
			if (!xls.type.includes("sheet")) return setFormErrors({ file: { message: "You should select excel file only." } });

			setFormErrors({});
			setXlsUploading(true);

			readXlsxFile(xls).then(rows => {
				rows && rows.forEach(row => {
					return _mutateChoice({
						questionId: Number(questionId),
						name: row[0],
						comment: row[1],
						correct: row[2],
					});
				});
			}).then(() => {
				fileRef.current.value = null;
				return setXlsUploading(false);
			});
		},
		[questionId],
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
			<MDBInput
				type='textarea'
				row={2}
				label='Comment'
				className="pl-3 pr-3"
				name="comment"
				value={comment}
				onChange={setCommentHandler}
			/>
			<MDBSwitch
				checked={correct}
				labelLeft='Wrong'
				labelRight='Correct'
				onChange={() => setCorrect(prevState => !prevState)}
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
					onChange={uploadChoicesXls}
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