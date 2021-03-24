<template>
  <footer class="bg-navy-500">
    <div class="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
      <nav
        class="flex flex-wrap justify-center -mx-5 -my-2"
        aria-label="Footer"
      >
        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-300 hover:text-gray-100">
            About
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-300 hover:text-gray-100">
            Contact Us
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-300 hover:text-gray-100">
            Press
          </a>
        </div>
      </nav>
      <div class="flex justify-center mt-8 space-x-6">
        <a href="#" class="text-gray-300 hover:text-gray-100">
          <span class="sr-only">Facebook</span>
          <facebook-icon size="1.5x" class="w-6 h-6"></facebook-icon>
        </a>

        <a href="#" class="text-gray-300 hover:text-gray-100">
          <span class="sr-only">Instagram</span>
          <instagram-icon size="1.5x" class="w-6 h-6"></instagram-icon>
        </a>
      </div>
      <p class="mt-8 text-base text-center text-gray-200">
        &copy; 2021 BatSoc Inc, Inc. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import { FacebookIcon, InstagramIcon } from 'vue-feather-icons'
export default {
  components: {
    FacebookIcon,
    InstagramIcon,
  },
}
</script>