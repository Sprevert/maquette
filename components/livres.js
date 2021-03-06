import React from 'react';
import Table from 'react-bootstrap/Table'
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
	{ id: 0, ean: '9782070146413', titre: 'Check - point', maison: 'BLANCHE', parution: '10/04/2015', format: 'LIVRE', ventes2020: 1000, ventes: 200000 },
	{ id: 1, ean: '9782070455379', titre: 'Immortelle randonnée - Compostelle malgré moi', maison: 'FOLIO', parution: '02/10/2014', format: 'LIVRE', ventes2020: 8000, ventes: 180000 },
	{ id: 2, ean: '9782081420250', titre: 'Les trois femmes du consul', maison: 'FLAMMARION', parution: '09/10/2019', format: 'LIVRE', ventes2020: 5000, ventes: 100000 },
	{ id: 3, ean: '9782290005569', titre: 'Le parfum d\'Adam', maison: 'J\'AI LU', parution: '10/01/2007', format: 'LIVRE', ventes2020: 500, ventes: 10000 },
];


export default function DataTable() {
	return (
		<React.Fragment>
			<Table hover responsive>
				<thead>
					<tr>
						<th colspan="2">TITRE</th>
						<th>EAN</th>
						<th>MAISON</th>
						<th>DATE DE PARUTION</th>
						<th>FORMAT</th>
						<th>VENTES 2020</th>
						<th>VENTES DEPUIS PARUTION</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => (
						<tr key={row.ean}>
							<td><img
								height="48"
								alt="..."
								src={"/img/couverture/" + row.ean + ".jpg"}
							/></td>
							<td>{row.titre}</td>
							<td>{row.ean}</td>
							<td>{row.maison}</td>
							<td>{row.parution}</td>
							<td>{row.format}</td>
							<td align="right">{row.ventes2020}</td>
							<td align="right">{row.ventes}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</React.Fragment>
	);
}