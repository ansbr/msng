<!-- https://tailwind-elements.com/docs/standard/components/social-buttons/ -->

<script lang="ts">
  import Button from "./Button.svelte";  
  import { messengers, messengersByName } from "$lib/utils/config";
  import type { MessengerType } from "$lib/types/MessengerType";
  
  export let selected: string[] = []

	const handleClick = (messenger: MessengerType) => (event: MouseEvent) => {
    event.preventDefault();
    let index = selected.indexOf(messenger.slug);
    if (index > -1) {
      selected = selected.filter((_slug, idx) => idx !== index)
    } else {
      selected = [...selected, messenger.slug]
    }
	}
</script>


<div class="row justify-content-center">
  <div class="col-lg-10 col-xl-8 col-10 col-sm-12">
    <div class="row justify-content-center">
      {#each messengers.map(m => messengersByName[m]) as messenger (messenger)}
        <div class="col-12 col-md-6">
          <div class="input-group mb-3 input-group-lg w-100">
            <label class="input-group-text">
              <input class="form-check-input mt-0" name={'messengers'} type="checkbox" value={messenger.slug} bind:group={selected}>
            </label>
            <Button class="ps-3 flex-fill" messenger={messenger} height={22} on:click={handleClick(messenger)}>
              {messenger.title}
            </Button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>