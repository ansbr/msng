<script lang="ts">
  import ListHome from '$lib/messengers/ListHome.svelte';
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>{$_('home.title')}</title>
</svelte:head>

<div class="bg-light py-3 mb-4">
	<div class="container text-center">
		<h1>{$_('home.title')}</h1>
	</div>
</div>

<div class="container">
  <ListHome />
  <div class="text-center pt-1">
    <h4 class="mb-3">{$_('home.home_h3')}</h4>
    <p>{@html $_('home.paragraph1')}</p>
    <p>{@html $_('home.description')}</p>
  </div>
</div>