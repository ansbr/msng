import { messengersByName } from '$lib/utils/config';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  if (params.app && !messengersByName[params.app]) {
    throw error(404, {
      message: 'Not Found'
    });
  }

  return { 
    props: {
      messenger: messengersByName[params.app]
    }
  };
}