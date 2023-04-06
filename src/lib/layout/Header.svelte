<script lang="ts">
	import { page } from '$app/stores';
	import { _, locale } from 'svelte-i18n'
  import { langUrl } from '$lib/i18n';
</script>

<ul class="nav justify-content-center py-3">
  <li class="nav-item">
    <a class="nav-link" class:link-dark={$page.url.pathname == langUrl('/', $locale)} href={langUrl('/', $locale)}>{$_('navigation.home_link_name')}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" class:link-dark={$page.url.pathname == langUrl('/generator', $locale)} href={langUrl('/generator', $locale)}>{$_('navigation.page_generator_link_name')}</a>
  </li>
</ul>