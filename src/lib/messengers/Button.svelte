<script lang="ts">
  import type { MessengerType } from "$lib/types/MessengerType";
  let _class: string = "";
	export { _class as class };
  export let messenger: MessengerType;
  export let height: number = 16;
  export let target: string | undefined = undefined;
  export let href: string = '#';
</script>

<style>
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .btn {
    border: none !important;
  }
</style>

<a {href} {target} type="button" class={`btn btn-secondary d-inline-flex align-items-center position-relative ${_class}`} on:click style={`background: ${messenger.background};`}>
  <span class="d-flex align-items-center position-relative">
    <i style:width={height + 'px'} style:line-height={height*1.1 + 'px'}>&nbsp;</i>
    <span class="icon d-flex align-items-center"><svelte:component this={messenger.component} on:click height={height*(messenger.multiplier || 1)} /></span>
  </span>
  {#if $$slots.default}
    &nbsp; <slot />
  {/if}
</a>
