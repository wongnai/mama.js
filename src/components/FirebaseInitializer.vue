<template>
  <v-container>
    <v-card class="d-flex pa-2">
      <v-card-text>
        <v-textarea name="firebaseConfig" label="Firebase Config" v-model="firebaseConfig"></v-textarea>
        <v-btn color="orange" class="white--text" v-on:click="setConfig">Initialize Firebase App!</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "FirebaseInitializer",
  methods: {
    setConfig: function() {
      const goodConfig = this.firebaseConfig.replace(
        /(['"])?([a-z0-9A-Z_]+)(['"])?:/g,
        '"$2": '
      );
      alert(goodConfig)
    }
  },
  data() {
    return {
      firebaseConfig: JSON.stringify({})
    };
  }
};
</script>
