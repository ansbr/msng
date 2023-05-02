<script lang="ts">
  import { page } from '$app/stores';
	import ListGenerator from '$lib/messengers/ListGenerator.svelte';
	import { _ } from 'svelte-i18n'
</script>

<svelte:head>
	<title>{$_('landing.title')}</title>
  <meta property="og:title" content={$_('landing.title')} />
  <meta name="description" content={$_('landing.description')} />
  <meta name="twitter:card" content={$_('landing.description')} />
  <meta property="og:description" content={$_('landing.description')} />
  <meta property="og:url" content={$page.url.toString()} />
  <meta property="og:image" content={`${$page.url.origin}/images/logos/home.png`} />
</svelte:head>


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