import React, { useCallback, useEffect, useState } from "react";
import * as _ from "lodash";
import { decode } from "jsonwebtoken";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { simpleSchema } from "../../../../utils/inputShema";
import { _getCoursesToSelect, _getLevelsToSelect, _getSubjectsToSelect, _getUsersToSelect, _mutateExam } from "../../../../redux/action/dataAction";
import { MDBBox, MDBBtn, MDBInput, MDBSelect, MDBSelectInput, MDBSelectOption, MDBSelectOptions } from "mdbreact";


export default ({ row }) => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(simpleSchema),
	});
	const [formErrors, setFormErrors] = useState(null);
	const [subjectOptions, setSubjectOptions] = useState(null);
	const [courseOptions, setCourseOptions] = useState(null);
	const [levelOptions, setLevelOptions] = useState(null);
	const [studentOptions, setStudentOptions] = useState(null);
	const [subjectId, setSubjectId] = useState(null);
	const [courseId, setCourseId] = useState(null);
	const [levelId, setLevelId] = useState(null);
	const [students, setStudents] = useState([]);
	const [type, setType] = useState(null);
	const [genre, setGenre] = useState(null);
	const [mainStudents, setMainStudents] = useState([]);
	const data = !!row ? row : {
		subject: {},
		course: {},
		level: {},
		students: [],
	};

	useCallback(() => {
		setMainStudents(data.students);
	}, [data]);

	const renderErrors = useCallback(allErrors => {
		let errorFields = Object.keys(allErrors);

		return errorFields.map((field, i) => (
			<li key={i}>{allErrors[field].message}</li>
		));
	}, []);

	const onSubmit = exam => {
		if (!subjectId) {
			return setFormErrors({
				subjectId: { message: "You should select a subject." },
			});
		}

		if (!courseId) {
			return setFormErrors({
				courseId: { message: "You should select a course." },
			});
		}

		if (!levelId) {
			return setFormErrors({
				levelId: { message: "You should select a level." },
			});
		}

		if (!type) {
			return setFormErrors({
				type: { message: "You should select a type." },
			});
		}

		if (!genre) {
			return setFormErrors({
				genre: { message: "You should select a genre." },
			});
		}

		if (genre === "home" && !students.length) {
			return setFormErrors({
				students: { message: "You should select students." },
			});
		}

		exam.subjectId = subjectId;
		exam.courseId = courseId;
		exam.levelId = levelId;
		exam.type = type;
		exam.genre = genre;
		exam.students = students.map(student => Number(student));
		return _mutateExam(exam);
	};

	useEffect(() => {
		_getSubjectsToSelect().then(subjects => {
			let options = subjects.map(subject => {
				return {
					text: subject.name,
					value: String(subject.id),
					checked: subject.name === data.subject.name,
				};
			});

			return setSubjectOptions(options);
		});
		_getLevelsToSelect().then(levels => {
			let options = levels.map(level => {
				return {
					text: level.name,
					value: String(level.id),
					checked: level.name === data.level.name,
				};
			});

			return setLevelOptions(options);
		});
	}, [data.subject.name, data.level.name]);

	useEffect(() => {
		if (!!subjectId) {
			_getCoursesToSelect({ subjectId }).then(courses => {
				let options = courses.map(course => {
					return {
						text: course.name,
						value: String(course.id),
						checked: course.name === data.course.name,
					};
				});

				return setCourseOptions(options);
			});
		}
	}, [subjectId, data.course.name]);

	useEffect(() => {
		if (genre === "home") {
			_getUsersToSelect({ roleId: 3, accountId: decode(localStorage.getItem("token")).accountId }).then(students => {
				let options = students.map(student => {
					return {
						text: student.fullname,
						value: String(student.id),
						checked: mainStudents.some(el => !!el && (el.id === student.id)),
					};
				});

				return setStudentOptions(options);
			});
		} else {
			setStudents([]);
		}
	}, [genre, mainStudents]);

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
				color='info'
				label='Subject'
				search
				options={subjectOptions}
				name="subjectId"
				getValue={value => setSubjectId(Number(value[0]))}
			/>
			<MDBSelect
				color='info'
				label='Course'
				search
				options={courseOptions}
				name="courseId"
				getValue={value => setCourseId(Number(value[0]))}
			/>
			<MDBInput
				type='text'
				label='Description'
				name="name"
				valueDefault={data.name}
				inputRef={register}
			/>
			<MDBSelect
				color='info'
				label='Level'
				options={levelOptions}
				name="levelId"
				getValue={value => setLevelId(Number(value[0]))}
			/>
			<MDBSelect
				label="Type"
				getValue={value => setType(value[0])}
				color='info'
			>
				<MDBSelectInput selected="Choose exam type" />
				<MDBSelectOptions>
					<MDBSelectOption value="certification" checked={data.type === "certification"}>Certification</MDBSelectOption>
					<MDBSelectOption value="practice" checked={data.type === "practice"}>Practice</MDBSelectOption>
					<MDBSelectOption value="study" checked={data.type === "study"}>Study</MDBSelectOption>
					<MDBSelectOption value="example" checked={data.type === "example"}>Example</MDBSelectOption>
				</MDBSelectOptions>
			</MDBSelect>
			<MDBSelect
				label="Genre"
				getValue={value => setGenre(value[0])}
				color='info'
			>
				<MDBSelectInput selected="Choose exam genre" />
				<MDBSelectOptions>
					<MDBSelectOption value="home" checked={data.genre === "home"}>Home</MDBSelectOption>
					<MDBSelectOption value="class" checked={data.genre === "class"}>Class</MDBSelectOption>
				</MDBSelectOptions>
			</MDBSelect>
			{genre === "home" && (
				<MDBSelect
					color='info'
					label='Students'
					search
					multiple
					options={studentOptions}
					name="students"
					getValue={value => setStudents(value)}
				/>
			)}
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
}