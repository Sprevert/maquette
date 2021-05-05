﻿import { getAllLivreEANs, getLivreData } from "components/livres";
import React from "react";
import classnames from "classnames";

import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
	Table,
	Nav,
	NavItem,
	NavLink,
	Card,
	Col,
	CardHeader,
	CardBody,
	Container,
	Row,
	UncontrolledTooltip,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import Header from "components/Headers/TitreHeader.js";
import {
	chartOptions,
	parseOptions,
	Stock1,
	chartVente1,
	chartVenteOld,
	chartVenteNew,
} from "variables/charts.js";


function numberPrice(x) {
	return parseFloat(x).toFixed(2).replace('.', ',');
}

function numberWithSpaces(x) {
	return parseInt(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


const Articles = ({ articles }) => {
	const [activeNav, setActiveNav] = React.useState(1);
	const [activeStockNav, setActiveStockNav] = React.useState(1);
	const [chartVente1Data, setchartVente1Data] = React.useState("data1");
	const [chartStock1Data, setchartStock1Data] = React.useState("data1");
	if (window.Chart) {
		parseOptions(Chart, chartOptions());
	}

	const toggleNavs = (e, index) => {
		e.preventDefault();
		setActiveNav(index);
		setchartVente1Data("data" + index);
		document.getElementById('ventes_1').style.display = index == 1 ? 'block' : 'none';
		document.getElementById('ventes2020_1').style.display = index == 1 ? 'block' : 'none';
		document.getElementById('ventes_2').style.display = index == 2 ? 'block' : 'none';
		document.getElementById('ventes2020_2').style.display = index == 2 ? 'block' : 'none';
		document.getElementById('ventes_3').style.display = index == 3 ? 'block' : 'none';
		document.getElementById('ventes2020_3').style.display = index == 3 ? 'block' : 'none';
	};
	const toggleStockNavs = (e, index) => {
		e.preventDefault();
		setActiveStockNav(index);
		setchartStock1Data("data" + index);
	};
	return (
		<>
			<Header className="livres" />

			{/* Page content */}
			<Container className="livres" fluid>
				{/* Table */}
				<Row>
					<Col className="order-xl-2 mb-5 mb-xl-5" xl="6">
						<Card className="card-article shadow">
							<Row className="justify-content-center">
								<Col className="order-lg-2" lg="3">
									<div className="card-article-image">
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											<img
												alt="..."
												className=""
												src={require("assets/img/couverture/" + articles.ean + ".jpg")}
											/>
										</a>
									</div>
								</Col>
							</Row>
							<CardBody className="pt-4">
								<div className="text-center">
									<Row>
										<Col>
											<span class="h6 text-muted">EAN</span>
											<h3>{articles.ean}</h3>
										</Col>
										<Col>
											<span class="h6 text-muted">Titre</span>
											<h3>{articles.titre}</h3>
										</Col>
									</Row>
									<Row>
										<Col>
											<span class="h6 text-muted">Maison d'édition</span>
											<h4>{articles.maison}</h4>
										</Col>

										<Col>
											<span class="h6 text-muted">Collection</span>
											<h4>{articles.collection}</h4>
										</Col>
									</Row>
									<Row>
										<Col>
											<span class="h6 text-muted">Date 1ere MEV</span>
											<h4>{articles.parution}</h4>
										</Col>
										<Col>
											<span class="h6 text-muted">Prix public TTC</span>
											<h4>{numberPrice(articles.prixTTC)} €</h4>
										</Col>
									</Row>
								</div>
							</CardBody>
						</Card>
					</Col>


					{!articles.isNew &&
						<Col className="order-xl-2 mb-5 mb-xl-5" xl="6">
							<Card className="bg-secondary  shadow">
								<CardHeader className="bg-white border-0">
									<Row className="align-items-center">
										<div className="col">
											<h2 className="text-uppercase ls-1 mb-1">Mes Ventes</h2>
										</div>
										<div className="col">
											<Nav className="justify-content-end toggle" pills>
												<NavItem>
													<NavLink
														className={classnames("p-2", {
															active: activeNav === 1,
														})}
														href="#m"
														onClick={(e) => toggleNavs(e, 1)}
													>
														<span className="d-none d-md-block">Papier</span>
														<span className="d-md-none" title="Papier">P</span>
													</NavLink>
												</NavItem>
												<NavItem>
													<NavLink
														className={classnames("p-2", {
															active: activeNav === 2,
														})}
														data-toggle="tab"
														href="#w"
														onClick={(e) => toggleNavs(e, 2)}
													>
														<span className="d-none d-md-block">Numérique</span>
														<span className="d-md-none" title="Numérique">N</span>
													</NavLink>
												</NavItem>
												<NavItem>
													<NavLink
														className={classnames("p-2", {
															active: activeNav === 3,
														})}
														href="#m"
														onClick={(e) => toggleNavs(e, 3)}
													>
														<span className="d-none d-md-block">Total</span>
														<span className="d-md-none" title="Total">T</span>
													</NavLink>
												</NavItem>
											</Nav>
										</div>
									</Row>
								</CardHeader>
								<CardBody>
									<h3 className="heading-small text-muted mb-0">Ventes cumulées</h3>
									<div className="text-center">
										<Row>
											<Col>
												<span class="h6">au dernier arrêté (décembre 2020)</span>
												<h3><span id="ventes2020_1">{numberWithSpaces(articles.ventes / 3)}</span><span id="ventes2020_2" style={{ display: 'none' }}>5606</span><span id="ventes2020_3" style={{ display: 'none' }}>{numberWithSpaces((articles.ventes / 3) + 5606)}</span></h3>
											</Col>
											<Col>
												<span class="h6">depuis parution</span>
												<h3><span id="ventes_1">{numberWithSpaces(articles.ventes)}</span><span id="ventes_2" style={{ display: 'none' }}>5656</span><span id="ventes_3" style={{ display: 'none' }}>{numberWithSpaces((articles.ventes) + 5656)}</span></h3>
											</Col>
										</Row>
										<div className="chart">
											<Bar
												data={chartVente1[chartVente1Data]}
												options={chartVente1.options}
												getDatasetAtEvent={(e) => console.log(e)}
											/>
										</div>

									</div>
								</CardBody>
							</Card>
						</Col>
					}


					{/* Ventes GFK */}
					<Col className="order-xl-2 mb-5 mb-xl-5" xl="6">
						<Card className="bg-secondary  shadow mb-5">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<div className="col">
										<h2 className="text-uppercase ls-1 mb-1">Mes Ventes GFK</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								<div className="text-center">
									<div className="chart">
										<Bar
											data={articles.isNew ? chartVenteNew.data : chartVenteOld.data}
											options={articles.isNew ? chartVenteNew.options : chartVenteOld.options}
										/>
									</div>
								</div>
							</CardBody>
						</Card>
					</Col>
					{/* Tirage */}
					<Col className="order-xl-2 mb-5 mb-xl-5" xl="6">
						<Card className="bg-secondary  shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<div className="col">
										<h2 className="text-uppercase ls-1 mb-1">Tirage</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody className="p-0">
								<div className="text-center">
									<Row>
										<Col>
											<span className="h6">Tirage cumulé</span>
											<h3>100 000</h3>
										</Col>
										<Col>
											<span className="h6">Nb de réimpressions</span>
											<h3>{articles.isNew ? 0 : 3}</h3>
										</Col>
										{articles.isNew &&
											<Col>
											<span className="h6 new pt-4">Nouveauté</span>
											</Col>}
										{!articles.isNew &&
											<Col>
											<span className="h6">Dernière réimpression</span>
												<h3>5 000 ex. le 15/02/2020 </h3>
											</Col>
										}
									</Row>
								</div>
							</CardBody>
						</Card>
					</Col>

					{/*
					<Col className="order-xl-2 mb-5 mb-xl-5" xl="6">

						<Card className="bg-secondary shadow mb-5">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<div className="col">
										<h2 className="text-uppercase ls-1 mb-1">Stocks</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								<div className="text-center">
									<Row>
										<Col>
											<span class="h6">Disponible à la vente</span>
											<h3>7659</h3>
										</Col>
										<Col>
											<span class="h6">Stock en dépôt</span>
											<h3>2590</h3>
										</Col>
									</Row>
								</div>
							</CardBody>
						</Card>
						
						<Card className="bg-secondary  shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<div className="col">
										<h2 className="text-uppercase ls-1 mb-1">évolution des stocks</h2>
									</div>
									<div className="col">
										<Nav className="justify-content-end toggle" pills>
											<NavItem>
												<NavLink
													className={classnames("py-2 px-3", {
														active: activeStockNav === 1,
													})}
													href="#m"
													onClick={(e) => toggleStockNavs(e, 1)}
												>
													<span className="d-none d-md-block">Mois</span>
													<span className="d-md-none" title="Papiers">M</span>
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													className={classnames("py-2 px-3", {
														active: activeStockNav === 2,
													})}
													data-toggle="tab"
													href="#w"
													onClick={(e) => toggleStockNavs(e, 2)}
												>
													<span className="d-none d-md-block">Semaines</span>
													<span className="d-md-none" title="Numériques">S</span>
												</NavLink>
											</NavItem>
										</Nav>
									</div>
								</Row>
							</CardHeader>
							<CardBody>

								<div className="text-center">
									<div className="chart">
										<Line
											data={Stock1[chartStock1Data]}
											options={Stock1.options}
											getDatasetAtEvent={(e) => console.log(e)}
										/>
									</div>
								</div>
							</CardBody>
						</Card>
					</Col>*/}

				</Row>

			</Container>
		</>);
}

Articles.layout = Admin;
export default Articles;

export async function getStaticProps({ params }) {
	//const postData = getLivreData(params.ean)
	return {
		props: {
			articles: getLivreData(params.ean)
		}
	}
}

export async function getStaticPaths() {
	const paths = getAllLivreEANs()
	return {
		paths,
		fallback: false
	}
}