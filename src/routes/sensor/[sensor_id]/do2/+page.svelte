<script>
	import { turso } from '$lib/turso';
	import { page } from '$app/stores';

	const q = turso.execute({
		sql: 'Select timestamp, do2 FROM sensor_data WHERE id = ? ORDER BY timestamp DESC LIMIT 500',
		args: [$page.params.sensor_id]
	});
</script>

{#await q}
	Loading
{:then { rows }}
	<table>
		{#each rows as row}
			<tr>
				<td>{row.do2}</td>
			</tr>
		{/each}
	</table>
{/await}
