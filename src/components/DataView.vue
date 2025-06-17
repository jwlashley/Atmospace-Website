<template>
  <v-container class="d-flex flex-wrap h-auto justify-center">
    <v-card
      :min-width="1000"
      subtitle="This is an example dataset similar to one you might see while using Vortex"
      title="Vortex Mod Usage Data"
      variant="outlined"
    >
      <v-data-table
        :headers="tableHeaders"
        hide-default-footer
        :items="items"
      />
    </v-card>
  </v-container>
</template>
<script lang="ts" setup>
  import { onMounted, ref } from 'vue'

  interface ReportItem {
    ModID: string
    Category: string
    Count: number
  }

  // Reactive variable to hold the items for the table
  const items = ref<ReportItem[]>([])
  // Reactive variable for loading state
  const loading = ref(true)
  // Reactive variable for error messages
  const error = ref<string | null>(null)

  // Define headers for the v-data-table (Vuetify 3 syntax)
  // The 'key' should match the property names in your 'items' objects
  const tableHeaders = [
    { title: 'ModID', align: 'start', sortable: true, key: 'ModID' },
    { title: 'Category', key: 'Category' },
    { title: 'Count', key: 'Count' },
  ] as const

  // Function to fetch data from Vercel API
  async function fetchReportData () {
    loading.value = true
    error.value = null

    items.value = [
      { ModID: 'vortex', Category: 'SomeCategory', Count: 10 },
      { ModID: 'vortex', Category: 'SomeCategory1', Count: 101 },
      { ModID: 'vortex', Category: 'SomeCategory2', Count: 9 },
      { ModID: 'ars', Category: 'SomeCategory', Count: 11 },
      { ModID: 'create', Category: 'SomeCategory', Count: 101 },
      { ModID: 'hexerei', Category: 'SomeCategory', Count: 9 },
      { ModID: 'planes', Category: 'SomeCategory', Count: 87 },
      { ModID: 'waystones', Category: 'SomeCategory', Count: 14 },
      { ModID: 'minecolonies', Category: 'SomeCategory', Count: 10 },
      { ModID: 'testmod', Category: 'SomeCategory', Count: 9 },
      { ModID: 'neoforge', Category: 'SomeCategory', Count: 11 },
      { ModID: 'mod3', Category: 'SomeCategory', Count: 11 },
      { ModID: 'mod2', Category: 'SomeCategory', Count: 13 },
      { ModID: 'mod1', Category: 'SomeCategory', Count: 27 },
    ]

    loading.value = false
  }

  onMounted(() => {
    fetchReportData()
  })
</script>

<style scoped>
.vtxheader{
  flex-basis: 100%
}
</style>
