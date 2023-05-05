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

<svelte:head>
  <link href="/assets/nprogress/nprogress.css" rel="stylesheet">
  <script src="/assets/bootstrap/bootstrap.bundle.min.js"></script>
  <script src="/assets/sharer/sharer.min.js"></script>
</svelte:head>

<Header />
<slot />
<Footer />