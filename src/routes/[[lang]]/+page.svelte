<script lang="ts">
  import ListGenerator from '$lib/messengers/_ListGenerator.svelte';
	import { _ } from 'svelte-i18n'
</script>


<div class="bg-light py-3 mb-4">
	<div class="container text-center">
		<h1>{$_('home.title')}</h1>
	</div>
</div>

<div class="container">
  <ListGenerator />
  <div class="text-center pt-1">
    <h4 class="mb-3">{$_('home.home_h3')}</h4>
    <p>{@html $_('home.paragraph1')}.</p>
    <p>{@html $_('home.description')}.</p>
  </div>
</div>