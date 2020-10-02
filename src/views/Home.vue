<template>
  <div class="home container mx-auto flex-col justify-center flex pt-10">
    <img class="mx-auto pb-10"
    :src="require('@/assets/img/logo.png')" height="260px" width="320px"/>
    <div id="banner" class="w-full mx-auto my-auto p-3 mb-20 border-t-2 border-b-2 border-white">
      <p class="text-6xl text-white font-medium uppercase
      text-center select-none title tracking-wide">
        Memory Matrix
      </p>
    </div>
    <div class="flex flex-row flex-wrap justify-center text-white gap-5 uppercase">
      <router-link to="/mechanics" class="p-2 px-6 text-2xl rounded-lg
      border-double border-4 border-started bg-started title font-bold">
        Get Started
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
};
</script>

<style scoped>
  .bg-started {
    background: #24397A;
  }
  .title {
    font-family: ChalkitUp;
    font-weight: 300;
  }
  @font-face {
    font-family: ChalkitUp;
    src: url('../assets/font/chalkitup-title.ttf');
  }
  @font-face {
    font-family: GothamMedium;
    src: url('../assets/font/gotham-score.otf');
  }
  .font-gotham {
    font-family: GothamMedium;
  }
</style>
