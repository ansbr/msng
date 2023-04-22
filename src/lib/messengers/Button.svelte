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

  export let messengerName: string;
  export let height: number = 16;
  export let type: string | undefined = undefined;

  const messengers: {[key: string]: MessengerType} = {
    telegram: { title: 'Telegram', slug: 'tg', background: 'rgb(0, 136, 204)', component: Telegram },
    viber: { title: 'Viber', slug: 'vi', background: '#7360f2', component: Viber },
    whatsapp: { title: 'Whatsapp', slug: 'wa', background: 'rgb(18, 140, 126)', component: Whatsapp },
    messenger: { title: 'Messenger', slug: 'me', background: 'rgb(0, 132, 255)', component: Messenger },
    wechat: { title: 'Wechat', slug: 'we', background: 'rgb(0, 199, 10)', component: Wechat, multiplier: 1.15 },
    skype: { title: 'Skype', slug: 'sk', background: 'rgb(0, 120, 215)', component: Skype, multiplier: 1.1 },
    line: { title: 'Line', slug: 'ln', background: 'rgb(0, 185, 0)', component: Line, multiplier: 1.1 },
    pinterest: { title: 'Pinterest', slug: 'pt', background: '#bf0811', component: Pinterest },
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
</style>

<button type="button" class="btn btn-secondary d-flex align-items-center flex-fill px-2 position-relative" class:share-btn={type === 'share'} on:click style={`background: ${messenger.background};`}>
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
