import type { ComponentType } from 'svelte';

export interface MessengerType {
  name: string,
  title: string,
  slug: string,
  component: ComponentType,
  background: string,
  multiplier?: number,
  value?: string
}