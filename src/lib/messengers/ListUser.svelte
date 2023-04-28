<script lang="ts">
  import type { MessengerType } from "$lib/types/MessengerType";
  import Button from "./Button.svelte";  
  export let messengers: MessengerType[] = []
  const isSingle = !(messengers?.length > 1)
</script>

<div class="row justify-content-center">
    {#each messengers as messenger (messenger)}
      {#if isSingle}
        <div class="col px-1 text-center">
          <Button messenger={messenger} height={128} class="px-3 mt-2 rounded-4" target='_blank'></Button>
          <h5 class="pt-2">{messenger.title}</h5>
          
        </div>
      {:else}
        <div class="col-4 col-sm-3 col-md-2 col-xl-1 px-1 text-center">
          <Button messenger={messenger} height={38} class="px-2 mt-2 rounded-3" target='_blank'></Button>
          <h6 class="pt-2">{messenger.title}</h6>
        </div>
      {/if}
    {/each}
</div>