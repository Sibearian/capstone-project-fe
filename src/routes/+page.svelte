<script>
	import AddNewSensor from '../components/AddNewSensor.svelte';
	import Alert from '../components/Alert.svelte';
	import Data from '../components/Data.svelte';
</script>

<div class="page">
	<div class="data">
		<h1>Data</h1>
		<AddNewSensor />
		<Data />
	</div>
	<div class="alerts">
		<h1>Alerts</h1>
		<Alert />
	</div>
</div>

<style>
	.page {
		display: flex;
		flex-direction: row;
		padding-right: 5%;
		padding-left: 5%;
		column-gap: 5%;
	}
	.data {
		flex: 3;
	}
	.alerts {
		flex: 1;
	}
</style>
