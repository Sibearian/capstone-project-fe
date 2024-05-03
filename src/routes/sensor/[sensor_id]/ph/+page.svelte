<script>
	import { turso } from '$lib/turso';
	import { page } from '$app/stores';

	const q = turso.execute({
		sql: 'Select timestamp, pH FROM sensor_data WHERE id = ? ORDER BY timestamp DESC LIMIT 500',
		args: [$page.params.sensor_id]
	});
</script>

{#await q}
	Loading
{:then { rows }}
<style>
	/* Style for the table */
	table {
		width: 20%;
		border-collapse: collapse;
	}

	/* Style for table headers */
	th {
		background-color: #f2f2f2;
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}

	/* Style for table cells */
	td {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}

	/* Style for alternating row colors */
	tr:nth-child(even) {
		background-color: #f2f2f2;
	}

	/* Style for the pH column */
	.ph-column {
		color: blue; /* Adjust color as needed */
		font-weight: bold;
	}
</style>

	<table>
		<thead>
			<tr>
				<th>Timestamp</th>
				<th>pH</th>
			</tr>
		</thead>
		<tbody>
			{#each rows as row}
				<tr>
					<td class="table-cell">{new Date(row[0] * 1000).toLocaleString()}</td>
					<td class="table-cell">{row[1]}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/await}
