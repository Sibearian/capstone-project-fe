<script>
	import { page } from '$app/stores';
</script>

<div>
	<a href="/">Home</a>
	<div>
		<nav>
			<ul>
				<li><a href="/sensor/{$page.params.sensor_id}">all</a></li>
				<li><a href="/sensor/{$page.params.sensor_id}/do2">dissolved oxygen</a></li>
				<li><a href="/sensor/{$page.params.sensor_id}/turbidity">turbidity</a></li>
				<li><a href="/sensor/{$page.params.sensor_id}/temperature">temperature</a></li>
				<li><a href="/sensor/{$page.params.sensor_id}/ph">ph</a></li>
			</ul>
		</nav>
	</div>
	<div>
		<slot />
	</div>
</div>
