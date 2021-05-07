import React from 'react';
import Table from 'react-bootstrap/Table';
import Link from 'next/link';
/*9782080238047, 9782081420250, 9782070146413, 9782070455379, 9782290005569*/
const rows = [
	{ id: 4, ean: '9782080238047', titre: 'La Princesse au petit moi', soustitre: '', maison: 'Flammarion', collection: 'Littérature française', parution: '07/04/2021', format: 'LIVRE', ventes2020: 2625, ventes: 86754, isNew: true, prixTTC: 20, logo: 'Flammarion_logo.png'},
	{ id: 2, ean: '9782081420250', titre: 'Les trois femmes du consul', soustitre: '', maison: 'Flammarion', collection: 'Littérature française', parution: '09/10/2019', format: 'LIVRE', ventes2020: 11, ventes: 109315, isNew: false, prixTTC: 19.50, logo: 'Flammarion_logo.png' },
	{ id: 0, ean: '9782070146413', titre: 'Check-point', soustitre: '', maison: 'Édition Gallimard', collection: 'Blanche', parution: '10/04/2015', format: 'LIVRE', ventes2020: 1, ventes: 197287, isNew: false, prixTTC: 21, logo: 'Gallimard_logo.png' },
	{ id: 1, ean: '9782070455379', titre: 'Immortelle randonnée', soustitre: 'Compostelle malgré moi', maison: 'Édition Gallimard', collection: 'Folio', parution: '02/10/2014', format: 'LIVRE', ventes2020: 128, ventes: 184120, isNew: false, prixTTC: 7.50, logo: 'Folio.svg'  },
	{ id: 3, ean: '9782290005569', titre: 'Le parfum d\'Adam', soustitre: '', maison: 'J\'AI LU', collection: 'Litterature française', parution: '10/01/2007', format: 'LIVRE', ventes2020: 2, ventes: 110067, isNew: false, prixTTC: 8, logo:'Lu_logo.png'},
];

function numberWithSpaces(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


export function getAllLivreEANs() {
	return rows.map(livre => {
		return {
			params: {
				ean: livre.ean
			}
		}
	})
}


export function getLivreData(ean) {
	return rows.find(livre => livre.ean === ean);

}


export default function DataTable() {
	return (
		<React.Fragment>
			<Table hover responsive className="livres">
				<thead className="thead-light">
					<tr>
						<th className="fullTable">{ }</th>
						<th className="fullTable">Titre</th>
						<th className="text-center fullTable">Maison d'édition</th>
						<th className="text-center fullTable">Collection</th>
						<th className="text-center fullTable">DATE DE PARUTION</th>
						<th className="text-center fullTable">SORTIES CAISSES<br />SEMAINE</th>
						<th className="text-center fullTable">SORTIES CAISSES<br />DEPUIS PARUTION</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => (
						<Link href={"titres/" + row.ean} key={row.ean}>
							<tr>
								<td className="p-1" align="center"><img
									alt="..."
									src={require("assets/img/couverture/" + row.ean + ".jpg")}
								/></td>
								<td>
									<div className={row.soustitre == '' ? "livresh1" : "livresh1 mb-0"}>{row.titre}</div>
									{row.soustitre != '' && <div className="livresh2">{row.soustitre}</div>}
									<div className="mobileTable">{row.maison == 'Édition Gallimard' ? row.collection : row.maison} - {row.parution}</div>
									<div className="mobileTable">Sorties caisses :</div>
									<div className="mobileTable ml-5">{numberWithSpaces(row.ventes2020)} (semaine)</div>
									<div className="mobileTable ml-5">{numberWithSpaces(row.ventes)} (depuis parution)</div></td>

								<td className="fullTable text-center">{row.maison}</td>
								<td className="fullTable text-center">{row.collection}</td>
								<td className="fullTable text-center">{row.parution}</td>
								<td className="fullTable text-center">{numberWithSpaces(row.ventes2020)}</td>
								<td className="fullTable text-center">{numberWithSpaces(row.ventes)}</td>
							</tr>
						</Link>
					))}
				</tbody>
			</Table>
		</React.Fragment>
	);
}