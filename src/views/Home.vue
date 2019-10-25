<template>
  <div class="home">
    <FirebaseInitializer />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your React.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import FirebaseInitializer from "@/components/FirebaseInitializer.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    FirebaseInitializer
  }
};
</script>
