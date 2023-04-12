<script lang="ts">
	import { page } from '$app/stores';
	import { locale } from 'svelte-i18n'

  $: basepath = $page.url.pathname.replace('/' + $locale, '');
</script>
<hr />
<ul class="nav justify-content-center pb-3">
  <li class="nav-item">
    <a class="nav-link" class:link-dark={$locale == 'en'} href={`${basepath || '/'}`} data-sveltekit-preload-data="off">English </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" class:link-dark={$locale == 'es'} href={`/es${basepath == '/' ? '' : basepath}`} data-sveltekit-preload-data="off">Español</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" class:link-dark={$locale == 'de'} href={`/de${basepath == '/' ? '' : basepath}`} data-sveltekit-preload-data="off">Deutsch</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" class:link-dark={$locale == 'ru'} href={`/ru${basepath == '/' ? '' : basepath}`} data-sveltekit-preload-data="off">Русский</a>
  </li>
</ul>