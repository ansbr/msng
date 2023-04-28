<!-- https://tailwind-elements.com/docs/standard/components/social-buttons/ -->

<script lang="ts">
  import Button from "./Button.svelte";  
  import { messengers, messengersByName } from "$lib/utils/config";
	import { locale } from 'svelte-i18n'
  import { langUrl } from '$lib/i18n';
</script>

<div class="row justify-content-center">
    {#each messengers.map(m => messengersByName[m]) as messenger (messenger)}
      <div class="col-4 col-sm-3 col-md-2 col-xl-1 px-1 text-center">
        <h6 class="pt-3">{messenger.title}</h6>
        <Button messenger={messenger} height={44} class="px-2 rounded-3" href={langUrl(`/${messenger.name}.html`, $locale)}></Button>
      </div>
    {/each}
</div>