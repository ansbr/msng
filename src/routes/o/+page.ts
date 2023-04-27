import type { LoadEvent } from "@sveltejs/kit";

export function load({ url }: LoadEvent) {
  const messengers: {slug: string, value: string}[] = []
  url.searchParams.forEach((slugs, val) => {
    slugs.match(/.{1,2}/g)?.forEach(function(sm) {
      messengers.push({ slug: sm, value: val.trim() });
    })
  })

  return { 
    props: {
      messengers
    }
  };
}