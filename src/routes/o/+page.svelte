<script lang="ts">
  import { browser } from '$app/environment';

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

<div class="container opacity-0" class:opacity-100={browser}>
  <div class="text-center">
    <h1>{titles[locale] || titles.en}</h1>
    {JSON.stringify(messengers)}
  </div>
</div>
