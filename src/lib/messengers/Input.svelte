<script lang="ts">
  import type { MessengerType } from "$lib/types/MessengerType";
  import Button from "./Button.svelte";
	import { _ } from 'svelte-i18n'

  export let messenger: MessengerType;
  let inputElelement: HTMLInputElement;

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

  $: translates = getTranslates(messenger)
  $: inputElelement && (inputElelement.type = messenger.inputType)
</script>

<style>
  .inputvalue-control::-webkit-outer-spin-button,
  .inputvalue-control::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>

<p>{translates.label}</p>

<div class="input-group mb-3 input-group-lg w-100">
  <Button class="px-3" messenger={messenger} height={30} on:click={(event) => event.preventDefault()} />
  <input bind:this={inputElelement} class="form-control inputvalue-control" bind:value={messenger.value} placeholder={translates.placeholder}>
</div>