<script>
	import { turso } from '$lib/turso';
	export let sensor;

	const q = turso.execute({
		sql: 'select * from sensor_data WHERE id = ? ORDER BY timestamp DESC LIMIT 1',
		args: [sensor[0]]
	});

	console.log("sensor:", sensor[0]);
</script>

<style>
	/* Style for loading message */
	.loading-message {
		font-size: 18px;
		font-weight: bold;
		color: blue;
	}

	/* Style for table */
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

</style>

{#await q}
	<h3 class="loading-message">{sensor[1]} - loading data</h3>
{:then { rows }}
	{#if rows.length > 0}
		<table>
			<tr>
				<th>Sensor Name</th>
				<th>Timestamp</th>
				<th>do2</th>
				<th>turbidity</th>
				<th>temperature</th>
				<th>ph</th>
			</tr>
			<tr>
				<td>
					<a href="/sensor/{sensor[0]}">{sensor[1]}</a>
				</td>
				<td>{new Date(rows[0].timestamp * 1000).toLocaleString()}</td>
				<td>{rows[0].do2}</td>
				<td>{rows[0].turbidity}</td>
				<td>{rows[0].temperature}</td>
				<td>{rows[0].ph}</td>
			</tr>
		</table>
	{/if}
{/await}