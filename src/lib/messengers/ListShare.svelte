<script lang="ts">
  import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { _, locale } from 'svelte-i18n'
  import Button from "$lib/messengers/Button.svelte";
  import { listShare, messengersByName } from "$lib/utils/config";

  $: $locale && typeof window !== "undefined" && setTimeout(window.Sharer.init);
</script>

{#each listShare[$locale == 'ru' ? $locale : 'default'].map(m => messengersByName[m]) as messenger (messenger)}
  <div class="d-inline-block px-1" data-sharer={messenger.name} data-title={ browser && $page.url && document.title } data-url={ $page.url }>
    <Button messenger={messenger} height={14} class="p-1 rounded-1" on:click={(event) => event.preventDefault()}></Button>
  </div>
{/each}
