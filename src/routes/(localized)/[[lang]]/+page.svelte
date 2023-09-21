<script lang="ts">
  import { page } from '$app/stores';
  import ListHome from '$lib/messengers/ListHome.svelte';
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>{$_('home.title')}</title>
  <meta property="og:title" content={$_('home.title')} />
  <meta name="description" content={$_('home.description')} />
  <meta name="twitter:card" content={$_('home.description')} />
  <meta property="og:description" content={$_('home.description')} />
  <meta property="og:url" content={$page.url.toString()} />
  <meta property="og:image" content={`${$page.url.origin}/images/logos/home.png`} />
</svelte:head>

<div class="bg-light py-3 mb-4">
	<div class="container text-center">
		<h1>{$_('home.title')}</h1>
	</div>
</div>

<div class="container d-flex flex-column-reverse">
  <div class="text-center pt-5">
    <h4 class="mb-3">{$_('home.homeH3')}</h4>
    <p>{@html $_('home.paragraph1')}</p>
    <p>{@html $_('home.description')}</p>
  </div>
  <ListHome />
</div>