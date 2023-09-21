<script lang="ts">
  import { page } from '$app/stores';
  import type { MessengerType } from "$lib/types/MessengerType";
  import ListBottom from '$lib/messengers/ListBottom.svelte';
	import { _ } from 'svelte-i18n'
  import Input from '$lib/messengers/Input.svelte';
  import ResultLink from '$lib/messengers/ResultLink.svelte';
  export let data;
  let messenger: MessengerType = data.props.messenger;
  let generatedLink: string | undefined;
  let translates = getTranslates(messenger);

  function getTranslates(messenger: MessengerType) {
    const defaultOpts = { default: '' };
    const universalOpts = { values: { messenger: messenger.title }, default: ''}
    const get = (name: string) => $_(`${messenger.name}.${name}`, defaultOpts) || $_(`universal.${name}`, universalOpts)
    return {
      title: get('title'),
      description: get('description'),
      help: get('help'),
      label: get('label'),
      placeholder: get('placeholder'),
      result: get('result')
    }
  }

  const handleGenerate = () => {
    generatedLink = `${$page.url.origin}/o?${messenger.value}=${messenger.slug}`
  }

  page.subscribe(pg => {
    messenger = data.props.messenger;
    messenger.value = '';
    generatedLink = undefined;
    translates = getTranslates(messenger)
  });

  const handleBack = () => {
    generatedLink = undefined;
  }

</script>

<style>
  .constructor {
    max-width: 600px;
  }
</style>

<svelte:head>
	<title>{translates.title}</title>
  <meta property="og:title" content={translates.title} />
  <meta name="description" content={translates.description} />
  <meta name="twitter:card" content={translates.description} />
  <meta property="og:description" content={translates.description} />
  <meta property="og:url" content={$page.url.toString()} />
  <meta property="og:image" content={`${$page.url.origin}/images/logos/${messenger.name}.png`} />
</svelte:head>


<div class="bg-light py-3 mb-4">
	<div class="container text-center">
		<h1>{translates.title}</h1>
	</div>
</div>

<div class="container constructor">
  <p class="lead">{translates.description}</p>

  <form on:submit|preventDefault={handleGenerate} class:d-none={generatedLink}>
    {@html translates.help}

    <Input bind:messenger={messenger} />

    <div class="text-center pt-3" class:d-none={!messenger.value}>
      <button class="btn btn-primary btn-lg" type='submit'>{$_(`landing.generate`)}</button>
    </div>
  </form>

  {#if generatedLink}
    <p>{translates.result}</p>
    <div class="input-group mb-3 input-group-lg">
      <ResultLink {generatedLink} />
    </div>
    <div class="pt-2 pb-3">
      <button class="btn btn-secondary btn-lg" on:click={handleBack}>{$_('navigation.back')}</button>
    </div>
  {/if}
</div>


<div class="container text-center pt-5">
  <ListBottom height={28} filter={[messenger.name]} />
</div>
