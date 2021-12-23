import { dispatch } from "../store";
import { client } from "./graphql/client";
import { setResult } from "./resultAction";

import {
	ACCOUNT_TABLE,
	ARITHMATIC_TABLE,
	CHOICE_TABLE,
	CONTENT_TABLE,
	COURSE_TABLE,
	EXAM_TABLE,
	LEVEL_TABLE,
	MEMBERSHIP_TABLE,
	MISSING_TABLE,
	QUESTION_TABLE,
	RESULT_TABLE,
	ROLE_TABLE,
	SPEECH_TABLE,
	SUBJECT_TABLE,
	USER_TABLE,
} from "../../utils/tables";

import { CREATE_ACCOUNT, DELETE_ACCOUNT, EDIT_ACCOUNT, EDIT_ACCOUNT_IMAGE, GET_ACCOUNTS } from "./graphql/account.graphql";

import { CREATE_USER, DELETE_USER, EDIT_USER, GET_USERS, GET_USERS_TO_SELECT } from "./graphql/user.graphql";

import { CREATE_ROLE, DELETE_ROLE, EDIT_ROLE, GET_ROLES, GET_ROLES_TO_SELECT } from "./graphql/role.graphql";

import { CREATE_MEMBERSHIP, DELETE_MEMBERSHIP, EDIT_MEMBERSHIP, GET_MEMBERSHIPS, GET_MEMBERSHIPS_TO_SELECT } from "./graphql/membership.graphql";

import { CREATE_SUBJECT, DELETE_SUBJECT, EDIT_SUBJECT, GET_SUBJECTS, GET_SUBJECTS_TO_SELECT } from "./graphql/subject.graphql";

import { CREATE_LEVEL, DELETE_LEVEL, EDIT_LEVEL, GET_LEVELS, GET_LEVELS_TO_SELECT } from "./graphql/level.graphql";

import { CREATE_COURSE, DELETE_COURSE, EDIT_COURSE, GET_COURSES } from "./graphql/course.graphql";

import { ASSIGN_EXAM, CREATE_EXAM, DELETE_EXAM, EDIT_EXAM, GET_EXAM_FOR_TEST, GET_EXAMS, GET_EXAMS_TO_SELECT, REQUEST_EXAM } from "./graphql/exam.graphql";

import { CREATE_QUESTION, CREATE_QUESTIONS, DELETE_QUESTION, EDIT_QUESTION, GET_QUESTIONS } from "./graphql/question.graphql";

import { CREATE_CHOICE, DELETE_CHOICE, EDIT_CHOICE, GET_CHOICES } from "./graphql/choice.graphql";

import { ACCEPT_RESULT, GET_ANSWERS_TO_GRADE, GET_ASSINGEDS, GET_GRADEDS, GET_PENDINGS, GET_REQUESTEDS } from "./graphql/result.graphql";

import { CREATE_SPEECH, DELETE_SPEECH, EDIT_SPEECH, GET_SPEECHES } from "./graphql/speech.graphql";

import { CREATE_CONTENT, DELETE_CONTENT, EDIT_CONTENT, GET_CONTENTS } from "./graphql/content.graphql";

import { CREATE_MISSING, DELETE_MISSING, EDIT_MISSING, GET_MISSING_LETTERS } from "./graphql/missing.graphql";

import {
	SET_ACCOUNTS,
	SET_ARITHMATICS,
	SET_ASSIGNEDS,
	SET_CHOICES,
	SET_CONTENTS,
	SET_COURSES,
	SET_EXAMS,
	SET_GRADES,
	SET_LEVELS,
	SET_MEMBERSHIPS,
	SET_MISSING_LETTERS,
	SET_PENDINGS,
	SET_QUESTIONS,
	SET_REQUESTEDS,
	SET_RESULT_QUESTION,
	SET_ROLES,
	SET_SPEECHES,
	SET_SUBJECTS,
	SET_USERS,
} from "../action/type";
import { CREATE_ARITHMATIC, DELETE_ARITHMATIC, EDIT_ARITHMATIC, GET_ARITHMATICS } from "./graphql/arithmatic.graphql";

