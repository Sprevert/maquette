﻿import React from "react";
import Link from 'next/link'
// layout for this page
import Admin from "layouts/Admin.js";

import { Card, Container } from 'react-bootstrap'

import Header from "components/Headers/Header.js";

const Dashboard = (props) => {

	return (
		<>
			<Header />
			{/* Page content */}
			<Container className="pb-5" fluid>
				<div className="page">
					<div className="text-center">
						<h1>Bienvenue<br />sur votre portail auteur</h1>
						<p>Vous pouvez accéder à tout moment et facilement aux informations concernant votre relation éditeur pour vous faciliter la gestion de votre quotidien administratif.</p>
					</div>
					<div className="row home justify-content-md-center">
						<Link href="titres">
							<Card className="logo titres">
								<Card.Img variant="top" src={require("assets/img/plumeo/Picto-titres.svg")} />
								<Card.Body>
									<Card.Title>Mes titres</Card.Title>
								</Card.Body>
							</Card>
						</Link>
						<Link href="documents">
							<Card className="logo documents">
								<Card.Img variant="top" src={require("assets/img/plumeo/Picto-documents.svg")} />
								<Card.Body>
									<Card.Title>Mes documents</Card.Title>
								</Card.Body>
							</Card></Link>
						<Link href="cessions">
							<Card className="logo cessions">
								<Card.Img variant="top" src={require("assets/img/plumeo/Picto-cessions.svg")} />
								<Card.Body>
									<Card.Title>Mes cessions</Card.Title>
								</Card.Body>
							</Card></Link>
						<Link href="profile">
							<Card className="logo compte">
								<Card.Img variant="top" src={require("assets/img/plumeo/Picto-compte.svg")} />
								<Card.Body>
									<Card.Title>Mon compte</Card.Title>
								</Card.Body>
							</Card></Link>
					</div>
				</div>

			</Container>
			<div className="editions p-3 bg-white">
				<img src={require("assets/img/plumeo/Gallimard_logo.png")} alt="Gallimard" height={25} />
				<span className="fullTable" />
				<img src={require("assets/img/plumeo/Flammarion_logo.png")} alt="Flammarion" height={25} />
				<span className="fullTable" />
				<img src={require("assets/img/plumeo/Folio.svg")} alt="Folio" height={25} />
				<span className="fullTable" />
				<img src={require("assets/img/plumeo/Lu_logo.png")} alt="J'ai lu" height={40} />
		</div>
		</>
	);
};

Dashboard.layout = Admin;

export default Dashboard;
