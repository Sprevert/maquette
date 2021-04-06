import Head from 'next/head'
import TopNav from '../components/topnav'

import { Navbar, Nav, Media, Container } from 'react-bootstrap'
export const siteTitle = 'Pluméo'

export default function Layout({ children, home }) {
	return (
		<div>
			<Head>
				<title>{siteTitle}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Plumeo, votre portail auteur." /><link rel="icon" href="/favicon.ico" />
				<meta name="og:title" content={siteTitle} />
			</Head>
			<div className="header"><TopNav /></div>
			<div className="content">
				<div className="content-header"></div>
				<Container fluid="xl"><div className="page">{children}</div></Container>
			</div>
			<div className="footer"></div>
			{!home && (
				<div>
					
				</div>
			)}
		</div>
	)
}