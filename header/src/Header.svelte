<script>
  import {value} from "./stores";
</script>
<style>
  header {
    background: lightblue;
    padding: 1em;
    font-size: xx-large;
    display: grid;
    grid-template-columns: 90% 10%;
  }
</style>
<header>
  <div>My Svelte Header III</div>
  <div>{$value}</div>
</header>
