export let value;

window.header.get("./stores").then((module) => {
  value = module().value;
});
