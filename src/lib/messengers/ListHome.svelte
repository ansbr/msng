<!-- https://tailwind-elements.com/docs/standard/components/social-buttons/ -->

<script lang="ts">
  import Button from "./Button.svelte";  
  import { messengers } from "$lib/utils/config";
</script>

<div class="row justify-content-center">
    {#each messengers as messenger}
      <div class="col-auto px-1">
        <Button messengerName={messenger} height={44} class="px-2"></Button>
      </div>
    {/each}
</div>