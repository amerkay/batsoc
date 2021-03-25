<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative px-4 pb-20 bg-white sm:px-6 lg:pb-28 lg:px-8">
    <div class="relative mx-auto max-w-7xl">
      <landing-section-header
        id="events"
        h2="Learn about Flying Fox and volunteer"
        heading="Upcoming Events"
        subHeading="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
      voluptatum cupiditate veritatis in accusamus quisquam."
      />
      <!-- <div
        class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none"
      >
        <div
          v-for="event in events"
          :key="event.slug"
          class="flex flex-col overflow-hidden rounded-lg shadow-lg"
        >
          <div class="flex-shrink-0">
            <img
              class="object-cover w-full h-48"
              src="../static/img/fox1.webp"
              alt=""
            />
          </div>
          <div class="flex flex-col justify-between flex-1 p-6 bg-white">
            <div class="flex-1">
              <p class="flex items-center text-sm text-gray-500">
                <calendar-icon class="w-5 h-5 mr-2"></calendar-icon>
                25 May 2021 @ 16:30 or
                <span
                  class="ml-1"
                  title="If you set the date to 2099, it becomes 'Ongoing'. You can use for hiring Volonteers."
                >
                  Ongoing</span
                >
              </p>

              <p class="flex items-center mt-3 text-sm text-gray-500">
                <map-pin-icon class="w-5 h-5 mr-2"></map-pin-icon>
                17 Some Street, Kuranda, QLD
              </p>

              <a href="#" class="block mt-3">
                <p class="text-xl font-semibold text-gray-900">
                  An awesome Flying Fox Event!
                </p>
                <p class="mt-3 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto accusantium praesentium eius, ut atque fuga culpa,
                  similique sequi cum eos quis dolorum.
                </p>
              </a>
            </div>
            <div class="flex items-center mt-6">
              <a href="#" class="w-full btn btn-secondary btn-outline">
                Go to event details
              </a>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <landing-section-header id="events" h2="Past Bat Society Events" />
    <landing-events-past class="max-w-2xl mx-auto mt-8" />
  </div>
</template>

<script>
import { CalendarIcon, MapPinIcon } from 'vue-feather-icons'
export default {
  props: {
    cData: {
      type: Array,
      required: true,
    },
  },
  components: {
    CalendarIcon,
    MapPinIcon,
  },
}
</script>