<script>
	import { turso } from '$lib/turso';
	import { writable } from 'svelte/store';
	export let sensor_id;
	export let sensor_name;

	let data = writable({});

	setInterval(
		() =>
			turso
				.execute({
					sql: 'select * from sensor_data WHERE id = ? ORDER BY timestamp DESC LIMIT 1',
					args: [sensor_id]
				})
				.then((res) => {
					const { rows } = res;
					data.set(rows[0]);
				}),
		1000
	);
</script>

{#if $data?.timestamp !== undefined}
	<tr>
		<td>
			<a href="/sensor/{sensor_id}">{sensor_name}</a>
		</td>
		<td>{new Date($data.timestamp * 1000).toLocaleString()}</td>
		<td>{$data.turbidity}</td>
		<td>{$data.temperature}</td>
		<td>{$data.ph}</td>
	</tr>
{/if}

<style>
	/* Style for table cells */
	td {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}
</style>
