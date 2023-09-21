<script lang="ts">
  import { page } from '$app/stores';
  import type { MessengerType } from "$lib/types/MessengerType";
	import ListGenerator from '$lib/messengers/ListGenerator.svelte';
	import { _ } from 'svelte-i18n'
  import Input from '$lib/messengers/Input.svelte';
  import ResultLink from '$lib/messengers/ResultLink.svelte';

  let selectedMessengers: MessengerType[] = [];
  let stage: number = 0
  let container: HTMLDivElement;
  let generatedLink: string | undefined = undefined;

  const mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  const handleBack = () => {
    stage = 0;
    generatedLink = undefined;
  }

  const handleStartGenerate = () => {
    stage = 1;
    if (!mobileCheck()) {
      container.style.minHeight = container.clientHeight + 'px';
    }
  }

  const handleFinishGenerate = () => {
    const params: {[key: string]: string} = {}
    selectedMessengers.forEach(m => {
      if (!m.value) return;
      params[m.value] = params[m.value] ? params[m.value] + m.slug : m.slug
    })
    const search = new URLSearchParams(params);
    generatedLink = `${$page.url.origin}/o?${search.toString()}`;
    stage = 2;
  }
  
</script>

<style>
  .constructor {
    max-width: 600px;
  }
  .btn-generate-container {
    position: sticky;
    bottom: 0;
    z-index: 90;
    padding: 10px;
    background: #fff;
  }
</style>

<svelte:head>
	<title>{$_('landing.title')}</title>
  <meta property="og:title" content={$_('landing.title')} />
  <meta name="description" content={$_('landing.description')} />
  <meta name="twitter:card" content={$_('landing.description')} />
  <meta property="og:description" content={$_('landing.description')} />
  <meta property="og:url" content={$page.url.toString()} />
  <meta property="og:image" content={`${$page.url.origin}/images/logos/home.png`} />
</svelte:head>


<div class="bg-light py-3 mb-4">
	<div class="container text-center">
		<h1>{$_('landing.title')}</h1>
	</div>
</div>


<div class="container" bind:this={container}>
  <div class="picker" class:d-none={stage != 0}>
    <div class="text-center pb-4">
      <p>{$_('landing.description')}</p>
      <h4>{$_('landing.check_messengers')}</h4>
    </div>
    <ListGenerator bind:selected={selectedMessengers} />
  </div>
  
  {#if stage == 1}
    <form class="constructor container position-relative" on:submit={handleFinishGenerate}>
      {#each selectedMessengers as messenger }
        <Input bind:messenger={messenger} />
      {/each}
      
      <div class="row justify-content-between pt-3 flex-row-reverse">
        <div class="col text-end" class:d-none={selectedMessengers.filter(m => !m.value).length}>
          <button class="btn btn-primary btn-lg" type="submit">{$_(`landing.generate`)}</button>
        </div>
        <div class="col text-start">
          <button class="btn btn-secondary btn-lg px-2" on:click={() => stage = 0}>{$_('navigation.back')}</button>
        </div>
      </div>
    </form>
  {/if}

  {#if stage == 2}
    <div class="container constructor">
      <p>{$_('landing.here_is_your_link')}</p>
      <div class="input-group mb-3 input-group-lg">
        <ResultLink {generatedLink} />
      </div>
      <div class="pt-2 pb-3">
        <button class="btn btn-secondary btn-lg" on:click={handleBack}>{$_('navigation.back')}</button>
      </div>
    </div>
  {/if}
</div>

<div class="text-center btn-generate-container" class:d-none={!selectedMessengers?.length || stage != 0}>
  <button class="btn btn-primary btn-lg" on:click={handleStartGenerate}>{$_(`landing.next`)}</button>
</div>

