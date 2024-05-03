<script>
	import { turso } from '$lib/turso';
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';

	let rows = writable({});

	setInterval(
		() =>
			turso
				.execute({
					sql: 'Select timestamp, turbidity FROM sensor_data WHERE id = ? ORDER BY timestamp DESC LIMIT 500',
					args: [$page.params.sensor_id]
				})
				.then((res) => {
					rows.set(res.rows);
				}),
		1000
	);
</script>

<table>
	<thead>
		<tr>
			<th>Timestamp</th>
			<th>Turbidity</th>
		</tr>
	</thead>
	<tbody>
		{#if $rows?.length === undefined}
			Loading
		{:else}
			{#each $rows as row}
				<tr>
					<td class="table-cell">{new Date(row.timestamp * 1000).toLocaleString()}</td>
					<td class="table-cell">{row.turbidity}</td>
				</tr>
			{/each}
		{/if}
	</tbody>
</table>

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
</style>
