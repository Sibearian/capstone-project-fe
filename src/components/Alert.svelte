<script>
	import { turso } from '$lib/turso';

	const q = turso.execute({
		sql: 'select * from alerts ORDER BY timestamp DESC Limit 10',
		args: []
	});
</script>

<ul>
	{#await q}
		<h3>Loading...</h3>
	{:then { rows }}
		{#each rows as row}
			<li>
				{row[0]}
				<br />
				- {row[1]}
			</li>
		{/each}
	{/await}    
</ul>
