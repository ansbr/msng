<script lang="ts">
	import { locale } from 'svelte-i18n'
</script>

<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link" class:link-dark={$locale == 'en'} href="/" data-sveltekit-preload-data="tap">English</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" class:link-dark={$locale == 'es'} href="/es" data-sveltekit-preload-data="tap">Español</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" class:link-dark={$locale == 'de'} href="/de" data-sveltekit-preload-data="tap">Deutsch</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" class:link-dark={$locale == 'ru'} href="/ru" data-sveltekit-preload-data="tap">Русский</a>
  </li>
</ul>