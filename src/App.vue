<template>
  <div id="app"><Game /></div>
</template>

<script>
import Game from "./components/Game";
import { store } from "./store/store";

export default {
  name: "App",
  store,
  components: {
    Game
  },
  mounted() {
    document.title = this.$store.getters.gameTitle;
  },
  methods: {
    changed: function(event) {
      this.$store.commit("setGameTitle", event.target.value);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
