<script>
  import {value} from "./stores";

  let Header;
  let headerPromise = window.header.get("./Header").then((module) => {
    Header = module().default;
  });

  const onClick = () => {
    value.update((value) => value+=1);
  }
</script>
{#await headerPromise then dummy}
  <svelte:component this={Header}/>
{/await}
<div>This is the consumer</div>
<button on:click={onClick}>
  Add to cart!
</button>
