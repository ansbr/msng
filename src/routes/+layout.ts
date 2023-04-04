// +layout.ts
import { browser } from '$app/environment'
import '$lib/i18n' // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n'

export const load = async ({ params }: { params: { lang: string | undefined} }) => {
  const lang = ['ru', 'de', 'es'].includes(params.lang || '') ? params.lang : 'en'
	locale.set(lang)
	await waitLocale(lang)
}