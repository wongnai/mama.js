<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="blue--text text--darken-3">Wongnai</span>
        <span class="font-weight-light orange--text"> Firebase Playground</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <FirebaseInitializer />
    </v-content>
  </v-app>
</template>

<script>
import FirebaseInitializer from './components/FirebaseInitializer'

export default {
  name: "App",
  components: {
    FirebaseInitializer,
  }
};
</script>
