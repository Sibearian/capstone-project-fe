<script>
	import { turso } from '$lib/turso';
	import DataRow from './DataRow.svelte';

	const q = turso.execute({
		sql: 'select * from sensor',
		args: []
	});
</script>

<style>
	/* Style for table */
	table {
		width: 100%;
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

	/* Style for loading message */
	.loading-message {
		font-size: 18px;
		font-weight: bold;
		color: blue;
	}
</style>

<table>
	{#await q}
		<tr>
			<td colspan="6" class="loading-message">Loading...</td>
		</tr>
	{:then { rows }}
	
	<table>
		<tr>
			<th>Sensor Name</th>
			<th>Timestamp</th>
			<th>turbidity</th>
			<th>temperature</th>
			<th>ph</th>
		</tr>
		{#each rows as row}
			<DataRow sensor_id={row.sensor_id} sensor_name={row.sensor_name} />
		{/each}
		
	</table>
	{/await}
</table>