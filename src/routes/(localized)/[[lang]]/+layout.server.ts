import { languages } from '$lib/utils/config';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  if (params.lang && !languages[params.lang]) {
    throw error(404, {
      message: 'Not Found'
    });
  }
}