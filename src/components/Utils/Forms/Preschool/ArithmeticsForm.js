import React, { useState } from "react";
import { MDBBox, MDBBtn, MDBInput } from "mdbreact";
import { _mutateArithmatic } from "../../../../redux/action/dataAction";
import * as _ from "lodash";

const ArithmeticsForm = ({ row }) => {

	const [data, setData] = useState(!!row ? row : {
		id: null,
		category: "",
		quesText: "",
		ans: "",
	});
	const [formErrors, setFormErrors] = useState("");

	const onSubmit = () => {
		if (!data.category) {
			return setFormErrors("You should input category.");
		}
		if (!data.quesText) {
			return setFormErrors("You should input question.");
		}
		if (!data.ans) {
			return setFormErrors("You should input answer.");
		}
		setFormErrors("");
		if (!row || (row && row.quesText !== data.quesText) || (row && row.ans !== data.ans) || (row && row.category !== data.category)) {
			return _mutateArithmatic(data);
		} else {
			return setFormErrors("You should input new question.");
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
				label='Category'
				className="pl-3 pr-3"
				name="category"
				valueDefault={data.category}
				onChange={handleChange}
			/>
			<MDBInput
				type='text'
				label='Question'
				className="pl-3 pr-3"
				name="quesText"
				valueDefault={data.quesText}
				onChange={handleChange}
			/>
			<MDBInput
				type='text'
				label='Answer'
				className="pl-3 pr-3"
				name="ans"
				valueDefault={data.ans}
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

export default ArithmeticsForm;