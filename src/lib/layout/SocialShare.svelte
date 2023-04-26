<script lang="ts">
  import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { _, locale } from 'svelte-i18n'
  import Button from "$lib/messengers/Button.svelte";
  import { socials } from "$lib/utils/config";

  $: $locale && typeof window !== "undefined" && setTimeout(window.Sharer.init);
</script>

<div class="text-center">
  {#each socials[$locale == 'ru' ? $locale : 'default'] as social (social)}
    <div class="d-inline-block pe-1" data-sharer={social} data-title={ browser && $page.url && document.title } data-url={ $page.url }>
      <Button messengerName={social} height={14} type='share'></Button>
    </div>
  {/each}
</div>
