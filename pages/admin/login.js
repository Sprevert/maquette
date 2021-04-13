
import Header from "components/Headers/Header.js";
import Image from 'next/image';
import Link from 'next/link';
import { Card, Button, Form, Container } from 'react-bootstrap';
import Auth from "layouts/Auth.js";

/*
const Login = (props) => {
	const loginSubmit = event => {
		event.preventDefault() // don't redirect the page
		// where we'll add our form logic
	}
	return (
		<>
			<Header />
			<Container className="mt--7" fluid>
				<div className="page">
					<div className="text-center">
						<h1><Image src={require("assets/img/plumeo/Logo-plumeo-blanc.svg")} alt="Pluméo" height={80} width={160} /></h1>
						<h2>Connectez-vous à votre portail auteur</h2>
						<p>Accédez à tout moment et facilement aux informations concernant votre relation éditeur.</p>
					</div>
					<div className="row home justify-content-md-center mt-3">
						<Card style={{ width: '22rem' }}>
							<Card.Body className="text-center">
								<Form onSubmit={loginSubmit}>
									<Form.Group controlId="formBasicIdentifiant">
										<Form.Control type="text" placeholder="Identifiant" />
									</Form.Group>
									<Form.Group controlId="formBasicPassword">
										<Form.Control type="password" placeholder="Mot de passe" />
									</Form.Group>
									<Button variant="primary" type="submit">
										Valider
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</div>
					<div className="text-center pt-2"><Link href="./"><a className="text-white">Mot de passe oublié</a></Link></div>
					<div className="text-center pt-2 pb-4"><Link href="./"><a className="text-white">Demandez votre accès</a></Link></div>
				</div>
			</Container>
		</ >
	)
}

Login.layout = Auth;

export default Login;
*/

function Login() {
	const registerUser = async event => {
		event.preventDefault()

		const res = await fetch(
			'https://hooks.zapier.com/hooks/catch/123456/abcde',
			{
				body: JSON.stringify({
					name: event.target.name.value
				}),
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST'
			}
		)

		const result = await res.json()
		// result.user => 'Ada Lovelace'
	}

	return (
		<form onSubmit={registerUser}>
			<label htmlFor="name">Name</label>
			<input id="name" name="name" type="text" autoComplete="name" required />
			<button type="submit">Register</button>
		</form>
	)
}