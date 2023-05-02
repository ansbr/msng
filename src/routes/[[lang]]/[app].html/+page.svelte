<script lang="ts">
  import { page } from '$app/stores';
  import type { MessengerType } from "$lib/types/MessengerType";
  import Button from '$lib/messengers/Button.svelte';
  import ListBottom from '$lib/messengers/ListBottom.svelte';
  import copy from 'copy-to-clipboard';
	import { _ } from 'svelte-i18n'
  import { onMount } from 'svelte';
  export let data;
  let messenger: MessengerType;
  let generatedLink: string | undefined;
  let isCopied = false;
  let inputElelement: HTMLInputElement | undefined;

  const handleGenerate = () => {
    generatedLink = `${$page.url.origin}/o?${messenger.value}=${messenger.slug}`
  }

  const handleCopy = () => {
    copy(generatedLink || '');
    isCopied = true
  }

  page.subscribe(pg => {
    messenger = data.props.messenger;
    if (inputElelement) inputElelement.type = messenger.inputType
    messenger.value = '';
    generatedLink = undefined;
    isCopied = false;
  });

  onMount(() => {
    if (inputElelement) inputElelement.type = messenger.inputType
  })
</script>

<style>
  .constructor {
    max-width: 600px;
  }
  .inputvalue-control::-webkit-outer-spin-button,
  .inputvalue-control::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>

<svelte:head>
	<title>{$_(`${messenger.name}.title`)}</title>
  <meta property="og:title" content={$_(`${messenger.name}.title`)} />
  <meta name="description" content={$_(`${messenger.name}.description`)} />
  <meta name="twitter:card" content={$_(`${messenger.name}.description`)} />
  <meta property="og:description" content={$_(`${messenger.name}.description`)} />
  <meta property="og:url" content={$page.url.toString()} />
  <meta property="og:image" content={`${$page.url.origin}/images/logos/${messenger.name}.png`} />
</svelte:head>


<div class="bg-light py-3 mb-4">
	<div class="container text-center">
		<h1>{$_(`${messenger.name}.title`)}</h1>
	</div>
</div>

<div class="container constructor">
  <p class="lead">{$_(`${messenger.name}.description`)}</p>

  <form on:submit|preventDefault={handleGenerate} class:d-none={generatedLink}>
    {@html $_(`${messenger.name}.help`, { default: '' })}

    <p>{$_(`${messenger.name}.label`)}</p>
  
    <div class="input-group mb-3 input-group-lg w-100">
      <Button class="px-3" messenger={messenger} height={30} on:click={(event) => event.preventDefault()} />
      <input bind:this={inputElelement} class="form-control inputvalue-control" bind:value={messenger.value} placeholder={$_(`${messenger.name}.placeholder`)}>
    </div>

    <div class="text-center pt-3" class:d-none={!messenger.value}>
      <button class="btn btn-primary btn-lg" type='submit'>Generate</button>
    </div>
  </form>

  {#if generatedLink}
    <p>{$_(`${messenger.name}.result`)}</p>
    <div class="input-group mb-3 input-group-lg">
      <input type="text" class="form-control" value={generatedLink} readonly>
      <button class="btn btn-primary d-flex align-items-center" class:btn-success={isCopied} type="button" on:click={handleCopy}>
        <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>
      </button>
    </div>
  {/if}
</div>


<div class="container text-center pt-5">
  <ListBottom height={28} filter={[messenger.name]} />
</div>