export const basePaginateCriteria = {
	skip: 0,
	limit: 5,
	order: "id",
	sort: "desc",
};

// actions for accounts

export const _getAccounts = criteria => {
	return client.query({
		query: GET_ACCOUNTS,
		variables: {
			paginateReq: criteria,
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_ACCOUNTS, payload: data.accounts });
	});
};

export const _getAccountsToSelect = () => {
	return client.query({
		query: GET_ACCOUNTS,
		variables: {
			
			paginateReq: {
				skip: 0,
				limit: 0,
				order: "id",
				sort: "desc",
			},

		},
	}).then(({ data, error }) => {
		if (!!error) {
			setResult();
			return null;
		}

		return data.accounts.accounts;
	});
};

export const _mutateAccount = account => {
	if (!!account.id) {
		return client.mutate({
			mutation: EDIT_ACCOUNT,
			variables: { editAccountReq: { ...account, id: Number(account.id) } },
			update: cache => cache.reset(),
		}).then(({ data, error }) => {
			if (!!error) {
				return setResult();
			}

			const { editAccount: { scs, msg } } = data;

			return setResult({ scs, msg, refresh: ACCOUNT_TABLE });
		});
	}

	delete account.id;
	return client.mutate({
		mutation: CREATE_ACCOUNT,
		variables: { createAccountReq: account },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { createAccount: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: ACCOUNT_TABLE });
	});
};

export const _editAccountImage = editAccountImageReq => {
	return client.mutate({
		mutation: EDIT_ACCOUNT_IMAGE,
		variables: { editAccountImageReq },
	}).then(({ data, errors }) => {
		if (!!errors) {
			return setResult();
		}

		console.log("rest", data);
		const { editAccountImage: { scs, msg } } = data;
		return setResult({ scs, msg });
	});
};

export const _deleteAccount = ({ id }) => {
	return client.mutate({
		mutation: DELETE_ACCOUNT,
		variables: { id: Number(id) },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { deleteAccount: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: ACCOUNT_TABLE });
	});
};

// actions for users

export const _getUsers = criteria => {
	return client.query({
		query: GET_USERS,
		variables: {
			paginateReq: criteria,
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_USERS, payload: data.users });
	});
};

export const _getUsersToSelect = filter => {
	return client.query({
		query: GET_USERS_TO_SELECT,
		variables: {
			paginateReq: {
				skip: 0,
				limit: 0,
				order: "id",
				sort: "desc",
				//filter: JSON.stringify(filter),
			},
		},
	}).then(({ data, error }) => {
		if (!!error) {
			setResult();
			return null;
		}

		return data.users.users;
	});
};

export const _mutateUser = user => {
	if (!!user.id) {
		delete user.password;
		delete user.confirmPassword;

		return client.mutate({
			mutation: EDIT_USER,
			variables: { editUserReq: { ...user, id: Number(user.id) } },
			update: cache => cache.reset(),
		}).then(({ data, error }) => {
			if (!!error) {
				return setResult();
			}

			const { editUser: { scs, msg } } = data;

			return setResult({ scs, msg, refresh: USER_TABLE });
		});
	}

	delete user.id;
	return client.mutate({
		mutation: CREATE_USER,
		variables: { createUserReq: user },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { createUser: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: USER_TABLE });
	});
};

export const _deleteUser = ({ id }) => {
	return client.mutate({
		mutation: DELETE_USER,
		variables: { id: Number(id) },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { deleteUser: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: USER_TABLE });
	});
};

// actions for roles

export const _getRoles = criteria => {
	return client.query({
		query: GET_ROLES,
		variables: {
			paginateReq: criteria,
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_ROLES, payload: data.roles });
	});
};

