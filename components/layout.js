import Head from 'next/head'
import TopNav from '../components/topnav'

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
			<TopNav />
			<main>{children}</main>
			{!home && (
				<div>
					
				</div>
			)}
		</div>
	)
}