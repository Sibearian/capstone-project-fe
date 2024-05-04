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

<div>
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
</div>

<style>
	div{
		margin-bottom: 5%;
	}
	button {
		background-color: rgba(51, 51, 51, 0.05);
		border-radius: 8px;
		border-width: 0;
		color: #333333;
		cursor: pointer;
		display: inline-block;
		font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-size: 14px;
		font-weight: 500;
		line-height: 20px;
		list-style: none;
		margin: 0;
		padding: 10px 12px;
		text-align: center;
		transition: all 200ms;
		vertical-align: baseline;
		white-space: nowrap;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}
</style>
