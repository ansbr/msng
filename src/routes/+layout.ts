import '$lib/i18n';
import { locale, waitLocale } from 'svelte-i18n';
import { languages } from '$lib/utils/config';

export const load = async ({ params }: { params: { lang: string | undefined} }) => {
  const lang = params.lang && Object.keys(languages).includes(params.lang) ? params.lang : 'en'
	locale.set(lang)
	await waitLocale(lang)
}