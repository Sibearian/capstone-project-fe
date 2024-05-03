<script>
	import { turso } from '$lib/turso';
	import { writable } from 'svelte/store';
	import { v4 as uuid } from 'uuid';

	/**
	 * @type {string}
	 */
	let name;
	let visible = writable(false);
	let uid = writable('');

	async function createNewSensor() {
		const id = uuid();
		const res = await turso.execute({
			sql: 'INSERT INTO sensor VALUES (?, ?)',
			args: [uuid(), name]
		});
		uid.set(id);
	}

	function onButtonClick() {
		visible.update((val) => !val);
	}
</script>

<button on:click={onButtonClick}>
	{#if !$visible}
		Add a new node
	{:else}
		Done
	{/if}
</button>
{#if $visible}
	<br />
	<label>
		Name of node:
		<input bind:value={name} />
	</label>
	<button on:click={createNewSensor}>Save</button>
	{#if $uid !== ''}
		<br />
		The new node id is {$uid}
	{/if}
{/if}