export const _getRolesToSelect = () => {
	return client.query({
		query: GET_ROLES_TO_SELECT,
		variables: {
			paginateReq: {
				skip: 0,
				limit: 0,
				order: "id",
				sort: "desc",
			},
		},
	}).then(({ data, error }) => {
		if (!!error) {
			setResult();
			return null;
		}

		return data.roles.roles;
	});
};

export const _mutateRole = role => {
	if (!!role.id) {
		return client.mutate({
			mutation: EDIT_ROLE,
			variables: { editRoleReq: { ...role, id: Number(role.id) } },
			update: cache => cache.reset(),
		}).then(({ data, error }) => {
			if (!!error) {
				return setResult();
			}

			const { editRole: { scs, msg } } = data;

			return setResult({ scs, msg, refresh: ROLE_TABLE });
		});
	}

	delete role.id;
	return client.mutate({
		mutation: CREATE_ROLE,
		variables: { createRoleReq: role },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { createRole: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: ROLE_TABLE });
	});
};

export const _deleteRole = ({ id }) => {
	return client.mutate({
		mutation: DELETE_ROLE,
		variables: { id: Number(id) },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { deleteRole: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: ROLE_TABLE });
	});
};

// actions for memberships

export const _getMemberships = criteria => {
	return client.query({
		query: GET_MEMBERSHIPS,
		variables: {
			paginateReq: criteria,
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_MEMBERSHIPS, payload: data.memberships });
	});
};

export const _getMembershipsToSelect = () => {
	return client.query({
		query: GET_MEMBERSHIPS_TO_SELECT,
		variables: {
			paginateReq: {
				skip: 0,
				limit: 0,
				order: "id",
				sort: "desc",
			},
		},
	}).then(({ data, error }) => {
		if (!!error) {
			setResult();
			return null;
		}

		return data.memberships.memberships;
	});
};

export const _mutateMembership = membership => {
	if (!!membership.id) {
		return client.mutate({
			mutation: EDIT_MEMBERSHIP,
			variables: { editMembershipReq: { ...membership, id: Number(membership.id) } },
			update: cache => cache.reset(),
		}).then(({ data, error }) => {
			if (!!error) {
				return setResult();
			}

			const { editMembership: { scs, msg } } = data;

			return setResult({ scs, msg, refresh: MEMBERSHIP_TABLE });
		});
	}

	delete membership.id;
	return client.mutate({
		mutation: CREATE_MEMBERSHIP,
		variables: { createMembershipReq: membership },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { createMembership: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: MEMBERSHIP_TABLE });
	});
};

export const _deleteMembership = ({ id }) => {
	return client.mutate({
		mutation: DELETE_MEMBERSHIP,
		variables: { id: Number(id) },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { deleteMembership: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: MEMBERSHIP_TABLE });
	});
};

// actions for subjects

export const _getSubjects = criteria => {
	return client.query({
		query: GET_SUBJECTS,
		variables: {
			paginateReq: criteria,
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_SUBJECTS, payload: data.subjects });
	});
};

export const _getSubjectsToSelect = () => {
	return client.query({
		query: GET_SUBJECTS_TO_SELECT,
		variables: {
			paginateReq: {
				skip: 0,
				limit: 0,
				order: "name",
				sort: "asc",
			},
		},
	}).then(({ data, error }) => {
		if (!!error) {
			setResult();
			return null;
		}

		return data.subjects.subjects;
	});
};

export const _mutateSubject = subject => {
	if (!!subject.id) {
		return client.mutate({
			mutation: EDIT_SUBJECT,
			variables: { editSubjectReq: { ...subject, id: Number(subject.id) } },
			update: cache => cache.reset(),
		}).then(({ data, error }) => {
			if (!!error) {
				return setResult();
			}

			const { editSubject: { scs, msg } } = data;

			return setResult({ scs, msg, refresh: SUBJECT_TABLE });
		});
	}

	delete subject.id;
	return client.mutate({
		mutation: CREATE_SUBJECT,
		variables: { createSubjectReq: subject },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { createSubject: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: SUBJECT_TABLE });
	});
};

