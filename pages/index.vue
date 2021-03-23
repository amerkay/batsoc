<template>
  <div>
    <landing-jumbo />
    <landing-logo-cloud />

    <landing-section-header />
    <landing-feature
      heading="Founding member of the Spectacled Flying Fox Recovery Team"
      :is-img-on-left="true"
      img="fox2.jpg"
    />
    <landing-feature
      heading="We work with local rescue groups, other recovery teams"
      :is-img-on-left="false"
      img="fox4.jpg"
    />
    <landing-feature
      heading="Community and school education"
      :is-img-on-left="true"
      img="fox9.jpg"
    />

    <LandingCTA />
    <landing-team />
  </div>
</template>

<script>
export default {}
</script>


