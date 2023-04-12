<script lang="ts">
	import ListGenerator from '$lib/messengers/_ListGenerator.svelte';
	import { _ } from 'svelte-i18n'
</script>

<div class="bg-light py-3 mb-4">
	<div class="container text-center">
		<h1>{$_('landing.title')}</h1>
	</div>
</div>


<div class="container">
  <div class="text-center pb-4">
    <p>{$_('landing.description')}</p>
    <h4>{$_('landing.check_messengers')}</h4>
  </div>
  <ListGenerator />
</div>