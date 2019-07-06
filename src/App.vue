<template>
  <div id="app">
    <div id="eink">
      <div id="eink-content">
        <div
          class="message"
        >When has justice ever been as simple as a rule book? Well, I'll say this for him - he's sure of himself. I am your worst nightmare! Did you come here for something in particular or just general Riker-bashing? Captain, why are we out here chasing comets? Wouldn't that bring about chaos? Now, how the hell do we defeat an enemy that knows us better than we know ourselves? My oath is between Captain Kargan and myself. Your only concern is with how you obey my orders. Or do you prefer the rank of prisoner to that of lieutenant? Yes, absolutely, I do indeed concur, wholeheartedly! I can't. As much as I care about you, my first duty is to the ship. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation. I'm afraid I still don't understand, sir. Is it my imagination, or have tempers become a little frayed on the ship lately? Commander William Riker of the Starship Enterprise. The Enterprise computer system is controlled by three primary main processor cores, cross-linked with a redundant melacortz ramistat, fourteen kiloquad interface modules. I'd like to think that I haven't changed those things, sir. Sorry, Data.</div>
        <div id="status">Last updated: {{ new Date() }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#eink {
  width: 400px;
  height: 300px;
  border: 1px solid black;
  box-sizing: content-box;
  overflow: hidden;
}

#eink-content {
  position: relative;
  height: 100%;
  width: 100%;
  text-align: justify;
  overflow: hidden;

  font-size: 200%;
}

#status {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 400px;

  background-color: black;
  color: red;
  font-weight: bold;
  text-align: right;
  font-size: 11px;
}
</style>
