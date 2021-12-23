import React, { useCallback, useState } from "react";
import * as _ from "lodash";
import { useDropzone } from "react-dropzone";
import { _editAccountImage } from "../../../../redux/action/dataAction";
import { MDBBox, MDBBtn, MDBContainer } from "mdbreact";

export default () => {
	const onDrop = useCallback(files => setImage(files[0]), []);

	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: "image/jpeg, image/png, image/gif",
	});
	const [image, setImage] = useState(null);
	const [formErrors, setFormErrors] = useState({});

	const renderErrors = useCallback(() => {
		const errorFields = Object.keys(formErrors);

		return errorFields.map((field, i) => (
			<li key={i}>{formErrors[field].message}</li>
		));
	}, [formErrors]);

	const onSubmit = () => {
		if (!image) {
			return setFormErrors({
				image: { message: "You should select an image." },
			});
		}

		setFormErrors({});
		return _editAccountImage({ image });
	};

	return (
		<>
			{!_.isEmpty(formErrors) &&
			<MDBBox note noteColor='danger' className="mb-3">
				{renderErrors(formErrors)}
			</MDBBox>
			}
			<MDBContainer className='cloudy-knoxville-gradient'>
				<div {...getRootProps({ className: "dropzone" })}>
					<input {...getInputProps()} />
					<MDBBox variant='h5-responsive' className='text-center p-5'>
						{!acceptedFiles[0]
							? "Drag and Drop an image here, or click to select image"
							: acceptedFiles[0].path
						}
					</MDBBox>
				</div>
			</MDBContainer>
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