<script lang="ts">
  import { browser } from '$app/environment';
    import { page } from '$app/stores';
  import ListUser from '$lib/messengers/ListUser.svelte';
  export let data;
  const { messengers } = data.props
  let locale = 'en';

  const titles: {[key: string]: string} = {
    en: 'Message me',
    de: 'Texten Sie mich an',
    es: 'Envíame un mensaje',
    ru: 'Напишите мне',
    ua: 'Напишіть мені'
  }

  $: browser && (locale = navigator.language.substring(0, 2))

  const title = `${titles.en} to ${messengers.map(m => m.title).join(', ')}`
  const description = `${titles.en} to ${messengers.reverse().map(m => {
    if (m.name == 'wechat') return m.title;
    return `${m.title}: ${m.value}`;
  }).join(', ')}`
</script>

<style>
  .bottom-link {
    position: absolute;
    bottom: 10px;
    width: 100%;
    font-size: 12px;
    left: 50%;
    transform: translateX(-50%);
    color: #6c757d;
    text-decoration: none;
  }
</style>

<svelte:head>
	<title>{title}</title>
  <meta property="og:title" content={title} />
  <meta name="description" content={description} />
  <meta name="twitter:card" content={description} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={$page.url.toString()} />
  <meta property="og:image" content={`${$page.url.origin}/images/logos/${messengers[0].name}.png`} />
</svelte:head>

<div class="container opacity-0" class:opacity-100={browser}>
  <div class="text-center pt-5">
    <h2>{titles[locale] || titles.en}</h2>
    <br />
    <ListUser messengers={messengers} />
    <a class="bottom-link" href={$page.url.origin}>{$page.url.host}</a>
  </div>
</div>
