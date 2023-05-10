<script>
  import { beforeNavigate, afterNavigate } from "$app/navigation";
  import Footer from "$lib/layout/Footer.svelte";
  import Header from "$lib/layout/Header.svelte";
  import NProgress from 'nprogress'
    import { onMount } from "svelte";

  beforeNavigate(() => {
    NProgress.start();
  });

  afterNavigate(() => {
    NProgress.done();
  });

  onMount(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });
</script>

<svelte:head>
  <link href="/assets/nprogress/nprogress.css" rel="stylesheet">
  <script src="/assets/bootstrap/bootstrap.bundle.min.js"></script>
  <script src="/assets/sharer/sharer.min.js"></script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2783112053927174" crossorigin="anonymous"></script>
</svelte:head>

<!-- Top banner -->
<ins class="adsbygoogle"
  style="display:block;text-align:center;"
  data-ad-client="ca-pub-2783112053927174"
  data-ad-slot="6985881377"
  data-ad-format="auto"
  data-full-width-responsive="true">
</ins>
<Header />
<slot />
<Footer />