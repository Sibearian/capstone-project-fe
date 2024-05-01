import { createClient } from '@libsql/client';

export const turso = createClient({
	url: 'libsql://capstone-sibearian.turso.io',
	authToken:
		'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTQ1MDMyNTksImlkIjoiNzNjMzJjNmYtMzhlNC00MTNlLTliZTgtMDM1M2VkNjYzZjRlIn0.QONgvapYpJXCfzrvQONm591p_HbFQpd9yAVCrdIGFoboaHTbeT_n72U904PqyVVtZqMcqVeM6sqTktZQTSPeAA'
});
