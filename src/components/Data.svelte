<script>
	import { turso } from '$lib/turso';
	import DataRow from './DataRow.svelte';

	const q = turso.execute({
		sql: 'select * from sensor',
		args: []
	});
</script>

<table>
	<tr>
		<td>Sensor Name</td>
		<td>do2 </td>
		<td>turbidity </td>
		<td>temperature </td>
		<td>ph</td>
	</tr>
	{#await q}
		<h3>Loading...</h3>
	{:then { rows }}
		{#each rows as row}
			<DataRow sensor={row} />
		{/each}
	{/await}
</table>
