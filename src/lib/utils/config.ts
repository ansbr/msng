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

export const messengersList: MessengerType[] = [
  { name: "telegram", title: 'Telegram', slug: 'tg', background: 'rgb(0, 136, 204)', component: Telegram, multiplier: 1.1, link: 'https://t.me/{-}', deepLink: 'tg://resolve?domain={-}', inputType: 'text' },
  { name: "viber", title: 'Viber', slug: 'vi', background: '#7360f2', component: Viber, link: 'viber://chat?number={-}', deepLink: 'viber://add?number={-}', inputType: 'number' },
  { name: "whatsapp", title: 'Whatsapp', slug: 'wa', background: '#2dd26e', component: Whatsapp, link: 'https://wa.me/{-}', deepLink: 'whatsapp://send?phone={-}', inputType: 'number' },
  { name: "facebook", title: 'Facebook', slug: 'fb', background: '#4267b2', component: Facebook, multiplier: 1.1, link: 'https://www.facebook.com/{-}', inputType: 'text' },
  { name: "fb-messenger", title: 'Messenger', slug: 'fm', background: 'rgb(0, 132, 255)', component: Messenger, link: 'https://m.me/{-}', inputType: 'text' },
  { name: "wechat", title: 'Wechat', slug: 'wc', background: 'rgb(0, 199, 10)', component: Wechat, multiplier: 1.15, link: '/o/?{-}=wc', inputType: 'text' },
  { name: "skype", title: 'Skype', slug: 'sk', background: 'rgb(0, 120, 215)', component: Skype, multiplier: 1.1, link: 'skype:{-}?chat', deepLink: 'skype:{-}?chat', inputType: 'text' },
  { name: "line", title: 'Line', slug: 'ln', background: 'rgb(0, 185, 0)', component: Line, multiplier: 1.1, link: 'https://line.me/R/ti/p/@{-}', deepLink: 'line://ti/p/@{-}', inputType: 'text' },
  { name: "pinterest", title: 'Pinterest', slug: 'pt', background: '#bf0811', component: Pinterest, link: 'https://www.pinterest.com/{-}', inputType: 'text' },
  { name: "linkedin", title: 'Linkedin', slug: 'li', background: '#0174b3', component: Linkedin, link: 'https://www.linkedin.com/in/{-}', inputType: 'text' },
  { name: "reddit", title: 'Reddit', slug: 'rd', background: '#ff4300', component: Reddit, multiplier: 1.2, link: 'https://www.reddit.com/u/{-}', inputType: 'text' },
  { name: "twitter", title: 'Twitter', slug: 'tw', background: '#00a2f5', component: Twitter, multiplier: 1.1, link: 'https://twitter.com/{-}', inputType: 'text' },
  { name: "vk", title: 'VK', slug: 'vk', background: 'rgb(82, 129, 184)', component: Vk, multiplier: 1.1, link: 'https://vk.com/{-}', inputType: 'text' },
  { name: "instagram", title: 'Instagram', slug: 'ig', background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', component: Instagram, multiplier: 1, link: 'https://www.instagram.com/{-}', deepLink: 'instagram://user?username={-}', inputType: 'text' },
  { name: "tiktok", title: 'TikTok', slug: 'tt', background: '#000', component: Tiktok, multiplier: 1, link: 'https://www.tiktok.com/@{-}', inputType: 'text' },
  { name: "snapchat", title: 'Snapchat', slug: 'sc', background: '#eae616', component: Snapchat, multiplier: 1, link: 'https://www.snapchat.com/add/{-}', inputType: 'text' },
  { name: "odnoklassniki", title: 'Odnoklassniki', slug: 'ok', background: '#ea7339', component: Odnoklassniki, multiplier: 1.2, link: 'https://ok.ru/{-}', inputType: 'text' },
]

export const messengersByName: {[key: string]: MessengerType} = messengersList.reduce((ac,a) => ({...ac,[a.name]:a}),{});
export const messengersBySlug: {[key: string]: MessengerType} = messengersList.reduce((ac,a) => ({...ac,[a.slug]:a}),{});

export const messengers: string[] = [
  'telegram',
  'viber',
  'whatsapp',
  'fb-messenger',
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