export const _deleteSubject = ({ id }) => {
	return client.mutate({
		mutation: DELETE_SUBJECT,
		variables: { id: Number(id) },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { deleteSubject: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: SUBJECT_TABLE });
	});
};

// actions for levels

export const _getLevels = criteria => {
	return client.query({
		query: GET_LEVELS,
		variables: {
			paginateReq: criteria,
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_LEVELS, payload: data.levels });
	});
};

export const _getLevelsToSelect = () => {
	return client.query({
		query: GET_LEVELS_TO_SELECT,
		variables: {
			paginateReq: {
				skip: 0,
				limit: 0,
				order: "id",
				sort: "desc",
			},
		},
	}).then(({ data, error }) => {
		if (!!error) {
			setResult();
			return null;
		}

		return data.levels.levels;
	});
};

export const _mutateLevel = level => {
	if (!!level.id) {
		return client.mutate({
			mutation: EDIT_LEVEL,
			variables: { editLevelReq: { ...level, id: Number(level.id) } },
			update: cache => cache.reset(),
		}).then(({ data, error }) => {
			if (!!error) {
				return setResult();
			}

			const { editLevel: { scs, msg } } = data;

			return setResult({ scs, msg, refresh: LEVEL_TABLE });
		});
	}

	delete level.id;
	return client.mutate({
		mutation: CREATE_LEVEL,
		variables: { createLevelReq: level },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { createLevel: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: LEVEL_TABLE });
	});
};

export const _deleteLevel = ({ id }) => {
	return client.mutate({
		mutation: DELETE_LEVEL,
		variables: { id: Number(id) },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { deleteLevel: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: LEVEL_TABLE });
	});
};

// actions for courses

export const _getCourses = criteria => {
	return client.query({
		query: GET_COURSES,
		variables: {
			paginateReq: criteria,
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_COURSES, payload: data.courses });
	});
};

export const _getCoursesToSelect = filter => {
	return client.query({
		query: GET_COURSES,
		variables: {
			paginateReq: {
				skip: 0,
				limit: 0,
				order: "id",
				sort: "desc",
				filter: JSON.stringify(filter),
			},
		},
	}).then(({ data, error }) => {
		if (!!error) {
			setResult();
			return null;
		}

		return data.courses.courses;
	});
};

export const _mutateCourse = course => {
	if (!!course.id) {
		return client.mutate({
			mutation: EDIT_COURSE,
			variables: { editCourseReq: { ...course, id: Number(course.id) } },
			update: cache => cache.reset(),
		}).then(({ data, error }) => {
			if (!!error) {
				return setResult();
			}

			const { editCourse: { scs, msg } } = data;

			return setResult({ scs, msg, refresh: COURSE_TABLE });
		});
	}

	delete course.id;
	return client.mutate({
		mutation: CREATE_COURSE,
		variables: { createCourseReq: course },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { createCourse: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: COURSE_TABLE });
	});
};

export const _deleteCourse = ({ id }) => {
	return client.mutate({
		mutation: DELETE_COURSE,
		variables: { id: Number(id) },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { deleteCourse: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: COURSE_TABLE });
	});
};

// actions for exams

export const _getExams = criteria => {
	return client.query({
		query: GET_EXAMS,
		variables: {
			paginateReq: criteria,
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_EXAMS, payload: data.exams });
	});
};

export const _getExamForTest = id => {
	return client.query({
		query: GET_EXAM_FOR_TEST,
		variables: {
			paginateReq: {
				...basePaginateCriteria,
				filter: JSON.stringify({ id }),
			},
		},
	}).then(({ data, errors }) => {
		if (!!errors) {
			return setResult();
		}

		const { exams: { exams } } = data;
		return exams[0];
	});
};

