import Livres from "components/livres";
import Admin from "layouts/Admin.js";
import {
	Row,
	Card,
	Container,
} from "reactstrap";
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
		</>
	)
}


Tables.layout = Admin;

export default Tables;
