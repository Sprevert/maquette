import React from 'react';
import Table from 'react-bootstrap/Table';
import Link from 'next/link';
const columns = [
	{ field: 'ean', headerName: 'EAN', flex: 0.5 },
	{ field: 'titre', headerName: 'Titre', flex: 1 },
	{ field: 'maison', headerName: 'Maison' },
	{ field: 'parution', headerName: 'Date de parution', type: 'date' },
	{ field: 'format', headerName: 'Format' },
	{ field: 'ventes2020', headerName: 'Ventes 2020', type: 'number' },
	{ field: 'ventes', headerName: 'Ventes depuis parution', type: 'number' },
];

const rows = [
	{ id: 4, ean: '9782080238047', titre: 'La Princesse au petit moi', soustitre: '', maison: 'FLAMMARION', parution: '07/04/2021', format: 'LIVRE', ventes2020: 5000, ventes: 100000 },
	{ id: 2, ean: '9782081420250', titre: 'Les trois femmes du consul', soustitre: '', maison: 'FLAMMARION', parution: '09/10/2019', format: 'LIVRE', ventes2020: 5000, ventes: 100000 },
	{ id: 0, ean: '9782070146413', titre: 'Check - point', soustitre: '', maison: 'BLANCHE', parution: '10/04/2015', format: 'LIVRE', ventes2020: 1000, ventes: 200000 },
	{ id: 1, ean: '9782070455379', titre: 'Immortelle randonnée', soustitre: 'Compostelle malgré moi', maison: 'FOLIO', parution: '02/10/2014', format: 'LIVRE', ventes2020: 8000, ventes: 180000 },
	{ id: 3, ean: '9782290005569', titre: 'Le parfum d\'Adam', soustitre: '', maison: 'J\'AI LU', parution: '10/01/2007', format: 'LIVRE', ventes2020: 500, ventes: 10000 },
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
						<th className="fullTable">TITRE</th>
						<th className="text-center fullTable">MARQUE</th>
						<th className="text-center fullTable">DATE DE PARUTION</th>
						<th className="text-center fullTable">SORTIE CAISSE<br />SEMAINE</th>
						<th className="text-center fullTable">SORTIE CAISSE<br />DEPUIS PARUTION</th>
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
									<div className="mobileTable">{row.maison} - {row.parution}</div>
									<div className="mobileTable">Sortie caisse :</div>
									<div className="mobileTable ml-5">{numberWithSpaces(row.ventes2020)} (semaine)</div>
									<div className="mobileTable ml-5">{numberWithSpaces(row.ventes)} (depuis parution)</div></td>

								<td className="fullTable text-center">{row.maison}</td>
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