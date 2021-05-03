
import Header from "components/Headers/Header.js";
import Image from 'next/image';
import Link from 'next/link';
import { Card, Button, Form, Container, InputGroup, FormControl } from 'react-bootstrap';
import Auth from "layouts/Auth.js";
import { useEffect } from 'react';


const Login = (props) => {
	const loginSubmit = event => {
		event.preventDefault() // don't redirect the page
		window.location.href = "/admin/livres";
		// where we'll add our form logic
	}
	useEffect(() => {
		document.body.className = 'home';
	});
	return (
		<>
			<Header />
			<Container className="mt--7" fluid>
				<div className="page">
					<div className="text-center p-5">						
						<h2>Connectez-vous à votre portail auteur</h2>
						<p>Accédez à tout moment et facilement aux informations concernant votre relation éditeur.</p>
					</div>
					<div className="row login justify-content-md-center mt-3">
						<Card className="shadow">
							<Card.Body className="text-center">
								<Form onSubmit={loginSubmit} >
									<InputGroup className="mb-2">
										<InputGroup.Prepend>
											<InputGroup.Text><i className="fa fa-fw fa-user fa-lg" id="iconUser"></i></InputGroup.Text>
										</InputGroup.Prepend>
										<FormControl id="formBasicIdentifiant" placeholder="Identifiant" />
									</InputGroup>
									<InputGroup className="mb-2">
										<InputGroup.Prepend>
											<InputGroup.Text><i className="fa fa-fw fa-lock fa-lg" id="iconUser"></i></InputGroup.Text>
										</InputGroup.Prepend>
										<FormControl id="formBasicPassword" type="password" placeholder="Mot de passe" />
									</InputGroup>
									<Button variant="primary" type="submit">Valider</Button>
								</Form>
							</Card.Body>
						</Card>
					</div>
					<div className="text-center p-5"><Link href="/"><a className="text-white">Mot de passe oublié</a></Link></div>
				</div>
			</Container>
		</ >
	)
}

Login.layout = Auth;

export default Login;