export const _getExamsToSelect = filter => {
	return client.query({
		query: GET_EXAMS_TO_SELECT,
		variables: {
			paginateReq: {
				skip: 0,
				limit: 0,
				order: "id",
				sort: "desc",
				filter: JSON.stringify(filter),
			},
		},
	}).then(({ data, error }) => {
		if (!!error) {
			setResult();
			return null;
		}

		return data.exams.exams;
	});
};

export const _mutateExam = exam => {
	if (!!exam.id) {
		return client.mutate({
			mutation: EDIT_EXAM,
			variables: { editExamReq: { ...exam, id: Number(exam.id) } },
			update: cache => cache.reset(),
		}).then(({ data, error }) => {
			if (!!error) {
				return setResult();
			}

			const { editExam: { scs, msg } } = data;

			return setResult({ scs, msg, refresh: EXAM_TABLE });
		});
	}

	delete exam.id;
	return client.mutate({
		mutation: CREATE_EXAM,
		variables: { createExamReq: exam },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { createExam: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: EXAM_TABLE });
	});
};

export const _deleteExam = ({ id }) => {
	return client.mutate({
		mutation: DELETE_EXAM,
		variables: { id: Number(id) },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { deleteExam: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: EXAM_TABLE });
	});
};

export const _requestExam = id => {
	return client.mutate({
		mutation: REQUEST_EXAM,
		variables: { id: Number(id) },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { requestExam: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: RESULT_TABLE });
	});
};

export const _assignExam = assignExamReq => {
	return client.mutate({
		mutation: ASSIGN_EXAM,
		variables: { assignExamReq },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { assignExam: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: RESULT_TABLE });
	});
};

// actions for questions

export const _getQuestions = (criteria, examId) => {
	return client.query({
		query: GET_QUESTIONS,
		variables: {
			paginateReq: {
				...criteria,
				filter: JSON.stringify({ examId }),
			},
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_QUESTIONS, payload: data.questions });
	});
};

export const _mutateQuestion = question => {
	if (!!question.id) {
		return client.mutate({
			mutation: EDIT_QUESTION,
			variables: { editQuestionReq: { ...question, id: Number(question.id) } },
			update: cache => cache.reset(),
		}).then(({ data, error }) => {
			if (!!error) {
				return setResult();
			}

			const { editQuestion: { scs, msg } } = data;

			return setResult({ scs, msg, refresh: QUESTION_TABLE });
		});
	}

	delete question.id;
	return client.mutate({
		mutation: CREATE_QUESTION,
		variables: { createQuestionReq: question },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}
		dispatch({ type: SET_RESULT_QUESTION, payload: data.createQuestion.question.id });

		const { createQuestion: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: QUESTION_TABLE });
	});
};

export const _createQuestions = createQuestionsReq => {
	return client.mutate({
		mutation: CREATE_QUESTIONS,
		variables: { createQuestionsReq },
		update: cache => cache.reset(),
	}).then(({ data, errors }) => {
		if (!!errors) return setResult();
		const { createQuestions: { scs, msg } } = data;
		return setResult({ scs, msg, refresh: QUESTION_TABLE });
	});
};

export const _deleteQuestion = ({ id, examId }) => {
	return client.mutate({
		mutation: DELETE_QUESTION,
		variables: { id: Number(id) },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { deleteQuestion: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: QUESTION_TABLE });
	});
};

// actions for choices

export const _getChoices = (criteria, questionId) => {
	return client.query({
		query: GET_CHOICES,
		variables: {
			paginateReq: {
				...criteria,
				filter: JSON.stringify({ questionId }),
			},
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_CHOICES, payload: data.choices });
	});
};

