<script>
  import { beforeNavigate, afterNavigate } from "$app/navigation";
  import Footer from "$lib/layout/Footer.svelte";
  import Header from "$lib/layout/Header.svelte";
  import NProgress from 'nprogress'


  beforeNavigate(() => {
    NProgress.start();
  });

  afterNavigate(() => {
    NProgress.done();
  });
</script>

<Header />
<slot />
<Footer />