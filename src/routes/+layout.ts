import initI18n from '$lib/i18n';
import type { LoadEvent } from "@sveltejs/kit";
import { languages } from '$lib/utils/config';

export const load = async ({ params }: LoadEvent) => {
  const lang = params.lang && Object.keys(languages).includes(params.lang) ? params.lang : 'en'
	await initI18n(lang)
}
