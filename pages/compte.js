import Image from 'next/image'
import Layout from '../components/layout'

export default function Home() {
	return (
		<Layout>
			<h1 className="compte"><Image src="/img/logo/Picto-compte-blanc.svg" alt="Mon compte" height={50} width={50} />
				Mon compte
			</h1>
		</Layout>
	)
}
//<Image src="img/logo/Picto-compte-blanc.svg" height={50} width={100} />