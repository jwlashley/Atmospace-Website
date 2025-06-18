<template>
  <v-container class="h-screen ma-0 pa-0" fluid style="position: relative">
    <transition mode="out-in" name="fade">
      <v-parallax
        :key="wallpaper"
        class="hero"
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
        :max-height="100"
        :max-width="600"
        src="@/assets/Logo-Color-Banner.svg"
        style="width: 80%; display: block"
      />
      <div class="d-flex flex-row justify-center mt-8">
        <v-btn-group class="ga-4 ga-md-16" variant="outlined">
          <v-btn href="https://discord.com/servers/atmospace-343961922103672834" target="_blank">Discord</v-btn>
          <v-btn href="https://modrinth.com/mod/atmospace-vortex" target="_blank" variant="outlined">Vortex</v-btn>
          <v-btn href="https://modrinth.com/modpack/auramine" target="_blank">Auramine</v-btn>
        </v-btn-group>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  import wallpaper1 from '@/assets/CommunityImages/FFXIV-wedding-volzzie.png'
  import wallpaper2 from '@/assets/CommunityImages/HFF-KnightinDistress-Everant.png'
  import wallpaper4 from '@/assets/CommunityImages/MC-Armogan-SapphireIce-Everant-Everant.png'
  import wallpaper5 from '@/assets/CommunityImages/MC-Bots-volzzie.png'
  import wallpaper6 from '@/assets/CommunityImages/MC-Charlie-Rats-Armogan.png'
  import wallpaper3 from '@/assets/CommunityImages/MC-Charlie-Town-Everant.png'
  import wallpaper7 from '@/assets/CommunityImages/MC-Church-Everant.png'
  import wallpaper8 from '@/assets/CommunityImages/MC-Kurtis-Everant.png'
  import wallpaper9 from '@/assets/CommunityImages/MC-Sarah-body-Armogan.png'
  import wallpaper10 from '@/assets/CommunityImages/Roblox-Arogan.png'

  const backgroundImages = [
    { src: wallpaper1 },
    { src: wallpaper2 },
    { src: wallpaper3 },
    { src: wallpaper4 },
    { src: wallpaper5 },
    { src: wallpaper6 },
    { src: wallpaper7 },
    { src: wallpaper8 },
    { src: wallpaper9 },
    { src: wallpaper10 },
  ]

  const wallpaper = ref(wallpaper1)
  let index = 0

  setInterval(() => {
    index = (index + 1) % backgroundImages.length
    selectWallpaper(backgroundImages[index].src)
  }, 8000)

  function selectWallpaper (newWallpaper: string) {
    wallpaper.value = newWallpaper
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
