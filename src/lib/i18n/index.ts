import { init, register } from 'svelte-i18n'
import { languages } from '$lib/utils/config'

const defaultLocale = 'en'

export const langUrl = (url: string, locale: string | null | undefined) => {
	if (locale != defaultLocale) {
		return `/${locale}${url == '/' ? '' : url}`
	}
	return url;
}

Object.keys(languages).forEach(locale => {
	register(locale, () => import(`./locales/${locale}.json`))
})

init({
	fallbackLocale: defaultLocale
})