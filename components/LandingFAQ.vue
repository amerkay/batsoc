<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-gray-50">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <landing-section-header
          id="faq"
          h2="Learn about Flying Fox"
          heading="Frequently asked questions"
          subHeading="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
      voluptatum cupiditate veritatis in accusamus quisquam."
        />

        <dl class="py-12 space-y-6 divide-y divide-gray-200 sm:py-16">
          <LandingFAQSingle v-for="i in [1, 2, 3, 4, 5, 6, 7]" :key="i" />
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from 'vue-feather-icons'
export default {
  components: {
    ChevronDownIcon,
  },
}
</script>