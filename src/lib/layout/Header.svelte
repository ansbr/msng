<script lang="ts">
	import { page } from '$app/stores';
	import { _, locale } from 'svelte-i18n'
  import { langUrl } from '$lib/i18n';
</script>

<ul class="nav justify-content-center py-3">
  <li class="nav-item">
    <a class="nav-link" class:link-dark={$page.url.pathname == langUrl('/', $locale)} href={langUrl('/', $locale)}>{$_('navigation.homeLinkName')}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" class:link-dark={$page.url.pathname == langUrl('/generator', $locale)} href={langUrl('/generator', $locale)}>{$_('navigation.pageGeneratorLinkName')}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href={'https://getlink.space'}>URL Shortener</a>
  </li>
</ul>