<script>
	/** @type {import('./$types').PageData} */
	export let data;
	let wow = data.props;
	console.log(wow.data);
</script>

{#each wow.data as { description, id, name }}
	<p>{description} - {id} - {name}</p>
{/each}
