<template>
  <canvas
    ref="game"
    :width="$store.getters.gameVideoResolutionWidth"
    :height="$store.getters.gameVideoResolutionHeight"
  ></canvas>
</template>

<script>
import { store } from "../store/store";
//import animation from "./animation";

export default {
  name: "Game",
  //mixins: [animation],
  data() {
    return {
      start: null
    };
  },
  mounted() {
    window.requestAnimationFrame(this.run);
  },
  methods: {
    run(timestamp) {
      if (!this.start) {
        this.start = timestamp;
      }
      //console.log(timestamp);
      //console.log(this.start);
      var canvas = this.$refs["game"];
      var context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      var centerX = canvas.width / 2 + (timestamp - this.start) / 100;
      var centerY = canvas.height / 2;
      var radius = 70;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = "green";
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = "#003300";
      context.stroke();
      window.requestAnimationFrame(this.run);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
canvas {
  border: black solid 1px;
}
</style>
