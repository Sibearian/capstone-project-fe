<script>
	import { turso } from '$lib/turso';
	import { writable } from 'svelte/store';
	import { v4 as uuid } from 'uuid';

	/**
	 * @type {string}
	 */
	let name;
	let visible = writable(false);

	async function createNewSensor() {
		const res = await turso.execute({
			sql: 'INSERT INTO sensor VALUES (?, ?)',
			args: [uuid(), name]
		});
		console.log(res)
	}

	function onButtonClick() {
		visible.update((val) => !val)
	}
</script>

<button on:click={onButtonClick}>Add a new node</button>
{#if $visible}
	<label>
		Name of node:
		<input bind:value={name} />
	</label>
	<button on:click={createNewSensor}>Save</button>
{/if}
