<template>
  <!-- Movie card -->
    <b-card
      class="m-4"
      :title="movie.Title"
      :img-src="movie.Poster === 'N/A' ? 'blankState.svg' : movie.Poster"
      :img-alt="movie.Title"
      img-top
      tag="article"
      style="max-width: 20rem;"
    >
      <b-card-text>Year: {{movie.Year}}</b-card-text>
      <b-button variant="info">Details</b-button>
    </b-card>
</template>

<script>
export default {
  name: "MovieCard",
  data() {
    return {};
  },
  props: ["movie"],

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>