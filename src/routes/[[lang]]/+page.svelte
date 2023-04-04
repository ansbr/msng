
<script lang="ts">
	import { _ } from 'svelte-i18n'
</script>

<h1>{$_('hello')} {$_('lang')}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


<a href="/" data-sveltekit-preload-data="tap">English</a>
<a href="/ru" data-sveltekit-preload-data="tap">Русский</a>
<a href="/de" data-sveltekit-preload-data="tap">Deutch</a>
<a href="/es" data-sveltekit-preload-data="tap">Spain</a>

