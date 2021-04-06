import Link from 'next/link'
import Layout from '../components/layout'
import { Card, CardGroup } from 'react-bootstrap'
export default function Home() {
	return (
		<Layout>

			<h1>Bienvenue<br />sur votre portail auteur</h1>
			<p className="description">Vous pouvez accéder à tout moment et facilement aux informations concernant votre relation éditeur pour vous faciliter la gestion de votre quotidien administratif.</p>

			<div className="row home">
				<Link href="titres">
					<Card className="logo titres">
						<Card.Img variant="top" src="img/logo/Picto-titres.svg" />
						<Card.Body>
							<Card.Title>Mes titres</Card.Title>
						</Card.Body>
					</Card>
				</Link>
				<Card className="logo documents">
					<Card.Img variant="top" src="img/logo/Picto-documents.svg" />
					<Card.Body>
						<Card.Title>Mes documents</Card.Title>
					</Card.Body>
				</Card>
				<Card className="logo cessions">
					<Card.Img variant="top" src="img/logo/Picto-cessions.svg" />
					<Card.Body>
						<Card.Title>Mes cessions</Card.Title>
					</Card.Body>
				</Card>
				<Card className="logo compte">
					<Card.Img variant="top" src="img/logo/Picto-compte.svg" />
					<Card.Body>
						<Card.Title>Mon compte</Card.Title>
					</Card.Body>
				</Card>
			</div>
		</Layout>
	)
}
