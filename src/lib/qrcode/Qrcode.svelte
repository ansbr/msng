<script lang="ts">
  import QRCode from "qrcode";

  export let value: string = '';
  export let width: number = 100;

  const generate = (canvas: HTMLElement) => {
    QRCode.toCanvas(canvas, value, {
      width: width*1.2,
      margin: 0
    }, (error) => {
      error && console.error(error)
    });
  }
</script>

<canvas use:generate />