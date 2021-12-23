import React, { useState } from "react";
import { MDBBox, MDBBtn, MDBInput } from "mdbreact";
import * as _ from "lodash";
import { _mutateSpeech } from "../../../../redux/action/dataAction";

const CategoryForm = ({ row }) => {

	const [data, setData] = useState(!!row ? row : {
		id: null,
		name: "",
	});

	const [formErrors, setFormErrors] = useState("");

	const onSubmit = () => {
		if (!data.name) {
			return setFormErrors("You should input category name.");
		}
		setFormErrors("");
		if (!row || (row && row.name !== data.name)) {
			return _mutateSpeech(data);
		} else {
			return setFormErrors("You should input new category name.");
		}
	};

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			{!_.isEmpty(formErrors) &&
			<MDBBox note noteColor='danger' className="mb-3">
				{formErrors}
			</MDBBox>
			}
			<input
				type="hidden"
				name="id"
				autoComplete="id"
				defaultValue={data.id}
			/>
			<MDBInput
				type='text'
				label='Name'
				className="pl-3 pr-3"
				name="name"
				valueDefault={data.name}
				onChange={handleChange}
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
	);
};

export default CategoryForm;