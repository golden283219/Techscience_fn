import React, { useCallback, useEffect, useState } from "react";
import * as _ from "lodash";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { simpleSchema } from "../../../../utils/inputShema";
import { _getSubjectsToSelect, _mutateCourse } from "../../../../redux/action/dataAction";
import { MDBBox, MDBBtn, MDBInput, MDBSelect } from "mdbreact";

const CourseForm = ({ row }) => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(simpleSchema),
	});
	const [formErrors, setFormErrors] = useState(null);
	const [subjectOptions, setSubjectOptions] = useState(null);
	const [subjectId, setSubjectId] = useState(null);
	const data = !!row ? row : {
		subject: {},
	};

	const renderErrors = useCallback(allErrors => {
		const errorFields = Object.keys(allErrors);

		return errorFields.map((field, i) => (
			<li key={i}>{allErrors[field].message}</li>
		));
	}, []);

	const onSubmit = course => {
		if (!subjectId) {
			return setFormErrors({
				subjectId: { message: "You should select a subject." },
			});
		}

		course.subjectId = subjectId;
		return _mutateCourse(course);
	};

	useEffect(() => {
		_getSubjectsToSelect().then(subjects => {
			const options = subjects.map(subject => {
				return {
					text: subject.name,
					value: String(subject.id),
					checked: subject.name === data.subject.name,
				};
			});

			return setSubjectOptions(options);
		});
	}, [data.subject.name]);

	return (
		<>
			{!_.isEmpty({ ...errors, ...formErrors }) &&
			<MDBBox note noteColor='danger' className="mb-3">
				{renderErrors({ ...errors, ...formErrors })}
			</MDBBox>
			}
			<input
				type="hidden"
				name="id"
				autoComplete="id"
				defaultValue={data.id}
				ref={register}
			/>
			<MDBSelect
				color='primary'
				label='Subject'
				search
				options={subjectOptions}
				name="subjectId"
				getValue={value => setSubjectId(Number(value[0]))}
			/>
			<MDBInput
				type='text'
				label='Description'
				className="pl-3 pr-3"
				name="name"
				valueDefault={data.name}
				inputRef={register}
			/>
			<div className='text-center mt-3 black-text'>
				<MDBBtn
					color="info"
					className="w-100 m-auto"
					onClick={handleSubmit(onSubmit)}
				>
					Confirm
				</MDBBtn>
			</div>
		</>
	);
};

export default CourseForm;