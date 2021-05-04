import Livres from "components/livres";
import Admin from "layouts/Admin.js";
import {
	Row,
	Card,
	Container,
} from "reactstrap";

import { Carousel } from 'react-bootstrap'
import Header from "components/Headers/Header.js";
function Tables() {
	return (
		<>
			<Header className="livres">
				<div><h1><img src={require("assets/img/plumeo/Picto-livres-blanc.svg")} /><span className="underline">Mes</span> livres</h1></div>
			</Header>
			<Container className="livres" fluid>
				<Row>
					<div className="col">
						<Card className="shadow">
							<Livres />
						</Card>
					</div>
				</Row>
			</Container>
			<div className="editions p-3">
				<Carousel indicators={false} interval={3000} controls={false}>
					<Carousel.Item className="text-center">
						<img src={require("assets/img/plumeo/Gallimard_logo.png")} alt="Gallimard" height={25} />
						<span >{" "}</span>
						<img src={require("assets/img/plumeo/Flammarion_logo.png")} alt="Flammarion" height={25} />
					</Carousel.Item>
					<Carousel.Item className="text-center">
						<img src={require("assets/img/plumeo/Folio.svg")} alt="Folio" height={25} />
						<span />
						<img src={require("assets/img/plumeo/Lu_logo.png")} alt="J'ai lu" height={40} />
					</Carousel.Item>
				</Carousel>
				<ul>
					<li><img src={require("assets/img/plumeo/Gallimard_logo.png")} alt="Gallimard" height={25} /></li>
					<li><img src={require("assets/img/plumeo/Flammarion_logo.png")} alt="Flammarion" height={25} /></li>
					<li><img src={require("assets/img/plumeo/Folio.svg")} alt="Folio" height={25} /></li>
					<li className="last"><img src={require("assets/img/plumeo/Lu_logo.png")} alt="J'ai lu" height={35} /></li>
				</ul>

			</div>
		</>
	)
}


Tables.layout = Admin;

export default Tables;
