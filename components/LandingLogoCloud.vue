<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-green-50">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
        <div
          class="flex justify-center col-span-1 md:col-span-2 lg:col-span-1"
          v-for="logo in cData.logos"
          :key="logo.img"
        >
          <img class="h-12" :src="logo.img" :alt="logo.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log('---> ', this.cData)
  },
}
</script>