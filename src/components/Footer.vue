<template>
  <div>
    <h5 id="tweeter">Tweeter by Nikki Desrosiers</h5>
  </div>
</template>

<script>
export default {
  name: "footer-container"
};
</script>

<style lang="scss" scoped>
#tweeter {
  font-family: "Arimo", cursive;
  color: black;
  font-size: 10px;
  display: grid;
  align-items: center;
  justify-items: center;
  margin-top: 10vh;
  margin-bottom: 3vh;
}
// TABLET
@media only screen and (min-width: 670px) {
  #tweeter {
    font-size: 12px;
  }
}
</style>