<template>
  <v-container class="h-screen ma-0 pa-0" fluid style="position: relative">
    <v-parallax
      src="@/assets/auramine-mc.png"
      style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
      "
    />

    <div
      class="d-flex flex-column fill-height justify-center align-items-center"
      style="position: relative; z-index: 1"
    >
      <h2 class="text-overline my-n2 py-0 text-center">Auramine</h2>
      <v-img
        class="my-0 py-0 mx-auto"
        style="width: 80%; display: block"
        :max-width="600"
        :max-height="300"
        src="@/assets/auramine.svg"
      />
      <div class="d-flex flex-row justify-center mt-8">
        <v-btn-group variant="outlined" class="ga-4 ga-md-16">
          <v-btn>Discord</v-btn>
          <v-btn variant="outlined">Vortex</v-btn>
          <v-btn>Auramine</v-btn>
        </v-btn-group>
      </div>
    </div>
  </v-container>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.1;
}
</style>
