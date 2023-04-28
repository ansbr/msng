<script lang="ts">
  import Button from "./Button.svelte";  
  import { messengers, messengersByName } from "$lib/utils/config";
	import { locale } from 'svelte-i18n'
  import { langUrl } from '$lib/i18n';

  export let height: number = 44;
  export let filter: string[] = []
</script>

<style>
  .small-title {
    padding: 15px 0 5px;
    display: block;
    font-size: 13px;
    min-width: 54px;
  }
</style>

<div class="row justify-content-center">
    {#each messengers.map(m => messengersByName[m]).filter(m => !filter.includes(m.name)) as messenger (messenger)}
      <div class="col col-auto">
        <small class="small-title">{messenger.title}</small>
        <Button messenger={messenger} height={height} class="px-2 rounded-3" href={langUrl(`/${messenger.name}.html`, $locale)}></Button>
      </div>
    {/each}
</div>