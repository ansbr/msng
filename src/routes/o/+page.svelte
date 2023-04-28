<script lang="ts">
  import { browser } from '$app/environment';
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
</script>

<svelte:head>
	<title>{titles.en}{messengers && messengers.length ? ` in ${messengers[0].title}: ${messengers[0].value}` : ''}</title>
</svelte:head>

<div class="container opacity-0" class:opacity-100={browser}>
  <div class="text-center pt-5">
    <h2>{titles[locale] || titles.en}</h2>
    <br />
    <ListUser messengers={messengers} />
  </div>
</div>
