<script lang="ts">
  import Qrcode from "$lib/qrcode/Qrcode.svelte";
  import type { MessengerType } from "$lib/types/MessengerType";
  import Button from "./Button.svelte";  
  export let messengers: MessengerType[] = []
  const isSingle = !(messengers?.length > 1)
</script>

<div class="row justify-content-center">
    {#each messengers as messenger (messenger)}
      {#if isSingle}
        {#if messenger.name == 'wechat'}
          <div class="col text-center">
            <Qrcode value={messenger.value} width={160} />
            <h5 class="pt-2">Wechat QR Code</h5>
          </div>
        {:else}
          <div class="col px-1 text-center">
            <Button messenger={messenger} height={128} class="px-3 mt-2 rounded-4" target='_blank' href={messenger.value}></Button>
            <h5 class="pt-2">{messenger.title}</h5>
          </div>
        {/if}
      {:else}
        <div class="col-4 col-sm-3 col-md-2 col-xl-1 px-1 text-center">
          <Button messenger={messenger} height={38} class="px-2 mt-2 rounded-3" target='_blank' href={messenger.value}></Button>
          <h6 class="pt-2">{messenger.title}</h6>
        </div>
      {/if}
    {/each}
</div>