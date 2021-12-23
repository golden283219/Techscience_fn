import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as _ from "lodash";
import { MDBBox, MDBBtn, MDBInput, MDBSelect } from "mdbreact";
import { _mutateContent } from "../../../../redux/action/dataAction";

const TextToSpeechForm = ({ row }) => {

	const speeches = useSelector(state => state.data.speeches);
	const [speechOptions, setSpeechOptions] = useState(null);
	const [speechId, setSpeechId] = useState(null);

	const [data, setData] = useState(!!row ? row : {
		id: null,
		speechId: null,
		text: "",
	});

	const [formErrors, setFormErrors] = useState("");

	const onSubmit = () => {
		if (!data.text) {
			return setFormErrors("You should input text.");
		}

		if (!speechId) {
			return setFormErrors("You should select category.");
		}

		setFormErrors("");

		return _mutateContent(data);
	};

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		const options = speeches.speeches.map(speech => {
			return {
				text: speech.name,
				value: String(speech.id),
				checked: row && speech.name === row.category,
			};
		});

		return setSpeechOptions(options);
	}, [row, speeches.speeches]);

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
			<MDBSelect
				color='info'
				label='Category'
				search
				options={speechOptions}
				name="speechId"
				getValue={value => {
					setSpeechId(Number(value[0]));
					setData({
						...data,
						speechId: Number(value[0]),
					});
				}}
			/>
			<MDBInput
				type='text'
				label='Text'
				className="pl-3 pr-3"
				name="text"
				valueDefault={data.text}
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

export default TextToSpeechForm;