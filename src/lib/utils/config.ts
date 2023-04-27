import type { MessengerType } from '$lib/types/MessengerType';
import Telegram from '$lib/messengers/svg/Telegram.svelte';
import Viber from '$lib/messengers/svg/Viber.svelte';
import Whatsapp from '$lib/messengers/svg/Whatsapp.svelte';
import Messenger from '$lib/messengers/svg/Messenger.svelte';
import Wechat from '$lib/messengers/svg/Wechat.svelte';
import Skype from '$lib/messengers/svg/Skype.svelte';
import Line from '$lib/messengers/svg/Line.svelte';
import Pinterest from '$lib/messengers/svg/Pinterest.svelte';
import Facebook from '$lib/messengers/svg/Facebook.svelte';
import Linkedin from '$lib/messengers/svg/Linkedin.svelte';
import Reddit from '$lib/messengers/svg/Reddit.svelte';
import Twitter from '$lib/messengers/svg/Twitter.svelte';
import Vk from '$lib/messengers/svg/Vk.svelte';
import Instagram from '$lib/messengers/svg/Instagram.svelte';
import Tiktok from '$lib/messengers/svg/Tiktok.svelte';
import Snapchat from '$lib/messengers/svg/Snapchat.svelte';
import Odnoklassniki from '$lib/messengers/svg/Odnoklassniki.svelte';

export const messengerComponents: {[key: string]: MessengerType} = {
  telegram: { name: "telegram", title: 'Telegram', slug: 'tg', background: 'rgb(0, 136, 204)', component: Telegram, multiplier: 1.1 },
  viber: { name: "viber", title: 'Viber', slug: 'vi', background: '#7360f2', component: Viber },
  whatsapp: { name: "whatsapp", title: 'Whatsapp', slug: 'wa', background: '#2dd26e', component: Whatsapp },
  facebook: { name: "facebook", title: 'Facebook', slug: 'fb', background: '#4267b2', component: Facebook, multiplier: 1.1 },
  messenger: { name: "messenger", title: 'Messenger', slug: 'me', background: 'rgb(0, 132, 255)', component: Messenger },
  wechat: { name: "wechat", title: 'Wechat', slug: 'we', background: 'rgb(0, 199, 10)', component: Wechat, multiplier: 1.15 },
  skype: { name: "skype", title: 'Skype', slug: 'sk', background: 'rgb(0, 120, 215)', component: Skype, multiplier: 1.1 },
  line: { name: "line", title: 'Line', slug: 'ln', background: 'rgb(0, 185, 0)', component: Line, multiplier: 1.1 },
  pinterest: { name: "pinterest", title: 'Pinterest', slug: 'pt', background: '#bf0811', component: Pinterest },
  linkedin: { name: "linkedin", title: 'Linkedin', slug: 'li', background: '#0174b3', component: Linkedin },
  reddit: { name: "reddit", title: 'Reddit', slug: 'rd', background: '#ff4300', component: Reddit, multiplier: 1.2 },
  twitter: { name: "twitter", title: 'Twitter', slug: 'tw', background: '#00a2f5', component: Twitter, multiplier: 1.1 },
  vk: { name: "vk", title: 'VK', slug: 'vk', background: 'rgb(82, 129, 184)', component: Vk, multiplier: 1.1 },
  instagram: { name: "instagram", title: 'Instagram', slug: 'ig', background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', component: Instagram, multiplier: 1 },
  tiktok: { name: "tiktok", title: 'TikTok', slug: 'tt', background: '#000', component: Tiktok, multiplier: 1 },
  snapchat: { name: "snapchat", title: 'Snapchat', slug: 'sc', background: '#eae616', component: Snapchat, multiplier: 1 },
  odnoklassniki: { name: "odnoklassniki", title: 'Odnoklassniki', slug: 'ok', background: '#ea7339', component: Odnoklassniki, multiplier: 1.2 },
}

export const messengers: string[] = [
  'telegram',
  'viber',
  'whatsapp',
  'messenger',
  'wechat',
  'skype',
  'line',
  'instagram',
  'tiktok',
  'vk',
  'snapchat',
  'linkedin'
]

export const listShare: {[key: string]: string[]} = {
  default: [
    'facebook',
    'pinterest',
    'linkedin',
    'reddit',
    'twitter',
    'telegram'
  ],
  ru: [
    'vk',
    'telegram',
    'odnoklassniki'
  ]
}


export const languages: {[key: string]: string} = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  ru: 'Русский'
}

