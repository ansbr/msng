import type { ComponentType } from 'svelte';

export interface MessengerType {
  name: string,
  slug: string,
  selected?: boolean,
  component: ComponentType,
  background: string
  multiplier?: number
}