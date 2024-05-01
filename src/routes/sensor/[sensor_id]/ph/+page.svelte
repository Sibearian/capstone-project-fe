<script>
	import { turso } from '$lib/turso';
	import { page } from '$app/stores';

	const q = turso.execute({
		sql: 'Select timestamp, ph FROM sensor_data WHERE id = ? ORDER BY timestamp DESC LIMIT 500',
		args: [$page.params.sensor_id]
	});
</script>

{#await q}
	Loading
{:then { rows }}
	<table>
		{#each rows as row}
			<tr>
				<td>{row.ph}</td>
			</tr>
		{/each}
	</table>
{/await}
