<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative pt-16 pb-8 overflow-hidden bg-white">
    <div class="relative">
      <div
        class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
      >
        <div
          class="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
          :class="[isImgOnLeft ? 'lg:col-start-2' : '']"
        >
          <div>
            <div class="mt-6">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                {{ heading }}
              </h2>
              <p class="mt-4 text-lg text-gray-500">
                Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet
                sagittis viverra duis. In venenatis sem arcu pretium pharetra
                at. Lectus viverra dui tellus ornare pharetra. In venenatis sem
                arcu pretium pharetra at. Lectus viverra dui tellus ornare
                pharetra.
              </p>
              <div class="mt-6">
                <a href="#" class="btn btn-secondary btn-outline">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-12 sm:mt-16 lg:mt-0"
          :class="[isImgOnLeft ? 'lg:col-start-1' : '']"
        >
          <div
            class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
          >
            <img
              class="w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              :class="[isImgOnLeft ? 'right-0' : 'left-0']"
              :src="require(`@/static/img/${img}`)"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    isImgOnLeft: {
      type: Boolean,
      default: true,
    },
    heading: {
      type: String,
      required: true,
    },
  },
}
</script>