<template>
  <v-lazy
    :min-height="330"
    :options="{ threshold: 0.5 }"
    transition="fade-transition"
  >
    <v-container class="mt-2 pa-16 bg-grey-darken-4" fluid>
      <v-row align="center" justify="center">
        <v-icon color="teal" icon="fa-brands fa-discord" size="x-small" />
        <p class="text-overline ml-2 color">Powered by Discord</p>
      </v-row>
      <v-row align="center" justify="center">
        <h2 class="text-h5 font-weight-light text-no-wrap mb-2">
          Join our Discord Community
        </h2>
      </v-row>
      <v-row justify="center">
        <p class="text-subtitle-1 font-weight-light text-center">
          The Atmospace Discord is primarily used to share community gaming
          servers, creations, and stay connected with friends. <br> Feel free to
          join!
        </p>
      </v-row>
      <v-row class="ga-2 ga-md-8 mt-md-12" justify="center">
        <v-btn color="teal-accent-1" href="https://discord.com/invite/HYkKUHXQ8p">Join</v-btn>
        <v-btn color="orange-accent-1" href="https://discord.com/servers/atmospace-343961922103672834">Become a Supporter</v-btn>
      </v-row>
    </v-container>
  </v-lazy>
</template>

<style scoped>
.v-row {
  margin: 0;
}
</style>
