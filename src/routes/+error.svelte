<script>
  import { page } from '$app/stores';
</script>

<div class="text-center pt-5 mt-5">
  <h1>{$page.status}</h1>
  <p>{$page.error?.message}</p>
  <a href="/">return to home page</a>
</div>