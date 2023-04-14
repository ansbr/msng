<script lang="ts">
  import type { ComponentType } from 'svelte';
  export let messenger: ComponentType;
  export let height: number = 16;
  export let background: string;
  export let multiplier: number = 1;
</script>

<style>
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<button type="button" class="btn btn-secondary d-flex align-items-center flex-fill px-2 position-relative" on:click  style={`background: ${background};`}>
  <span class="d-flex align-items-center position-relative">
    <i style:width={height + 'px'}>&nbsp;</i>
    <span class="icon d-flex align-items-center"><svelte:component this={messenger} on:click height={height*multiplier} /></span>
  </span>
  {#if $$slots.default}
    &nbsp; <slot />
  {/if}
</button>
