import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import * as _ from "lodash";
import AuthFormHeader from "./AuthFormHeader";
import { isEmail } from "validator";
import { _forgotPassword } from "../../../../redux/action/authAction";
import { MDBBox, MDBBtn, MDBInput } from "mdbreact";

export default () => {
	const history = useHistory();
	const [formErrors, setFormErrors] = useState(null);
	const [email, setEmail] = useState(null);

	const renderErrors = useCallback(() => {
		const errorFields = Object.keys(formErrors);

		return errorFields.map(field => (
			<li>{formErrors[field].message}</li>
		));
	}, [formErrors]);

	const onSubmit = () => {

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

		history.push("/");
		return _forgotPassword({ email });
	};

	return (
		<>
			<AuthFormHeader title="Your email address" />
			{!_.isEmpty(formErrors) &&
			<MDBBox note noteColor='danger' className="mb-3">
				{renderErrors(formErrors)}
			</MDBBox>
			}
			<MDBInput
				type='text'
				label='Your Email'
				className="pl-3 pr-3"
				name="email"
				onInput={e => setEmail(e.target.value)}
			/>
			<div className='text-center mt-3 black-text'>
				<MDBBtn
					className='blue-gradient'
					size='lg'
					onClick={onSubmit}
				>
					Send
				</MDBBtn>
				<hr />
			</div>
		</>
	)
}