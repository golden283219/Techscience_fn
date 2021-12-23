import {
	SET_ACCOUNTS,
	SET_ASSIGNEDS,
	SET_CHOICES,
	SET_CONTENTS,
	SET_COURSES,
	SET_EXAMS,
	SET_GRADES,
	SET_LEVELS,
	SET_MEMBERSHIPS,
	SET_PENDINGS,
	SET_QUESTIONS,
	SET_REQUESTEDS,
	SET_ROLES,
	SET_SPEECHES,
	SET_SUBJECTS,
	SET_USERS,
	SET_RESULT_QUESTION,
	SET_MISSING_LETTERS,
	SET_ARITHMATICS,
} from "../action/type";

const initialState = {
	accounts: {},
	users: {},
	memberships: {},
	roles: {},
	subjects: {},
	courses: {},
	levels: {},
	exams: {},
	questions: {},
	choices: {},
	pendings: {},
	assigneds: {},
	requesteds: {},
	gradeds: {},
	speeches: {},
	arithmatics: {},
	missingLetters: {},
	contents: {},
	resultQuestion: ''
};

const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_ACCOUNTS:
			return { ...state, accounts: payload };

		case SET_USERS:
			return { ...state, users: payload };

		case SET_MEMBERSHIPS:
			return { ...state, memberships: payload };

		case SET_ROLES:
			return { ...state, roles: payload };

		case SET_SUBJECTS:
			return { ...state, subjects: payload };

		case SET_COURSES:
			return { ...state, courses: payload };

		case SET_LEVELS:
			return { ...state, levels: payload };

		case SET_EXAMS:
			return { ...state, exams: payload };

		case SET_QUESTIONS:
			return { ...state, questions: payload };

		case SET_CHOICES:
			return { ...state, choices: payload };

		case SET_PENDINGS:
			return { ...state, pendings: payload };

		case SET_ASSIGNEDS:
			return { ...state, assigneds: payload };

		case SET_REQUESTEDS:
			return { ...state, requesteds: payload };

		case SET_GRADES:
			return { ...state, gradeds: payload };

		case SET_SPEECHES:
			return { ...state, speeches: payload };

		case SET_CONTENTS: {
			return { ...state, contents: payload };
		}

		case SET_MISSING_LETTERS: {
			return { ...state, missingLetters: payload };
		}

		case SET_ARITHMATICS: {
			return { ...state, arithmatics: payload };
		}

		case SET_RESULT_QUESTION: {
			return { ...state, resultQuestion: payload }
		}

		default:
			return state;
	}
};

export default authReducer;