import React from "react";
import { MDBContainer, MDBTabPane } from "mdbreact";

export default () => {
	return (
		<MDBTabPane tabId="5">
			<MDBContainer className="mt-3 mb-3 p-0">
				<iframe
					src="https://codesandbox.io/embed/react-new?fontsize=14&hidenavigation=1&theme=dark"
					width="100%"
					height="500px"
					title="React"
					allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
					sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-orientation-lock allow-popups-to-escape-sandbox allow-top-navigation"
				>
				</iframe>
			</MDBContainer>
		</MDBTabPane>
	);
}