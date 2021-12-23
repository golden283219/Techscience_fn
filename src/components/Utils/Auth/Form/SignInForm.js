import React, { useCallback, useState } from "react";
import * as _ from "lodash";
import AuthFormHeader from "./AuthFormHeader";
import { _signIn } from "../../../../redux/action/authAction";
import { MDBBox, MDBBtn, MDBInput, MDBLink } from "mdbreact";

const SignInForm = () => {
	const [formErrors, setFormErrors] = useState({});
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const renderErrors = useCallback(() => {
		const errorFields = Object.keys(formErrors);

		return errorFields.map((field, i) => (
			<li key={i}>{formErrors[field].message}</li>
		));
	}, [formErrors]);

	const onSubmit = () => {
		if (!username) {
			return setFormErrors({
				username: { message: "You should input username" },
			});
		}

		if (!password) {
			return setFormErrors({
				password: { message: "You should input password" },
			});
		}

		setFormErrors({});

		return _signIn({ username, password });
	};

	return (
		<>
			<AuthFormHeader title="Sign in" />
			{!_.isEmpty(formErrors) &&
			<MDBBox note noteColor='danger' className="mb-3">
				{renderErrors()}
			</MDBBox>
			}
			<MDBInput
				type='text'
				label='Username'
				className="pl-3 pr-3"
				name="username"
				onInput={e => setUsername(e.target.value)}
			/>
			<MDBInput
				type='password'
				label='Password'
				className="pl-3 pr-3"
				name="password"
				onInput={e => setPassword(e.target.value)}
			/>
			<div className='text-center mt-3 black-text'>
				<MDBBtn
					className='blue-gradient'
					size='lg'
					onClick={onSubmit}
				>
					Sign In
				</MDBBtn>
				<MDBLink to='/forgot_password'>
					<MDBBox tag='p' className='text-white'>
						<u>Forgot Password?</u>
					</MDBBox>
				</MDBLink>
				<hr />
			</div>
		</>
	);
};

export default SignInForm;