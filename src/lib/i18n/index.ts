import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const defaultLocale = 'en'

register('en', () => import('./locales/en.json'))
register('ru', () => import('./locales/ru.json'))
register('de', () => import('./locales/de.json'))
register('es', () => import('./locales/es.json'))

init({
	fallbackLocale: defaultLocale
})