export const _mutateChoice = choice => {
	if (!!choice.id) {
		return client.mutate({
			mutation: EDIT_CHOICE,
			variables: { editChoiceReq: { ...choice, id: Number(choice.id) } },
			update: cache => cache.reset(),
		}).then(({ data, error }) => {
			if (!!error) {
				return setResult();
			}

			const { editChoice: { scs, msg } } = data;

			return setResult({ scs, msg, refresh: CHOICE_TABLE });
		});
	}

	delete choice.id;
	return client.mutate({
		mutation: CREATE_CHOICE,
		variables: { createChoiceReq: choice },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { createChoice: { scs, msg } } = data;

		setResult({ refresh: QUESTION_TABLE });
		return setResult({ scs, msg, refresh: CHOICE_TABLE });
	});
};

export const _deleteChoice = ({ id, questionId }) => {
	return client.mutate({
		mutation: DELETE_CHOICE,
		variables: { id: Number(id) },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { deleteChoice: { scs, msg } } = data;

		setResult({ refresh: QUESTION_TABLE });
		return setResult({ scs, msg, refresh: CHOICE_TABLE });
	});
};

// get for missingletters

export const _getMissingLetters = (criteria, missingId) => {
	return client.query({
		query: GET_MISSING_LETTERS,
		variables: {
			paginateReq: {
				...criteria,
				filter: JSON.stringify({ missingId }),
			},
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_MISSING_LETTERS, payload: data.missingLetters });
	});
};

export const _mutateMissing = missing => {

	if (!!missing.id) {
		delete missing["__typename"];
		return client.mutate({
			mutation: EDIT_MISSING,
			variables: { editMissingReq: { ...missing, id: Number(missing.id) } },
			update: cache => cache.reset(),
		}).then(({ data, error }) => {
			if (!!error) {
				return setResult();
			}

			const { editMissing: { scs, msg } } = data;

			return setResult({ scs, msg, refresh: MISSING_TABLE });
		});
	}

	delete missing.id;

	return client.mutate({
		mutation: CREATE_MISSING,
		variables: { createMissingReq: missing },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { createMissing: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: MISSING_TABLE });
	});
};

export const _deleteMissing = ({ id }) => {
	return client.mutate({
		mutation: DELETE_MISSING,
		variables: { id: Number(id) },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { deleteMissing: { scs, msg } } = data;
		setResult({ refresh: MISSING_TABLE });
		return setResult({ scs, msg, refresh: MISSING_TABLE });
	});
};

// get for speech

export const _getSpeeches = (criteria, speechId) => {
	return client.query({
		query: GET_SPEECHES,
		variables: {
			paginateReq: {
				...criteria,
				filter: JSON.stringify({ speechId }),
			},
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_SPEECHES, payload: data.speeches });
	});
};

export const _mutateSpeech = speech => {

	if (!!speech.id) {
		delete speech["__typename"];
		return client.mutate({
			mutation: EDIT_SPEECH,
			variables: { editSpeechReq: { ...speech, id: Number(speech.id) } },
			update: cache => cache.reset(),
		}).then(({ data, error }) => {
			if (!!error) {
				return setResult();
			}

			const { editSpeech: { scs, msg } } = data;

			return setResult({ scs, msg, refresh: SPEECH_TABLE });
		});
	}

	delete speech.id;

	return client.mutate({
		mutation: CREATE_SPEECH,
		variables: { createSpeechReq: speech },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { createSpeech: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: SPEECH_TABLE });
	});
};

export const _deleteSpeech = ({ id }) => {
	return client.mutate({
		mutation: DELETE_SPEECH,
		variables: { id: Number(id) },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { deleteSpeech: { scs, msg } } = data;
		setResult({ refresh: CONTENT_TABLE });
		return setResult({ scs, msg, refresh: SPEECH_TABLE });
	});
};

// get for content

export const _getContents = (criteria, contentId) => {
	return client.query({
		query: GET_CONTENTS,
		variables: {
			paginateReq: {
				...criteria,
				filter: JSON.stringify({ contentId }),
			},
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_CONTENTS, payload: data.contents });
	});
};

