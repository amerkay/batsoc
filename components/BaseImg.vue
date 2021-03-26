<template>
  <picture v-if="isURL()">
    <source :data-srcset="getSrc()" type="image/webp" />
    <img :data-src="getSrc()" :class="['lazyload', imgClass]" :alt="alt" />
  </picture>

  <!-- For explanation of v-if v-else see https://vuejs.org/v2/guide/conditional.html -->
  <!--  -->
  <!-- SVGs: default is to include if smaller than 5kb -->
  <!-- For SVGs no img-class can be used, just class -->
  <div
    v-else-if="isSVG()"
    v-html="
      require('~/static/img/' + stripExtension(getSrc()) + '.svg?include')
    "
  />

  <!-- if gif filetype, no reponsive sizes generated, just webp and compression -->
  <!-- Note: for GIF, the `size` property is ignored -->
  <picture v-else-if="isGIF()">
    <source
      :data-srcset="
        require('~/static/img/' + stripExtension(getSrc()) + '.gif?webp')
      "
      type="image/webp"
    />
    <img
      :data-src="require('~/static/img/' + stripExtension(getSrc()) + '.gif')"
      :class="['lazyload', imgClass]"
      :alt="alt"
    />
  </picture>

  <!-- prop 'size' is lg -->
  <picture v-else-if="size == 'lg'">
    <source
      :data-srcset="
        require('~/static/img/' +
          getSrc() +
          '?resize&min=320&max=2160&steps=4&format=webp').srcSet
      "
      type="image/webp"
    />
    <source
      :data-srcset="
        require('~/static/img/' + getSrc() + '?resize&min=320&max=1080&steps=3')
          .srcSet
      "
      type="image/jpeg"
    />
    <img
      :data-src="require('~/static/img/' + getSrc())"
      :src="require('~/static/img/' + getSrc() + '?lqip')"
      :class="['lazyload', imgClass]"
      :alt="alt"
    />
  </picture>

  <!-- prop 'size' is md -->
  <picture v-else-if="size == 'md'">
    <source
      :data-srcset="
        require('~/static/img/' +
          getSrc() +
          '?resize&min=180&max=640&steps=3&format=webp').srcSet
      "
      type="image/webp"
    />
    <source
      :data-srcset="
        require('~/static/img/' + getSrc() + '?resize&min=180&max=640&steps=3')
          .srcSet
      "
      type="image/jpeg"
    />
    <img
      :data-src="require('~/static/img/' + getSrc())"
      :src="require('~/static/img/' + getSrc() + '?lqip')"
      :class="['lazyload', imgClass]"
      :alt="alt"
    />
  </picture>

  <!-- prop 'size' is sm -->
  <picture v-else>
    <source
      :data-srcset="
        require('~/static/img/' +
          getSrc() +
          '?resize&min=100&max=200&steps=2&format=webp').srcSet
      "
      type="image/webp"
    />
    <source
      :data-srcset="
        require('~/static/img/' + getSrc() + '?resize&min=100&max=200&steps=2')
          .srcSet
      "
      type="image/jpeg"
    />
    <img
      :data-src="require('~/static/img/' + getSrc())"
      :src="require('~/static/img/' + getSrc() + '?lqip')"
      :class="['lazyload', imgClass]"
      :alt="alt"
    />
  </picture>
</template>

<script>
export default {
  props: {
    // the name of the image in ~/static/img or images_svg or images_gif folders
    // choosen automatic based on image extension
    // Use as: <BaseImage src="someimg.gif" ... />
    src: {
      type: String,
      default: '',
    },
    // img alt text
    alt: {
      type: String,
      default: '',
    },
    // Size of responsive img
    // sm (max 200px width), md (max 640px width) or lg (max 1080px width)
    // DOES NOT apply to .gif or .svg
    size: {
      type: String,
      default: 'md',
    },
    // classes to apply to inner <img> tag (tailwindcss and so on)
    // DOES NOT apply to .svg
    // Use as <BaseImage img-class="..." ... />
    imgClass: {
      type: String,
      default: '',
    },
  },
  methods: {
    isGIF() {
      return this.src.endsWith('.gif')
    },
    isSVG() {
      return this.src.endsWith('.svg')
    },
    isURL() {
      return this.src.startsWith('http')
    },
    stripExtension(filename) {
      return filename.split('.').slice(0, -1).join('.')
    },
    getSrc() {
      return this.src.replace('/img/', '').replace('img/', '')
    },
  },
}
</script>

<style scoped>
/* picture {
  @apply overflow-hidden;
} */

picture img {
  @apply object-cover;
}
</style>