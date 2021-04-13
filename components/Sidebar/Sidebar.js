
import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import { Navbar, Nav, Media, Container } from 'react-bootstrap'
import { useRouter } from "next/router";
import {
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	DropdownToggle,
} from "reactstrap";
import routes from "routes.js";

function Sidebar(props) {
	const router = useRouter();
	const activeRoute = (routeName) => {
		return router.route.indexOf(routeName) > -1;
	};
	const createLinks = (routes) => {
		return routes.map((prop, key) => {
			return (
				<Nav.Item key={"link" + prop.id}>
					<img src={require("assets/img/plumeo/Picto-" + prop.id + "-B.svg")} className="mb-2" alt={prop.name} height={31} width={80} />
					<Nav.Link key={key} href={prop.layout + prop.path} className={prop.id} active={activeRoute(prop.layout + prop.path)}>
						{prop.name}
					</Nav.Link>
				</Nav.Item>
			);
		});
	};
	return (
		<Navbar collapseOnSelect expand="lg" className="p-3">
			<Container fluid="xl">
				<Navbar.Brand href="#home">
					<Link href="/admin/home">
						<img src={require("assets/img/plumeo/Logo-plumeo.svg")} alt="Pluméo" height={61} width={160} />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto topLinks">
						{createLinks(routes)}
					</Nav>
					<Nav>
						<UncontrolledDropdown nav>
							<DropdownToggle className="pr-0" nav>
								<Media className="align-items-center myProfile">
									<span className="avatar">
										<img
											alt="Jean Christophe Rufin"
											src={require("assets/img/theme/Rufin-195x195.jpg")}
										/>
									</span>
									<Media className="m-2">
										<span>Jean Christophe Rufin</span>
									</Media>

								</Media>
							</DropdownToggle>
							<DropdownMenu className="dropdown-menu-arrow" right>
								<Link href="/admin/profile">
									<DropdownItem>
										<i className="fa fa-key fa-fw" />
										<span>Mon compte</span>
									</DropdownItem>
								</Link>
								<Link href="/admin/profile">
									<DropdownItem>
										<i className="fa fa-lock fa-fw" />
										<span>Mot de passe</span>
									</DropdownItem>
								</Link>
								<Link href="/admin/profile">
									<DropdownItem>
										<i className="fa fa-cogs fa-fw" />
										<span>Préférences</span>
									</DropdownItem>
								</Link>
								<DropdownItem divider />
								<DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
									<i className="fa fa-sign-out fa-fw" />
									<span>Déconnexion</span>
								</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar >
	);
}

export default Sidebar;
