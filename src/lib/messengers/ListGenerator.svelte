<!-- https://tailwind-elements.com/docs/standard/components/social-buttons/ -->

<script lang="ts">
  import Button from "./Button.svelte";  
  import { messengers } from "$lib/utils/config";
  
  const selections: {[key: string]: boolean} = {}

	const handleCheck = (messenger: string) => () => {
		selections[messenger] = !selections[messenger];
	}
</script>


<div class="row justify-content-center">
  <div class="col-md-6 col-lg-5 col-xl-4 col-sm-9 col-12">
    {#each messengers as messenger}
      <div class="input-group mb-3 input-group-lg w-100">
        <div class="input-group-text">
          <input class="form-check-input mt-0" type="checkbox" bind:checked={selections[messenger]}>
        </div>
        <Button class="ps-3" messengerName={messenger} height={22} on:click={handleCheck(messenger)}></Button>
      </div>
    {/each}
  </div>
</div>