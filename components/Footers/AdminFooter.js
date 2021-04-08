/*eslint-disable*/
import React from "react";
import Image from 'next/image'

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
	return (
		<footer className="footer">
			<Row className="align-items-center justify-content-xl-between">
				<Col xl="6">
					<div className="copyright text-center text-xl-left text-muted">
						<span className="m-1">Mentions légales</span>
						<span className="m-1">Groupe Madrigall{" "} {new Date().getFullYear()}</span>
					</div>
				</Col>

				<Col xl="6">
					<Nav className="nav-footer justify-content-center justify-content-xl-end">

						<NavItem>
							<Image src={require("assets/img/plumeo/Madrigall.jpg")} alt="Groupe Madrigall" height={31} width={120} />
						</NavItem>

					</Nav>
				</Col>
			</Row>
		</footer>
	);
}

export default Footer;
