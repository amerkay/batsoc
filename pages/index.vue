<template>
  <div>
    <landing-hero :cData="heroData" />
    <!-- <landing-logo-cloud :cData="logoCloudData" /> -->
    <landing-features :cData="featuresData" />

    <LandingCTA class="mt-16" />

    <landing-events id="events || []" :cData="eventsData" />

    <LandingFAQ id="faq" />

    <landing-team id="team" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const heroData = await $content('landing-page/hero').fetch()
    // const logoCloudData = await $content('landing-page/logo-cloud').fetch()
    const featuresData = await $content('landing-page/features').fetch()

    // const now = process.server ? new Date().valueOf() : new Date().toJSON()
    const eventsData = await $content('events')
      .sortBy('eventAt', 'asc')
      .fetch()
      .catch((err) => {
        console.error('Cannot load events')
      })

    console.log('eventsData ', eventsData)

    return {
      heroData,
      // logoCloudData,
      featuresData,
      eventsData,
    }
  },
}
</script>


