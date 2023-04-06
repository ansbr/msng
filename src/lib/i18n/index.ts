import { init, register } from 'svelte-i18n'

const defaultLocale = 'en'

export const langUrl = (url: string, locale: string | null | undefined) => {
	if (locale != defaultLocale) {
		return `/${locale}${url == '/' ? '' : url}`
	}
	return url;
}

register('en', () => import('./locales/en.json'))
register('ru', () => import('./locales/ru.json'))
register('de', () => import('./locales/de.json'))
register('es', () => import('./locales/es.json'))

init({
	fallbackLocale: defaultLocale
})