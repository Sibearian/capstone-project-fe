<script>
	import { page } from '$app/stores';
	import { turso } from '$lib/turso';

	const q = turso.execute({
		sql: 'SELECT timestamp, do2, turbidity, temperature, ph FROM sensor_data WHERE id = ? ORDER BY timestamp DESC LIMIT 50',
		args: [$page.params.sensor_id]
	});
</script>

<style>
	/* Style for the table */
	table {
		width: 50%;
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
</style>

<div>
	<div>
		<h1>Live Data</h1>
	</div>
	<div>
		<table>
			<thead>
				<tr>
					<th>Timestamp</th>
					<th>dissolved oxygen</th>
					<th>turbidity</th>
					<th>temperature</th>
					<th>ph</th>
				</tr>
			</thead>
			<tbody>
				{#await q}
					<tr>
						<td colspan="5">Loading...</td>
					</tr>
				{:then { rows }}
					{#each rows as row}
						<tr>
							<td>{new Date(row.timestamp * 1000).toLocaleString()}</td>
							<td>{row.do2}</td>
							<td>{row.turbidity}</td>
							<td>{row.temperature}</td>
							<td>{row.ph}</td>
						</tr>
					{/each}
					{#if rows.length === 0}
						<tr>
							<td colspan="5">No data available</td>
						</tr>
					{/if}
				{/await}
			</tbody>
		</table>
	</div>
</div>
