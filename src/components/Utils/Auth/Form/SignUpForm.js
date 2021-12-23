import React, { useCallback, useEffect, useState } from "react";
import * as _ from "lodash";
import { isEmail } from "validator";
import PasswordValidator from "password-validator";
import AuthFormHeader from "./AuthFormHeader";
import { _signUp } from "../../../../redux/action/authAction";
import { _getAccountsToSelect, _getMembershipsToSelect } from "../../../../redux/action/dataAction";
import { MDBBox, MDBBtn, MDBCol, MDBInput, MDBRow, MDBSelect } from "mdbreact";

const passwordSchema = new PasswordValidator()
	.is().min(6)
	.has().uppercase()
	.has().letters()
	.has().digits()
	.has().symbols()
	.has().not().spaces();

const SignUpForm = () => {
	const [formErrors, setFormErrors] = useState({});
	const [firstname, setFirstname] = useState(null);
	const [lastname, setLastname] = useState(null);
	const [username, setUsername] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);
	const [membershipOptions, setMembershipOptions] = useState(null);
	const [accountOptions, setAccountOptions] = useState(null);
	const [membershipId, setMembershipId] = useState(null);
	const [accountId, setAccountId] = useState(null);

	const renderErrors = useCallback(() => {
		const errorFields = Object.keys(formErrors);

		return errorFields.map((field, i) => (
			<li key={i}>{formErrors[field].message}</li>
		));
	}, [formErrors]);

	const onSubmit = () => {
		if (!firstname) {
			return setFormErrors({
				firstname: { message: "You should input firstname." },
			});
		}

		if (!lastname) {
			return setFormErrors({
				lastname: { message: "You should input lastname." },
			});
		}

		if (!membershipId) {
			return setFormErrors({
				membershipId: { message: "You should select membership." },
			});
		}

		if (!accountId) {
			return setFormErrors({
				accountId: { message: "You should select where you belong to." },
			});
		}

		if (!username) {
			return setFormErrors({
				username: { message: "You should input username." },
			});
		}

		if (!email) {
			return setFormErrors({
				email: { message: "You should input your email." },
			});
		}

		if (!isEmail(email)) {
			return setFormErrors({
				email: { message: "You should input correct email." },
			});
		}

		if (!password) {
			return setFormErrors({
				password: { message: "You should input password." },
			});
		}

		if (!passwordSchema.validate(password)) {
			return setFormErrors({
				password: { message: "Password is not strong enough\nAt least one uppercase, lowercase, number, symbol are required" },
			});
		}

		if (password !== confirmPassword) {
			return setFormErrors({
				password: { message: "Password not match." },
			});
		}

		setFormErrors({});

		return _signUp({ firstname, lastname, membershipId, accountId, username, email, password, confirmPassword });
	};

	useEffect(() => {
		_getMembershipsToSelect().then(memberships => {
			const options = memberships.map(membership => {
				return {
					text: membership.name,
					value: String(membership.id),
				};
			});

			return setMembershipOptions(options);
		});

		_getAccountsToSelect().then(accounts => {
			const options = accounts.map(account => {
				return {
					text: account.name,
					value: String(account.id),
				};
			});

			return setAccountOptions(options);
		});
	}, []);

	return (
		<>
			<AuthFormHeader title="Sign up" />
			{!_.isEmpty(formErrors) &&
			<MDBBox note noteColor='danger' className="mb-3">
				{renderErrors()}
			</MDBBox>
			}
			<MDBRow>
				<MDBCol>
					<MDBInput
						type='text'
						label='First Name'
						iconClass='white-text'
						name='firstname'
						className='text-white'
						onInput={e => setFirstname(e.target.value)}
					/>
				</MDBCol>
				<MDBCol>
					<MDBInput
						type='text'
						label='Last Name'
						iconClass='white-text'
						name='lastname'
						className='text-white'
						onInput={e => setLastname(e.target.value)}
					/>
				</MDBCol>
			</MDBRow>
			<MDBRow>
				<MDBCol>
					<MDBSelect
						color='info'
						label='Membership'
						options={membershipOptions}
						getValue={value => setMembershipId(Number(value[0]))}
						className='text-white'
					/>
				</MDBCol>
				<MDBCol>
					<MDBSelect
						color='info'
						label='Customer'
						search
						options={accountOptions}
						getValue={value => setAccountId(Number(value[0]))}
						className='text-white'
					/>
				</MDBCol>
			</MDBRow>
			<MDBRow>
				<MDBCol>
					<MDBInput
						type='text'
						label='Security Question'
						iconClass='white-text'
						name='securityQuestion'
						className='text-white'
					/>
				</MDBCol>
				<MDBCol>
					<MDBInput
						type='text'
						label='Your Answer'
						iconClass='white-text'
						name='securityAnswer'
						className='text-white'
					/>
				</MDBCol>
			</MDBRow>
			<MDBRow>
				<MDBCol>
					<MDBInput
						type='text'
						label='Username'
						iconClass='white-text'
						name='username'
						className='text-white'
						onInput={e => setUsername(e.target.value)}
					/>
				</MDBCol>
				<MDBCol>
					<MDBInput
						type='email'
						label='email'
						iconClass='white-text'
						name='email'
						className='text-white'
						onInput={e => setEmail(e.target.value)}
					/>
				</MDBCol>
			</MDBRow>
			<MDBRow>
				<MDBCol>
					<MDBInput
						type='password'
						label='Password'
						iconClass='white-text'
						name='password'
						className='text-white'
						onInput={e => setPassword(e.target.value)}
					/>
				</MDBCol>
				<MDBCol>
					<MDBInput
						type='password'
						label='Confirm Password'
						iconClass='white-text'
						name='confirmPassword'
						className='text-white'
						onInput={e => setConfirmPassword(e.target.value)}
					/>
				</MDBCol>
			</MDBRow>
			<div className='text-center mt-3 black-text'>
				<MDBBtn
					className='blue-gradient'
					size='lg'
					onClick={onSubmit}
				>
					Sign up
				</MDBBtn>
				<hr />
			</div>
		</>
	)
}

export default SignUpForm