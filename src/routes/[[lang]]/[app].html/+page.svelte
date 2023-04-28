<script lang="ts">
  import Button from '$lib/messengers/Button.svelte';
  import ListBottom from '$lib/messengers/ListBottom.svelte';
	import { _ } from 'svelte-i18n'
  export let data;
  let { messenger } = data.props

  $: messenger = data.props.messenger
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
  {@html $_(`${messenger.name}.html`, { default: '' })}
  <p>{$_(`${messenger.name}.label`)}</p>

  <div class="input-group mb-3 input-group-lg w-100">
    <Button class="px-3" messenger={messenger} height={30} on:click={(event) => event.preventDefault()} />
    <input type="text" class="form-control" placeholder={$_(`${messenger.name}.placeholder`)}>
  </div>
</div>


<div class="container text-center pt-5">
  <ListBottom height={25} filter={[messenger.name]} />
</div>
