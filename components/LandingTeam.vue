<template>
  <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
-->
  <div class="bg-white">
    <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Our Team
          </h2>
          <p class="text-xl text-gray-500">
            Nulla quam felis, enim faucibus proin velit, ornare id pretium.
            Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat
            eu faucibus vivamus eget bibendum cras.
          </p>

          <div class="flex justify-start pt-4">
            <img
              class="h-64"
              src="../static/img/logo-orig-512.png"
              alt="BatSoc Logo"
            />
          </div>
        </div>
        <div class="lg:col-span-2">
          <ul
            class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
          >
            <li v-for="i in [1, 2]" :key="i">
              <div class="space-y-4">
                <div class="aspect-w-3 aspect-h-2">
                  <img
                    class="object-cover rounded-lg shadow-lg"
                    src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixqx=PguZ6clds6&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt=""
                  />
                </div>
                <div class="space-y-1 text-lg font-medium leading-6">
                  <h3>Maree Treadwell Kerr</h3>
                  <p class="text-navy-500">President</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">
                    Ultricies massa malesuada viverra cras lobortis. Tempor orci
                    hac ligula dapibus mauris sit ut eu. Eget turpis urna
                    maecenas cras. Nisl dictum.
                  </p>
                </div>

                <ul class="flex space-x-5">
                  <li>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Twitter</span>
                      <instagram-icon
                        size="1.5x"
                        class="w-5 h-5"
                      ></instagram-icon>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">LinkedIn</span>
                      <twitter-icon size="1.5x" class="w-5 h-5"></twitter-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <!-- More items... -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TwitterIcon, InstagramIcon } from 'vue-feather-icons'

export default {
  components: {
    TwitterIcon,
    InstagramIcon,
  },
}
</script>