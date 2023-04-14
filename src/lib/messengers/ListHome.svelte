<!-- https://tailwind-elements.com/docs/standard/components/social-buttons/ -->

<script lang="ts">
  import Button from "./Button.svelte";  
  import type { MessengerType } from '$lib/types/MessengerType';
  import Telegram from '$lib/messengers/svg/Telegram.svelte';
  import Viber from '$lib/messengers/svg/Viber.svelte';
  import Whatsapp from '$lib/messengers/svg/Whatsapp.svelte';
  import Messenger from '$lib/messengers/svg/Messenger.svelte';
  import Wechat from '$lib/messengers/svg/Wechat.svelte';
  import Skype from '$lib/messengers/svg/Skype.svelte';
  import Line from '$lib/messengers/svg/Line.svelte';

	const messengers: MessengerType[] = [
		{ name: 'Telegram', slug: 'tg', component: Telegram, background: 'rgb(0, 136, 204)' },
		{ name: 'Viber', slug: 'vi', component: Viber, background: '#7360f2' },
		{ name: 'Whatsapp', slug: 'wa', component: Whatsapp, background: 'rgb(18, 140, 126)' },
		{ name: 'Messenger', slug: 'me', component: Messenger, background: 'rgb(0, 132, 255)' },
		{ name: 'Wechat', slug: 'we', component: Wechat, background: 'rgb(0, 199, 10)', multiplier: 1.15 },
		{ name: 'Skype', slug: 'sk', component: Skype, background: 'rgb(0, 120, 215)', multiplier: 1.1 },
		{ name: 'Line', slug: 'ln', component: Line, background: 'rgb(0, 185, 0)', multiplier: 1.1 }
  ];

</script>

<div class="row justify-content-center">
    {#each messengers as messenger}
      <div class="col-auto px-0">
        <Button messenger={messenger.component} background={messenger.background} height={22} multiplier={messenger.multiplier}></Button>
      </div>
    {/each}
</div>