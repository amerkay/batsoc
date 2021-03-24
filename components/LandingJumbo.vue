<template>
  <div class="relative bg-navy-500">
    <main class="lg:relative">
      <div
        class="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left"
      >
        <div class="px-4 lg:w-7/12 sm:px-8 xl:pr-16">
          <h1
            class="text-4xl font-extrabold tracking-tight text-gray-100 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
          >
            <span class="block xl:inline"> Help us save the endangered </span>
            <span class="block text-orange-500 xl:inline">
              Spectacled Flying Fox!
            </span>
          </h1>
          <p
            class="max-w-md mx-auto mt-3 text-lg text-gray-200 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            Help us save the endangered Spectacled Flying Fox, an essential
            pollinator and seed disperser for the wet tropics! We are volunteers
            working with locals legislators to protect them.
          </p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="mt-3 mr-2">
              <a href="#" class="btn btn-lg btn-primary">
                Join us on Patreon
              </a>
            </div>

            <div>
              <nuxt-link
                to="/#what-do-we-do"
                class="mt-3 mr-2 btn btn-outline btn-lg"
              >
                Learn more about us
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12 lg:h-full"
      >
        <img
          class="absolute inset-0 object-cover w-full h-full"
          src="../static/img/fox5.webp"
          alt=""
        />
      </div>
    </main>
  </div>
</template>