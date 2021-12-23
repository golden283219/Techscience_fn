import React, { useCallback } from "react";
import * as _ from "lodash";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { simpleSchema } from "../../../../utils/inputShema";
import { _mutateMembership } from "../../../../redux/action/dataAction";
import { MDBBox, MDBBtn, MDBInput } from "mdbreact";

export default ({ row }) => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(simpleSchema),
	});
	const data = !!row ? row : {};

	const renderErrors = useCallback(allErrors => {
		const errorFields = Object.keys(allErrors);

		return errorFields.map((field, i) => (
			<li key={i}>{allErrors[field].message}</li>
		));
	}, []);

	return (
		<>
			{!_.isEmpty(errors) &&
			<MDBBox note noteColor='danger' className="mb-3">
				{renderErrors(errors)}
			</MDBBox>
			}
			<input
				type="hidden"
				name="id"
				autoComplete="id"
				defaultValue={data.id}
				ref={register}
			/>
			<MDBInput
				type='text'
				label='Name'
				className="pl-3 pr-3"
				name="name"
				valueDefault={data.name}
				inputRef={register}
			/>
			<div className='text-center mt-3 black-text'>
				<MDBBtn
					color="info"
					className="w-100 m-auto"
					onClick={handleSubmit(_mutateMembership)}
				>
					Confirm
				</MDBBtn>
			</div>
		</>
	);
}