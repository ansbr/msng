<!-- https://tailwind-elements.com/docs/standard/components/social-buttons/ -->

<script lang="ts">
  import Button from "./Button.svelte";  
  import { messengers, messengerComponents } from "$lib/utils/config";
</script>

<div class="row justify-content-center">
    {#each messengers.map(m => messengerComponents[m]) as messenger (messenger)}
      <div class="col-4 col-sm-3 col-md-2 col-xl-1 px-1 text-center">
        <h6 class="pt-3">{messenger.title}</h6>
        <Button messenger={messenger} height={44} class="px-2 rounded-3"></Button>
      </div>
    {/each}
</div>