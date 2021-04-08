/*eslint-disable*/
import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import { Navbar, Nav, Media, Container } from 'react-bootstrap'
import { useRouter } from "next/router";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";


function Sidebar(props) {
	return (
		<Navbar collapseOnSelect expand="xl">
			<Container fluid="xl">
				<Navbar.Brand href="#home">
					<Link href="/">
						<Image src={require("assets/img/plumeo/Logo-plumeo.svg")} alt="Pluméo" height={50} width={100} />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="titres">Mes titres</Nav.Link>
						<Nav.Link href="documents">Mes documents</Nav.Link>
						<Nav.Link href="cessions">Mes cessions</Nav.Link>
						<Nav.Link href="profile">Mon compte</Nav.Link>
					</Nav>
					<Nav>
						<Media className="align-items-center">
							<Media className="mr-2">
								<span>Jean Christophe Rufin</span>
							</Media>
							<span className="avatar">
								<img
									alt="Jean Christophe Rufin"
									src={require("assets/img/theme/Rufin-195x195.jpg")}
								/>
							</span>

						</Media>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Sidebar;
