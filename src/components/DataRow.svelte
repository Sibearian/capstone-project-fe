<script>
	import { turso } from '$lib/turso';
	export let sensor;

	const q = turso.execute({
		sql: 'select * from sensor_data WHERE id = ? ORDER BY timestamp DESC LIMIT 1',
		args: [sensor[0]]
	});

	console.log("sensor:", sensor[0]);
</script>

{#await q}
	<h3>{sensor[1]} - loading data</h3>
{:then { rows }}
	{#if rows.length > 0}
		<tr>
			<td>
				<a href="/sensor/{sensor[0]}">{sensor[1]} </a>
			</td>
			<td>{rows[0].do2}</td>
			<td>{rows[0].turbidity}</td>
			<td>{rows[0].temperature}</td>
			<td>{rows[0].ph}</td>
		</tr>
	{/if}
{/await}
