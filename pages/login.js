import Layout from '../components/layout';
import Image from 'next/image';
import Link from 'next/link';
import { Card, Button, Form } from 'react-bootstrap';


export default function Login({ login, setLogin }) {
	return (
		<Layout login>
			<div className="text-center">
				<h1><Image src="/img/logo/Logo-plumeo-blanc.svg" alt="Pluméo" height={80} width={160} /></h1>
				<h2>Connectez-vous à votre portail auteur</h2>
				<p>Accédez à tout moment et facilement aux informations concernant votre relation éditeur.</p>
			</div>
			<div className="row home justify-content-md-center">
				<Card style={{ width: '22rem' }}>
					<Card.Body className="text-center">
						<Form>
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
			<div className="text-center"><Link href="./"><a className="text-white">Mot de passe oublié</a></Link></div>
			<div className="text-center"><Link href="./"><a className="text-white">Demandez votre accès</a></Link></div>
		</Layout >
	)
}
