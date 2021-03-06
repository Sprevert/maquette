import Image from 'next/image'
import Layout from '../components/layout'
import Livres from '../components/livres';

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
