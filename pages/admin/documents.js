import React from "react";
import Link from 'next/link';

// reactstrap components
import {
	Badge,
	Card,
	Col,
	CardHeader,
	CardBody,
	Table,
	Container,
	Row,
	UncontrolledTooltip,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import Header from "components/Headers/Header.js";

function Documents() {
	return (
		<>
			<Header className="documents">
				<div><h1><img src={require("assets/img/plumeo/Picto-documents-blanc.svg")} /><span className="underline">Mes</span> documents</h1></div>
			</Header>

			<Container className="documents" fluid>

				<Row>
					{/*
					<Col className="order-xl-2 mb-5 mb-xl-5" xl="6">
						<Card className="bg-secondary  shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<div className="col">
										<h3 className="text-uppercase ls-1 mb-1">Mes contrats</h3>
									</div>
								</Row>
							</CardHeader>
							<CardBody className="p-0">
								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th scope="col">Contrat</th>
											<th scope="col">Date</th>
											<th scope="col">{" "}</th>
										</tr>
									</thead>
									<tbody>

										<tr>
											<td>Contrat d'édition Gallimard</td>
											<td>15 Janv. 2020</td>
											<td>
												<Link href="admin/document">
													<a className="fa fa-file-pdf-o fa-lg" aria-hidden="true"></a>
												</Link>
											</td>
										</tr>
										<tr>
											<td>Contrat d'édition Gallimard</td>
											<td>1 mai 2020</td>
											<td>
												<Link href="admin/document">
													<a className="fa fa-file-pdf-o fa-lg" aria-hidden="true"></a>
												</Link>
											</td>
										</tr>
									</tbody>
								</Table>
							</CardBody>
						</Card>
					</Col>*/}

					<Col className="order-xl-2 mb-5 mb-xl-5" xl="4">
						<Card className="bg-secondary  shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<div className="col">
										<h3 className="text-uppercase ls-1 mb-1">Mes relevés</h3>
									</div>
								</Row>
							</CardHeader>
							<CardBody className="p-0">
								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th className="text-center">Maison dédition</th>
											<th scope="col">Date</th>
											<th scope="col">{" "}</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="text-center"><img src={require("assets/img/plumeo/Flammarion_logo.png")} alt="Flammarion" height={15} /></td>
											<td>1 Janv. 2021</td>
											<td>
												<Link href="admin/document">
													<a className="fa fa-file-pdf-o fa-lg" aria-hidden="true"></a>
												</Link>
											</td>
										</tr>
										<tr>
											<td className="text-center"><img src={require("assets/img/plumeo/Flammarion_logo.png")} alt="Flammarion" height={15} /></td>
											<td>1 Janv. 2021</td>
											<td>
												<Link href="admin/document">
													<a className="fa fa-file-pdf-o fa-lg" aria-hidden="true"></a>
												</Link>
											</td>
										</tr>
										<tr>
											<td className="text-center"><img src={require("assets/img/plumeo/Flammarion_logo.png")} alt="Flammarion" height={15} /></td>
											<td>1 Juil. 2020</td>
											<td>
												<Link href="admin/document">
													<a className="fa fa-file-pdf-o fa-lg" aria-hidden="true"></a>
												</Link>
											</td>
										</tr>
										<tr>
											<td className="text-center"><img src={require("assets/img/plumeo/Gallimard_logo.png")} alt="Flammarion" height={15} /></td>
											<td>1 Janv. 2020</td>
											<td>
												<Link href="admin/document">
													<a className="fa fa-file-pdf-o fa-lg" aria-hidden="true"></a>
												</Link>
											</td>
										</tr>
										<tr>
											<td className="text-center"><img src={require("assets/img/plumeo/Flammarion_logo.png")} alt="Flammarion" height={15} /></td>
											<td>1 Janv. 2020</td>
											<td>
												<Link href="admin/document">
													<a className="fa fa-file-pdf-o fa-lg" aria-hidden="true"></a>
												</Link>
											</td>
										</tr>
									</tbody>
								</Table>
							</CardBody>
						</Card>
					</Col>

					<Col className="order-xl-2 mb-5 mb-xl-5" xl="4">
						<Card className="bg-secondary  shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<div className="col">
										<h3 className="text-uppercase ls-1 mb-1">Mes avis de virement</h3>
									</div>
								</Row>
							</CardHeader>
							<CardBody className="p-0">
								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th width="40">{" "}</th>
											<th>Titre</th>
											<th>Date</th>
											<th>Crédit</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="p-0 pl-2"><img alt="..." src={require("assets/img/couverture/9782081420250.jpg")} height="40" /></td>
											<td>Les trois femmes du consul</td>
											<td>5 Mars 2021</td>
											<td className="text-success">456 €</td>
										</tr>
										<tr>
											<td className="p-0 pl-2"><img alt="..." src={require("assets/img/couverture/9782081420250.jpg")} height="40" /></td>
											<td>Les trois femmes du consul</td>
											<td>2 Févr. 2021</td>
											<td className="text-success">350 €</td>
										</tr>
										<tr>
											<td className="p-0 pl-2"><img alt="..." src={require("assets/img/couverture/9782070146413.jpg")} height="40" /></td>
											<td>Check-Point</td>
											<td>7 Janv. 2021</td>
											<td className="text-success">850 €</td>
										</tr>
										<tr>
											<td className="p-0 pl-2"><img alt="..." src={require("assets/img/couverture/9782081420250.jpg")} height="40" /></td>
											<td>Les trois femmes du consul</td>
											<td>4 Janv. 2021</td>
											<td className="text-success">650 €</td>
										</tr>
										<tr>
											<td className="p-0 pl-2"><img alt="..." src={require("assets/img/couverture/9782081420250.jpg")} height="40" /></td>
											<td>Les trois femmes du consul</td>
											<td>5 Déc. 2021</td>
											<td className="text-success">250 €</td>
										</tr>
									</tbody>
								</Table>
							</CardBody>
						</Card>
					</Col>

					<Col className="order-xl-2 mb-5 mb-xl-5" xl="4">

						<Card className="bg-secondary  shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<div className="col">
										<h3 className="text-uppercase ls-1 mb-1">Mes autres documents</h3>
									</div>
								</Row>
							</CardHeader>
							<CardBody className="p-0">
								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th scope="col">Document</th>
											<th scope="col">Date</th>
											<th scope="col">{" "}</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>DADS 2020</td>
											<td>1 Janv. 2021</td>
											<td>
												<Link href="admin/document">
													<a className="fa fa-file-pdf-o fa-lg" aria-hidden="true"></a>
												</Link>
											</td>
										</tr>
									</tbody>
								</Table>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

Documents.layout = Admin;

export default Documents;
