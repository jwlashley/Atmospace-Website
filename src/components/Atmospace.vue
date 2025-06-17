<template>
  <v-container class="h-screen ma-0 pa-0" fluid style="position: relative">
    <transition mode="out-in" name="fade">
      <v-parallax class="hero"
        :key="wallpaper"
        :src="wallpaper"
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        "
      />
    </transition>

    <div
      class="d-flex flex-column fill-height justify-center align-items-center"
      style="position: relative; z-index: 1"
    >
      <h2 class="text-overline my-n4 py-0 text-center">
        Building with Purpose.
      </h2>
      <v-img
        class="my-0 py-0 mx-auto"
        style="width: 80%; display: block"
        :max-width="600"
        :max-height="100"
        src="@/assets/Logo-Color-Banner.svg"
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

<script lang="ts" setup>
import { ref } from "vue";

const backgroundImages = [
  {
    src: "@/assets/CommunityImages/FFXIV-wedding-volzzie.png",
  },
  {
    src: "@/assets/CommunityImages/HFF-KnightinDistress-Everant.png",
  },
  {
    src: "@/assets/CommunityImages/MC-Charlie-Town-Everant.png",
  },
  {
    src: "@/assets/CommunityImages/MC-Armogan-SapphireIce-Everant-Everant copy.png",
  },
  {
    src: "@/assets/CommunityImages/MC-Bots-volzzie.png",
  },
  {
    src: "@/assets/CommunityImages/MC-Charlie-Rats-Armogan.png",
  },
  {
    src: "@/assets/CommunityImages/MC-Church-Everant.png",
  },
  {
    src: "@/assets/CommunityImages/MC-Kurtis-Everant.png",
  },
  {
    src: "@/assets/CommunityImages/MC-Sarah-body-Armogan.png",
  },
  {
    src: "@/assets/CommunityImages/Roblox-Arogan.png",
  },
];

const wallpaper = ref("src/assets/CommunityImages/FFXIV-wedding-volzzie.png");
let index = 0;

setInterval(() => {
  index = (index + 1) % backgroundImages.length;
  selectWallpaper(backgroundImages[index].src);
}, 8000);

function selectWallpaper(index: string) {
  wallpaper.value = index;
}
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.1;
}

.hero{
  mask-image: linear-gradient(black 90%, transparent);
}

</style>
