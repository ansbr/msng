<script lang="ts">
  import { page } from '$app/stores';
  import Button from '$lib/messengers/Button.svelte';
  import ListBottom from '$lib/messengers/ListBottom.svelte';
	import { _ } from 'svelte-i18n'
  export let data;
  let generatedLink: string | undefined;
  let { messenger } = data.props

  $: messenger = data.props.messenger

  const handleGenerate = () => {
    generatedLink = `${$page.url.origin}/o?${messenger.value}=${messenger.slug}`
  }
</script>

<style>
  .constructor {
    max-width: 600px;
  }
</style>

<svelte:head>
	<title>{$_(`${messenger.name}.title`)}</title>
</svelte:head>

<div class="bg-light py-3 mb-4">
	<div class="container text-center">
		<h1>{$_(`${messenger.name}.title`)}</h1>
	</div>
</div>

<div class="container constructor">
  <p class="lead">{$_(`${messenger.name}.description`)}</p>
  {@html $_(`${messenger.name}.help`, { default: '' })}

  <div class:d-none={generatedLink}>
    <p>{$_(`${messenger.name}.label`)}</p>
  
    <div class="input-group mb-3 input-group-lg w-100">
      <Button class="px-3" messenger={messenger} height={30} on:click={(event) => event.preventDefault()} />
      <input type="text" class="form-control" bind:value={messenger.value} placeholder={$_(`${messenger.name}.placeholder`)}>
    </div>
  </div>

  <div class="text-center pt-3" class:d-none={!messenger.value || generatedLink}>
    <button class="btn btn-primary btn-lg" on:click={handleGenerate}>Generate</button>
  </div>

  {#if generatedLink}
    <p>{$_(`${messenger.name}.result`)}</p>
    <div class="input-group mb-3 input-group-lg">
      <input type="text" class="form-control" value={generatedLink}>
      <button class="btn btn-primary d-flex align-items-center" type="button">
        <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#fff" d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>
      </button>
    </div>
  {/if}
</div>


<div class="container text-center pt-5">
  <ListBottom height={25} filter={[messenger.name]} />
</div>
