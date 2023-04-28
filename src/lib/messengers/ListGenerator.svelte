<!-- https://tailwind-elements.com/docs/standard/components/social-buttons/ -->

<script lang="ts">
  import Button from "./Button.svelte";  
  import { messengers, messengersByName } from "$lib/utils/config";
  import type { MessengerType } from "$lib/types/MessengerType";
  
  const selections: {[key: string]: boolean} = {}

	const handleClick = (messenger: MessengerType) => (event: MouseEvent) => {
    event.preventDefault();
		selections[messenger.slug] = !selections[messenger.slug];
	}
</script>


<div class="row justify-content-center">
  <div class="col-lg-10 col-xl-8 col-10 col-sm-12">
    <div class="row justify-content-center">
      {#each messengers.map(m => messengersByName[m]) as messenger (messenger)}
        <div class="col-12 col-md-6">
          <div class="input-group mb-3 input-group-lg w-100">
            <div class="input-group-text">
              <input class="form-check-input mt-0" type="checkbox" bind:checked={selections[messenger.slug]}>
            </div>
            <Button class="ps-3 flex-fill" messenger={messenger} height={22} on:click={handleClick(messenger)}>
              {messenger.title}
            </Button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>