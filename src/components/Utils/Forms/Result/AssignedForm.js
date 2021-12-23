import React, { useCallback, useEffect, useState } from "react";
import * as _ from "lodash";
import { decode } from "jsonwebtoken";
import { _assignExam, _getCoursesToSelect, _getExamsToSelect, _getSubjectsToSelect, _getUsersToSelect } from "../../../../redux/action/dataAction";
import { MDBBox, MDBBtn, MDBSelect } from "mdbreact";

export default () => {
	const [formErrors, setFormErrors] = useState({});
	const [subjectOptions, setSubjectOptions] = useState(null);
	const [courseOptions, setCourseOptions] = useState(null);
	const [examOptions, setExamOptions] = useState(null);
	const [studentOptions, setStudentOptions] = useState(null);
	const [subjectId, setSubjectId] = useState(null);
	const [courseId, setCourseId] = useState(null);
	const [examId, setExamId] = useState(null);
	const [students, setStudents] = useState([]);

	const renderErrors = useCallback(() => {
		const errorFields = Object.keys(formErrors);

		return errorFields.map((field, i) => (
			<li key={i}>{formErrors[field].message}</li>
		));
	}, [formErrors]);

	const onSubmit = () => {
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

		if (!examId) {
			return setFormErrors({
				examId: { message: "You should select an exam." },
			});
		}

		if (!students.length) {
			return setFormErrors({
				students: { message: "You should select students." },
			});
		}

		setFormErrors({});

		return _assignExam({ examId, students: students.map(student => Number(student)) });
	};

	useEffect(() => {
		_getSubjectsToSelect().then(subjects => {
			const options = subjects.map(subject => {
				return {
					text: subject.name,
					value: String(subject.id),
				};
			});

			return setSubjectOptions(options);
		});

		_getUsersToSelect({
			roleId: 3,
			accountId: decode(localStorage.getItem("token")).accountId,
		}).then(students => {
			const options = students.map(student => {
				return {
					text: student.fullname,
					value: String(student.id),
				};
			});

			return setStudentOptions(options);
		});
	}, []);

	useEffect(() => {
		if (!!subjectId) {
			_getCoursesToSelect({ subjectId }).then(courses => {
				const options = courses.map(course => {
					return {
						text: course.name,
						value: String(course.id),
					};
				});

				return setCourseOptions(options);
			});
		}
	}, [subjectId]);

	useEffect(() => {
		if (!!courseId) {
			_getExamsToSelect({ courseId }).then(exams => {
				const options = exams.map(exam => {
					return {
						text: exam.name,
						value: String(exam.id),
					};
				});

				return setExamOptions(options);
			});
		}
	}, [courseId]);

	return (
		<>
			{!_.isEmpty(formErrors) &&
			<MDBBox note noteColor='danger' className="mb-3">
				{renderErrors()}
			</MDBBox>
			}
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
			<MDBSelect
				color='info'
				label='Exam'
				search
				options={examOptions}
				name="examId"
				getValue={value => setExamId(Number(value[0]))}
			/>
			<MDBSelect
				color='info'
				label='Student'
				search
				multiple
				options={studentOptions}
				name="studentId"
				getValue={value => setStudents(value)}
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
		</>
	)
}