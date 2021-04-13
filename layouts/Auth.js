import React from "react";
// reactstrap components
import { Container, Row } from "react-bootstrap";

import AdminFooter from "components/Footers/AdminFooter.js";
import routes from "routes.js";

function Auth(props) {
	return (
		<>
			<body>
				<div className="auth-content">
					{props.children}
				</div>
				<Container fluid>
					<AdminFooter />
				</Container>
			</body>
		</>
	);
}

export default Auth;
