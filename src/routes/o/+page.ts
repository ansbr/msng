import type { LoadEvent } from "@sveltejs/kit";
import { messengersBySlug } from "$lib/utils/config";
import type { MessengerType } from "$lib/types/MessengerType";
import { error } from '@sveltejs/kit';

export function load({ url }: LoadEvent) {
  const messengers: MessengerType[] = []
  url.searchParams.forEach((slugs, val) => {
    slugs.match(/.{1,2}/g)?.forEach(function(sm) {
      if (messengersBySlug[sm]) {
        messengers.push({ ...messengersBySlug[sm], value: val.trim() });
      }
    })
  })

  if (messengers.length < 1) {
    throw error(404, {
      message: 'Not Found'
    });
  }

  return { 
    props: {
      messengers
    }
  };
}