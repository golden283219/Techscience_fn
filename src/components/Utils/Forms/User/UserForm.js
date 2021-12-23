import React, { useCallback, useEffect, useState } from "react";
import * as _ from "lodash";
import { isEmail } from "validator";
import PasswordValidator from "password-validator";
import { useSelector } from "react-redux";
import { _getAccountsToSelect, _getMembershipsToSelect, _getRolesToSelect, _mutateUser } from "../../../../redux/action/dataAction";
import { MDBBox, MDBBtn, MDBCol, MDBInput, MDBRow, MDBSelect, MDBSwitch } from "mdbreact";

const passwordSchema = new PasswordValidator()
	.is().min(6)
	.has().uppercase()
	.has().letters()
	.has().digits()
	.has().symbols()
	.has().not().spaces();

const UserForm = ({ row }) => {
	const role = useSelector(state => state.auth.role);
	const data = !!row ? row : {
		membership: {},
		account: {},
		role: {},
	};

	const [formErrors, setFormErrors] = useState(null);
	const [firstname, setFirstname] = useState(!data.firstname ? null : data.firstname);
	const [lastname, setLastname] = useState(!data.lastname ? null : data.lastname);
	const [username, setUsername] = useState(!data.username ? null : data.username);
	const [email, setEmail] = useState(!data.email ? null : data.email);
	const [password, setPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);
	const [membershipOptions, setMembershipOptions] = useState(null);
	const [accountOptions, setAccountOptions] = useState(null);
	const [roleOptions, setRoleOptions] = useState(null);
	const [membershipId, setMembershipId] = useState(null);
	const [accountId, setAccountId] = useState(null);
	const [roleId, setRoleId] = useState(null);
	const [approved, setApproved] = useState(data.approved === undefined ? true : data.approved);
	const [lockedOut, setLockedOut] = useState(data.lockedOut === undefined ? false : data.lockedOut);

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

		if (role === 1 && !accountId) {
			return setFormErrors({
				accountId: { message: "You should select where user belongs to." },
			});
		}

		if (role === 1 && !roleId) {
			return setFormErrors({
				accountId: { message: "You should select role for this user." },
			});
		}

		if (!username) {
			return setFormErrors({
				username: { message: "You should input username." },
			});
		}

		if (!email) {
			return setFormErrors({
				email: { message: "You should input email." },
			});
		}

		if (!isEmail(email)) {
			return setFormErrors({
				email: { message: "You should input correct email." },
			});
		}

		if (!data.id && !password) {
			return setFormErrors({
				password: { message: "You should input password." },
			});
		}

		if (!data.id && !passwordSchema.validate(password)) {
			return setFormErrors({
				password: { message: "Password is not strong enough\nAt least one uppercase, lowercase, number, symbol are required" },
			});
		}

		if (!data.id && password !== confirmPassword) {
			return setFormErrors({
				password: { message: "Password not match." },
			});
		}

		setFormErrors({});

		const user = {
			id: data.id,
			accountId: role === 1 ? accountId : 0,
			roleId: role === 1 ? roleId : 0,
			firstname, lastname, membershipId, username, email, approved, lockedOut, password, confirmPassword,
		};

		return _mutateUser(user);
	};

	useEffect(() => {
		_getMembershipsToSelect().then(memberships => {
			const options = memberships.map(membership => {
				return {
					text: membership.name,
					value: String(membership.id),
					checked: membership.id === data.membership.id,
				};
			});

			return setMembershipOptions(options);
		});

		if (role === 1) {
			_getAccountsToSelect().then(accounts => {
				const options = accounts.map(account => {
					return {
						text: account.name,
						value: String(account.id),
						checked: account.id === data.account.id,
					};
				});

				return setAccountOptions(options);
			});

			_getRolesToSelect().then(roles => {
				const options = roles.map(role => {
					return {
						text: role.name,
						value: String(role.id),
						checked: role.id === data.role.id,
					};
				});

				return setRoleOptions(options);
			});
		}
	}, [data.membership.id, data.role.id, role, data.account.id]);

	return (
		<>
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
						valueDefault={data.firstname}
						onInput={e => setFirstname(e.target.value)}
					/>
				</MDBCol>
				<MDBCol>
					<MDBInput
						type='text'
						label='Last Name'
						iconClass='white-text'
						name='lastname'
						valueDefault={data.lastname}
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
					/>
				</MDBCol>
				{role === 1 && (
					<MDBCol>
						<MDBSelect
							color='info'
							label='Role'
							options={roleOptions}
							getValue={value => setRoleId(Number(value[0]))}
						/>
					</MDBCol>
				)}
			</MDBRow>
			{role === 1 && (
				<MDBRow>
					<MDBCol>
						<MDBSelect
							color='info'
							label='Customer'
							search
							options={accountOptions}
							getValue={value => setAccountId(Number(value[0]))}
						/>
					</MDBCol>
				</MDBRow>
			)}
			<MDBRow>
				<MDBCol>
					<MDBInput
						type='text'
						label='Security Question'
						iconClass='white-text'
						name='securityQuestion'
					/>
				</MDBCol>
				<MDBCol>
					<MDBInput
						type='text'
						label='Your Answer'
						iconClass='white-text'
						name='securityAnswer'
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
						valueDefault={data.username}
						onInput={e => setUsername(e.target.value)}
					/>
				</MDBCol>
				<MDBCol>
					<MDBInput
						type='email'
						label='email'
						iconClass='white-text'
						name='email'
						valueDefault={data.email}
						onInput={e => setEmail(e.target.value)}
					/>
				</MDBCol>
			</MDBRow>
			{!data.id && (
				<MDBRow>
					<MDBCol>
						<MDBInput
							type='password'
							label='Password'
							iconClass='white-text'
							name='password'
							onInput={e => setPassword(e.target.value)}
						/>
					</MDBCol>
					<MDBCol>
						<MDBInput
							type='password'
							label='Confirm Password'
							iconClass='white-text'
							name='confirmPassword'
							onInput={e => setConfirmPassword(e.target.value)}
						/>
					</MDBCol>
				</MDBRow>
			)}
			<MDBRow>
				<MDBCol>
					<MDBSwitch
						labelLeft="Approved"
						labelRight=""
						checked={approved}
						onChange={() => setApproved(prevState => !prevState)}
					/>
				</MDBCol>
				<MDBCol>
					<MDBSwitch
						labelLeft="Locked out"
						labelRight=""
						checked={lockedOut}
						onChange={() => setLockedOut(prevState => !prevState)}
					/>
				</MDBCol>
			</MDBRow>
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

export default UserForm