<script>
	import { page } from '$app/stores';
</script>

<div style="padding-left: 5%; padding-right: 5%;">
	<div>
		<nav>
			<ul>
				<li>
					<a href="/">
						<button>Home</button>
					</a>
				</li>
				<li>
					<a href="/sensor/{$page.params.sensor_id}">
						<button>all</button>
					</a>
				</li>
				<li>
					<a href="/sensor/{$page.params.sensor_id}/turbidity">
						<button>turbidity</button>
					</a>
				</li>
				<li>
					<a href="/sensor/{$page.params.sensor_id}/temperature">
						<button>temperature</button>
					</a>
				</li>
				<li>
					<a href="/sensor/{$page.params.sensor_id}/ph">
						<button>ph</button>
					</a>
				</li>
			</ul>
		</nav>
	</div>
	<div>
		<slot />
	</div>
</div>

<style>
	ul {
		display: flex;
		list-style: none;
		gap: 10px;
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
