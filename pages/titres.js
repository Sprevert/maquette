import Image from 'next/image'
import Layout from '../components/Layout'
import Livres from '../components/Livres';

export default function Home() {
	return (
		<Layout>
			<h1 className="titres"><Image src="/img/logo/Picto-titres-blanc.svg" alt="Mes titres" height={50} width={50} />
			Mes titres</h1>
			<div class="cTable">
				<Livres />
			</div>
		</Layout>
	)
}
