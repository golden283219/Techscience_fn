import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as _ from "lodash";
import AuthFormHeader from "./AuthFormHeader";
import { changePasswordSchema } from "../../../../utils/inputShema";
import { _changePassword } from "../../../../redux/action/authAction";
import { MDBBox, MDBBtn, MDBInput } from "mdbreact";

const ChangePasswordForm = () => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(changePasswordSchema),
	});
	const [formErrors, setFormErrors] = useState(null);

	const renderErrors = useCallback(allErrors => {
		const errorFields = Object.keys(allErrors);

		return errorFields.map(field => (
			<li>{allErrors[field].message}</li>
		));
	}, []);

	const onSubmit = data => {
		if (data.newPassword !== data.confirmPassword) {
			return setFormErrors({
				password: { message: "Password not match." },
			});
		}

		return _changePassword(data);
	};

	return (
		<>
			<AuthFormHeader title="Change Password" />
			{!_.isEmpty({ ...errors, ...formErrors }) &&
			<MDBBox note noteColor='danger' className="mb-3">
				{renderErrors({ ...errors, ...formErrors })}
			</MDBBox>
			}
			<MDBInput
				type='password'
				label='Current Password'
				className="pl-3 pr-3"
				name="password"
				inputRef={register}
			/>
			<MDBInput
				type='password'
				label='New Password'
				className="pl-3 pr-3"
				name="newPassword"
				inputRef={register}
			/>
			<MDBInput
				type='password'
				label='Confirm Password'
				className="pl-3 pr-3"
				name="confirmPassword"
				inputRef={register}
			/>
			<div className='text-center mt-3 black-text'>
				<MDBBtn
					className='blue-gradient'
					size='lg'
					onClick={handleSubmit(onSubmit)}
				>
					Confirm
				</MDBBtn>
				<hr />
			</div>
		</>
	);
};

export default ChangePasswordForm