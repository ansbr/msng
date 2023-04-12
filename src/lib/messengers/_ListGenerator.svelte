<!-- https://tailwind-elements.com/docs/standard/components/social-buttons/ -->

<script lang="ts">
  import Telegram from '$lib/messengers/Telegram.svelte';
  import Viber from '$lib/messengers/Viber.svelte';
  import Whatsapp from '$lib/messengers/Whatsapp.svelte';
  import Messenger from '$lib/messengers/Messenger.svelte';
  import Wechat from '$lib/messengers/Wechat.svelte';
  import Skype from '$lib/messengers/Skype.svelte';
  import Line from '$lib/messengers/Line.svelte';
  import type { MessengerType } from '$lib/types/MessengerType';

	const messengers: MessengerType[] = [
		{ name: 'Telegram', slug: 'tg', component: Telegram },
		{ name: 'Viber', slug: 'vi', component: Viber },
		{ name: 'Whatsapp', slug: 'wa', component: Whatsapp },
		{ name: 'Messenger', slug: 'me', component: Messenger },
		{ name: 'Wechat', slug: 'we', component: Wechat },
		{ name: 'Skype', slug: 'sk', component: Skype },
		{ name: 'Line', slug: 'ln', component: Line }
	];
  
	const handleCheck = (index: number) => () => {
		messengers[index].selected = !messengers[index].selected;
	}
</script>


<div class="row justify-content-center">
  <div class="col-md-6 col-lg-5 col-xl-4 col-sm-9 col-12">
    {#each messengers as messenger, index}
      <div class="input-group mb-3 input-group-lg w-100">
        <div class="input-group-text">
          <input class="form-check-input mt-0" type="checkbox" bind:checked={messenger.selected}>
        </div>
        <svelte:component this={messenger.component} on:click={handleCheck(index)} size='big'>
          {messenger.name}
        </svelte:component>
      </div>
    {/each}
  </div>
</div>