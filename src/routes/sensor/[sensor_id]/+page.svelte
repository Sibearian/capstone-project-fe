<script>
	import { page } from '$app/stores';
	import { turso } from '$lib/turso';

	const q = turso.execute({
		sql: 'SELECT timestamp, do2, turbidity, temperature, ph FROM sensor_data WHERE id = ? ORDER BY temperature DESC LIMIT 50',
		args: [$page.params.sensor_id]
	});
</script>

<div>
	<div>
		<h1>Live Data</h1>
		
	</div>
	<div>
		<table>
			<thead>
				<th>dissolved oxygen</th>
				<th>turbidity</th>
				<th>temperature</th>
				<th>ph</th>
			</thead>
			<tbody>
				{#await q}
					Loading...
				{:then { rows }}
					{#each rows as row}
						<tr>
							<td>{row.do2}</td>
							<td>{row.turbidity}</td>
							<td>{row.temperature}</td>
							<td>{row.ph}</td>
						</tr>
					{/each}
				{/await}
			</tbody>
		</table>
	</div>
</div>
