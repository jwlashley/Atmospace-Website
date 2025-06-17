<template>
  <v-app>
    <v-lazy
      :min-height="330"
      :options="{ threshold: 0.5 }"
      transition="fade-transition"
    >
      <v-container class="d-flex justify-center align-center pt-16 w-100">
        <v-img
        class="d-none d-sm-flex"
        :max-width="200"
          src="/src/assets/vortexsvg.svg"
        />
        <h1 class="vtxTitle text-center align-center">Vortex</h1>
      </v-container>
    </v-lazy>
    <v-lazy
      :min-height="330"
      :options="{ threshold: 0.5 }"
      transition="fade-transition"
    >
      <v-container class="justify-center text-center">
        <h2 class="text-overline">A mod for server administrators to get quantitative player-driven data about mod usage in their modded servers.</h2>
        <div class="d-flex flex-row justify-center mt-8">
          <v-btn-group class="ga-4 ga-md-16" variant="outlined">
            <v-btn class="px-2 px-md-4">Modrinth</v-btn>
            <v-btn class="px-2 px-md-4" variant="outlined">Github</v-btn>
            <v-btn class="px-2 px-md-4">Wiki</v-btn>
          </v-btn-group>
        </div>
      </v-container>
    </v-lazy>
    <v-container>
      <v-divider />

      <v-lazy
        :min-height="330"
        :options="{ threshold: 0.5 }"
        transition="fade-transition"
      >

        <v-timeline align="start" class="w-auto">
          <v-timeline-item>
            <div class="mb-16 pb-16">
              <div class="text-h6">Track Modded Content Usage</div>
              <p>
                Vortex silently monitors player interactions with content from other mods, including:
              </p>
              <ul class="px-8">
                <li class="text-body-2">Right-clicking on blocks.</li>
                <li class="text-body-2">Right-clicking with items.</li>
                <li class="text-body-2">Crafting recipes that output modded items.</li>
                <li class="text-body-2">Dealing Damage to modded entities.</li>
                <li class="text-body-2">Chunk Generation.</li>
                <li class="text-body-2">Command Execution.</li>
              </ul>
            </div>
          </v-timeline-item>

          <v-timeline-item dot-color="grey-lighten-1">
            <div class="w-auto text-end mb-16 pb-16">
              <div class="text-h6">Filter out Vanilla content.</div>
              <p>
                Vortex intelligently ignores all interactions with vanilla Minecraft content,<br> focusing soley on the mods you've added to your modpack.
              </p>
            </div>
          </v-timeline-item>

          <v-timeline-item>
            <div class="w-auto mb-16 pb-16">
              <div class="text-h6">Get in-game summaries.</div>
              <p>
                Administrators can use simple commands to get an immediate summary of<br> the most and least used mods across all tracked categories directly in the game chat.
              </p>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-lazy>
      <v-divider />
    </v-container>

    <v-lazy
      :options="{ threshold: 0.5 }"
      transition="fade-transition"
    >

      <v-container class="d-flex flex-wrap justify-center">
        <h1 class="vtxSubTitle">Vortex DataView</h1>
        <p class="vtxBlurb">Vortex Dataview allows Admins to get a comprehensive overview of the mod usage on their server.</p>
      </v-container>
    </v-lazy>
    <v-lazy
      :options="{ threshold: 0.5 }"
      transition="fade-transition"
    >
      <v-container class="d-none d-md-flex justify-center align-start pt-0 my-0 ">
        <DataView />
      </v-container>
    </v-lazy>
  </v-app>
</template>

<script lang="ts" setup>
  import DataView from '@/components/DataView.vue'

//
</script>

<style scoped>

.vtxTitle{
font-size: clamp(1.5rem, 4vw, 5rem);
font-weight: 300;
line-height: 2.667;
letter-spacing: 0.1666666667em;
text-transform: uppercase;
}

.vtxSubTitle{
font-size: 3rem;
font-weight: 300;
line-height: 1.5;
letter-spacing: 0.1666666667em;
text-transform: uppercase;
}

.vtxBlurb{
flex-basis:100%;
justify-content: center;
text-align: center;
font-size: 1rem;
font-weight: 300;
line-height: 2.667;
}

</style>
