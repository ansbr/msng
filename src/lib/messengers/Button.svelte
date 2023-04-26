<script lang="ts">
  import type { MessengerType } from '$lib/types/MessengerType';
  import Telegram from '$lib/messengers/svg/Telegram.svelte';
  import Viber from '$lib/messengers/svg/Viber.svelte';
  import Whatsapp from '$lib/messengers/svg/Whatsapp.svelte';
  import Messenger from '$lib/messengers/svg/Messenger.svelte';
  import Wechat from '$lib/messengers/svg/Wechat.svelte';
  import Skype from '$lib/messengers/svg/Skype.svelte';
  import Line from '$lib/messengers/svg/Line.svelte';
  import Pinterest from '$lib/messengers/svg/Pinterest.svelte';
  import Facebook from '$lib/messengers/svg/Facebook.svelte';
  import Linkedin from '$lib/messengers/svg/Linkedin.svelte';
  import Reddit from '$lib/messengers/svg/Reddit.svelte';
  import Twitter from '$lib/messengers/svg/Twitter.svelte';
  import Vk from '$lib/messengers/svg/Vk.svelte';

  let _class: string = "";
	export { _class as class };
  export let messengerName: string;
  export let height: number = 16;
  export let type: string | undefined = undefined;

  const messengers: {[key: string]: MessengerType} = {
    telegram: { title: 'Telegram', slug: 'tg', background: 'rgb(0, 136, 204)', component: Telegram, multiplier: 1.1 },
    viber: { title: 'Viber', slug: 'vi', background: '#7360f2', component: Viber },
    whatsapp: { title: 'Whatsapp', slug: 'wa', background: 'rgb(18, 140, 126)', component: Whatsapp },
    facebook: { title: 'Facebook', slug: 'fb', background: '#4267b2', component: Facebook, multiplier: 1.1 },
    messenger: { title: 'Messenger', slug: 'me', background: 'rgb(0, 132, 255)', component: Messenger },
    wechat: { title: 'Wechat', slug: 'we', background: 'rgb(0, 199, 10)', component: Wechat, multiplier: 1.15 },
    skype: { title: 'Skype', slug: 'sk', background: 'rgb(0, 120, 215)', component: Skype, multiplier: 1.1 },
    line: { title: 'Line', slug: 'ln', background: 'rgb(0, 185, 0)', component: Line, multiplier: 1.1 },
    pinterest: { title: 'Pinterest', slug: 'pt', background: '#bf0811', component: Pinterest },
    linkedin: { title: 'Linkedin', slug: 'li', background: '#0174b3', component: Linkedin },
    reddit: { title: 'Reddit', slug: 'rd', background: '#ff4300', component: Reddit, multiplier: 1.2 },
    twitter: { title: 'Twitter', slug: 'tw', background: '#00a2f5', component: Twitter, multiplier: 1.1 },
    vk: { title: 'Vk', slug: 'vk', background: 'rgb(82, 129, 184)', component: Vk, multiplier: 1.2 },
  }

  const messenger = messengers[messengerName];
</script>

<style>
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .share-btn {
    padding: 0 5px !important;
    border-radius: 15px;
  }

  .btn {
    border: none !important;
  }
</style>

<button type="button" class={`btn btn-secondary d-flex align-items-center flex-fill px-2 position-relative ${_class}`} class:share-btn={type === 'share'} on:click style={`background: ${messenger.background};`}>
  <span class="d-flex align-items-center position-relative">
    <i style:width={height + 'px'}>&nbsp;</i>
    <span class="icon d-flex align-items-center"><svelte:component this={messenger.component} on:click height={height*(messenger.multiplier || 1)} /></span>
  </span>
  {#if type === 'text'}
    &nbsp; {messenger.title}
  {/if}
  {#if $$slots.default}
    &nbsp; <slot />
  {/if}
</button>