export const _mutateContent = content => {

	if (!!content.id) {

		delete content.category;
		delete content.__typename;
		delete content.speechId;

		return client.mutate({
			mutation: EDIT_CONTENT,
			variables: { editContentReq: { ...content, id: Number(content.id) } },
			update: cache => cache.reset(),
		}).then(({ data, error }) => {
			if (!!error) {
				return setResult();
			}

			const { editContent: { scs, msg } } = data;

			return setResult({ scs, msg, refresh: CONTENT_TABLE });
		});
	}

	delete content.id;

	return client.mutate({
		mutation: CREATE_CONTENT,
		variables: { createContentReq: content },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { createContent: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: CONTENT_TABLE });
	});
};

export const _deleteContent = ({ id }) => {
	return client.mutate({
		mutation: DELETE_CONTENT,
		variables: { id: Number(id) },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { deleteContent: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: CONTENT_TABLE });
	});
};

// actions for arithmatic

export const _getArithmatics = (criteria, arithmaticId) => {
	return client.query({
		query: GET_ARITHMATICS,
		variables: {
			paginateReq: {
				...criteria,
				filter: JSON.stringify({ arithmaticId }),
			},
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_ARITHMATICS, payload: data.arithmatics });
	});
};

export const _mutateArithmatic = arithmatic => {

	if (!!arithmatic.id) {
		delete arithmatic["__typename"];
		return client.mutate({
			mutation: EDIT_ARITHMATIC,
			variables: { editArithmaticReq: { ...arithmatic, id: Number(arithmatic.id) } },
			update: cache => cache.reset(),
		}).then(({ data, error }) => {
			if (!!error) {
				return setResult();
			}

			const { editArithmatic: { scs, msg } } = data;

			return setResult({ scs, msg, refresh: ARITHMATIC_TABLE });
		});
	}

	delete arithmatic.id;

	return client.mutate({
		mutation: CREATE_ARITHMATIC,
		variables: { createArithmaticReq: arithmatic },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { createArithmatic: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: ARITHMATIC_TABLE });
	});
};

export const _deleteArithmatic = ({ id }) => {
	return client.mutate({
		mutation: DELETE_ARITHMATIC,
		variables: { id: Number(id) },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { deleteArithmatic: { scs, msg } } = data;
		setResult({ refresh: ARITHMATIC_TABLE });
		return setResult({ scs, msg, refresh: ARITHMATIC_TABLE });
	});
};

// actions for results

export const _getPendings = criteria => {
	return client.query({
		query: GET_PENDINGS,
		variables: {
			paginateReq: criteria,
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}
		return dispatch({ type: SET_PENDINGS, payload: data.results.pendings });
	});
};

export const _getAssigneds = criteria => {
	return client.query({
		query: GET_ASSINGEDS,
		variables: {
			paginateReq: criteria,
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_ASSIGNEDS, payload: data.results.assigneds });
	});
};

export const _getRequesteds = criteria => {
	return client.query({
		query: GET_REQUESTEDS,
		variables: {
			paginateReq: criteria,
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_REQUESTEDS, payload: data.results.requesteds });
	});
};

export const _getGradeds = criteria => {
	return client.query({
		query: GET_GRADEDS,
		variables: {
			paginateReq: criteria,
		},
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		return dispatch({ type: SET_GRADES, payload: data.results.gradeds });
	});
};

export const _getAnswersToGrade = filter => {
	return client.query({
		query: GET_ANSWERS_TO_GRADE,
		variables: {
			paginateReq: {
				...basePaginateCriteria,
				filter: JSON.stringify(filter),
			},
		},
	}).then(({ data, errors }) => {
		if (!!errors) {
			setResult();
			return null;
		}

		return data.answers.answers;
	});
};

export const _acceptResult = ({ id }) => {
	return client.mutate({
		mutation: ACCEPT_RESULT,
		variables: { id: Number(id) },
		update: cache => cache.reset(),
	}).then(({ data, error }) => {
		if (!!error) {
			return setResult();
		}

		const { acceptResult: { scs, msg } } = data;

		return setResult({ scs, msg, refresh: RESULT_TABLE });
	});
};