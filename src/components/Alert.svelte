<script>
	import { turso } from '$lib/turso';
	import { writable } from 'svelte/store';
	let data = writable({});

	setInterval(
		() =>
			turso
				.execute({
					sql: 'select * from alerts ORDER BY timestamp DESC Limit 10',
					args: []
				})
				.then((res) => data.set(res.rows)),
		5000
	);
</script>

<ul>
	{#if $data?.length === undefined}
		<li class="loading-message">Loading...</li>
	{:else}
		{#each $data as row}
			<li>
				{row[0]}
				<br />
				- {row[1]}
			</li>
		{/each}
	{/if}
</ul>

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
