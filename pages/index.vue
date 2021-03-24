<template>
  <div>
    <landing-jumbo />
    <landing-logo-cloud />

    <landing-section-header
      id="what-do-we-do"
      h2="Raising awareness and advocating"
      heading="What do we do?"
      subHeading="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
      voluptatum cupiditate veritatis in accusamus quisquam."
    />
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

    <LandingCTA class="mt-16" />

    <landing-events />

    <LandingFAQ id="FAQ" />

    <landing-team id="team" />
  </div>
</template>

<script>
export default {}
</script>


