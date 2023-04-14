<script lang="ts">
  import { browser } from '$app/environment';
	import { page } from '$app/stores';
  import Telegram from '$lib/messengers/Telegram.svelte';
  import Viber from '$lib/messengers/Viber.svelte';
  import Whatsapp from '$lib/messengers/Whatsapp.svelte';
  import Messenger from '$lib/messengers/Messenger.svelte';
  import Wechat from '$lib/messengers/Wechat.svelte';
  import Skype from '$lib/messengers/Skype.svelte';
  import Line from '$lib/messengers/Line.svelte';
  import type { MessengerType } from '$lib/types/MessengerType';

	const messengers: MessengerType[] = [
		{ name: 'Telegram', slug: 'tg', component: Telegram, background: 'rgb(0, 136, 204)' },
		{ name: 'Viber', slug: 'vi', component: Viber, background: '#7360f2' },
		{ name: 'Whatsapp', slug: 'wa', component: Whatsapp, background: 'rgb(18, 140, 126)' },
		{ name: 'Messenger', slug: 'me', component: Messenger, background: 'rgb(0, 132, 255)' },
		{ name: 'Wechat', slug: 'we', component: Wechat, background: 'rgb(0, 199, 10)' },
		{ name: 'Skype', slug: 'sk', component: Skype, background: 'rgb(0, 120, 215)' },
		{ name: 'Line', slug: 'ln', component: Line, background: 'rgb(0, 185, 0)', multiplier: 1.2 }
	];

</script>


{#each messengers as messenger, index}
  <div class="d-inline-block" data-sharer="twitter" data-title={ browser && $page.url && document.title } data-url={ $page.url }>
    <svelte:component this={messenger.component} size='icon'>
      {messenger.name}
    </svelte:component>
  </div>
{/each}



