<script lang="ts">
	import { page } from '$app/stores';
	import { locale } from 'svelte-i18n'
  import SocialShare from './SocialShare.svelte';
  import { languages } from '$lib/utils/config';


  $: basepath = $page.url.pathname.replace('/' + $locale, '');
</script>


<hr />
<SocialShare />
<br />
<ul class="nav justify-content-center pb-3">
  <li class="nav-item">
    <a class="nav-link" class:link-dark={$locale == 'en'} href={`${basepath || '/'}`} data-sveltekit-preload-data="off">{languages['en']}</a>
  </li>
  {#each Object.entries(languages).filter(lang => lang[0] != 'en') as [loc, title] }
    <li class="nav-item">
      <a class="nav-link" class:link-dark={$locale == loc} href={`/${loc}${basepath == '/' ? '' : basepath}`} data-sveltekit-preload-data="off">
        {title}
      </a>
    </li>
  {/each}
</ul>