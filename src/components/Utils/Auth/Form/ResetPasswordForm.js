import React, { useCallback, useState } from "react";
import * as _ from "lodash";
import { useHistory, useParams } from "react-router-dom";
import AuthFormHeader from "./AuthFormHeader";
import PasswordValidator from "password-validator";
import { _resetPassword } from "../../../../redux/action/authAction";
import { MDBBox, MDBBtn, MDBInput } from "mdbreact";

const passwordSchema = new PasswordValidator()
	.is().min(6)
	.has().uppercase()
	.has().letters()
	.has().digits()
	.has().symbols()
	.has().not().spaces();

export default () => {
	const history = useHistory();
	const { resetToken } = useParams();
	const [formErrors, setFormErrors] = useState(null);
	const [newPassword, setNewPassword] = useState(null);
	const [confirmPassword, setConfirmPassword] = useState(null);

	const renderErrors = useCallback(() => {
		const errorFields = Object.keys(formErrors);

		return errorFields.map(field => (
			<li>{formErrors[field].message}</li>
		));
	}, [formErrors]);

	const onSubmit = () => {

		if (!newPassword) {
			return setFormErrors({
				newPassword: { message: "You should input password." },
			});
		}

		if (!passwordSchema.validate(newPassword)) {
			return setFormErrors({
				password: { message: "Password is not strong enough\nAt least one uppercase, lowercase, number, symbol are required" },
			});
		}

		if (newPassword !== confirmPassword) {
			return setFormErrors({
				newPassword: { message: "Password not match." },
			});
		}

		setFormErrors({});

		return _resetPassword({ newPassword, confirmPassword, resetToken })
			.then(({ scs, msg, setResult }) => {
				if (!!scs) {
					history.push("/sign_in");
					return setResult({ scs, msg });
				}
				return;
			});
	};

	return (
		<>
			<AuthFormHeader title="Reset Password" />
			{!_.isEmpty(formErrors) &&
			<MDBBox note noteColor='danger' className="mb-3">
				{renderErrors(formErrors)}
			</MDBBox>
			}
			<MDBInput
				type='password'
				label='New Password'
				className="pl-3 pr-3"
				name="newPassword"
				onInput={e => setNewPassword(e.target.value)}
			/>
			<MDBInput
				type='password'
				label='Confirm Password'
				className='pl-3 pr-3'
				name='confirmPassword'
				onInput={e => setConfirmPassword(e.target.value)}
			/>
			<div className='text-center mt-3 black-text'>
				<MDBBtn
					className='blue-gradient'
					size='lg'
					onClick={onSubmit}
				>
					Reset
				</MDBBtn>
				<hr />
			</div>
		</>
	);
}