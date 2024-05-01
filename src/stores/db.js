import { readable } from 'svelte/store';
import { createClient } from '@libsql/client';

export const db = readable(
	createClient({
		url: 'libsql://capstone-sibearian.turso.io'
	}),
	(set) => {
		const client = createClient();
		set(client);
		return function stop() {
			client.closed ? null : client.close();
		};
	}
);
