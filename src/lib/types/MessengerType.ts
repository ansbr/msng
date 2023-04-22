import type { ComponentType } from 'svelte';

export interface MessengerType {
  title: string,
  slug: string,
  selected?: boolean,
  component: ComponentType,
  background: string
  multiplier?: number
}