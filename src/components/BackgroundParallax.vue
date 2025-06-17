<template>
  <v-container
    class="h-25 ma-0 pa-0"
    fluid
    :max-height="250"
    style="position: relative"
  >
    <v-parallax
      class="hero"
      src="@/assets/bg.png"
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
      <h2 class="text-overline py-0 text-center text-disabled">
        Building with Purpose.
      </h2>
      <v-img
        class="my-0 py-0 mx-auto"
        style="width: 80%; display: block"
        :color="white"
        :max-width="600"
        :max-height="100"
        src="@/assets/Logo-White.png"
      />
    </div>
  </v-container>
</template>
<style>
.hero{
  mask-image: linear-gradient(black 1%, transparent);
}
</style>
