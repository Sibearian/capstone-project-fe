<script>
	import { turso } from '$lib/turso';

	const q = turso.execute({
		sql: 'select * from alerts ORDER BY timestamp DESC Limit 10',
		args: []
	});
</script>

<style>
	/* Style for loading message */
	.loading-message {
		font-size: 18px;
		font-weight: bold;
		color: blue;
	}

	/* Style for list */
	ul {
		list-style-type: none;
		padding: 0;
	}

	/* Style for list items */
	li {
		margin-bottom: 10px;
		padding: 10px;
		background-color: #f2f2f2;
		border: 1px solid #dddddd;
	}

</style>

<ul>
	{#await q}
		<li class="loading-message">Loading...</li>
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
