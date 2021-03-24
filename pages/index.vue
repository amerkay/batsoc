<template>
  <div>
    <landing-hero :cData="heroData" />
    <landing-logo-cloud :cData="logoCloudData" />
    <landing-features :cData="featuresData" />

    <LandingCTA class="mt-16" />

    <landing-events id="events" />

    <LandingFAQ id="faq" />

    <landing-team id="team" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const heroData = await $content('landing-page/hero').fetch()
    const logoCloudData = await $content('landing-page/logo-cloud').fetch()
    const featuresData = await $content('landing-page/features').fetch()

    return {
      heroData,
      logoCloudData,
      featuresData,
    }
  },
}
</script>


