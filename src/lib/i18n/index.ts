import { init, register, waitLocale, locale } from 'svelte-i18n'
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


const initI18n = async (lang: string) => {
	locale.set(lang)
	await waitLocale(lang)
	init({
		fallbackLocale: defaultLocale,
		initialLocale: lang
	})
}

export default initI18n;