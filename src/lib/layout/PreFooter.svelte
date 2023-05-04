<script lang="ts">
	import { _ } from 'svelte-i18n'
  import ListShare from '$lib/messengers/ListShare.svelte';

  export let share = true
</script>

<style>
  .inline-title {
    display: inline-block;
    position: relative;
    top: 3px;
    text-decoration: none;
  }
</style>

<div class="text-center mb-3">
  {#if share}
    <div class="inline-title">{$_('navigation.share')}</div>
    <ListShare />
    <span class="inline-title px-2" style="top: 2px; font-size: 18px;">|</span>
  {/if}
  <a class="inline-title" href="/service/privacy-policy" data-sveltekit-preload-data="off">Privacy Policy</a>
  <span class="inline-title px-1">•</span>
  <a class="inline-title" href="/service/terms-and-conditions" data-sveltekit-preload-data="off">Terms & Conditions</a>
</div>