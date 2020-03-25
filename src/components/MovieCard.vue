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
    <div>
      <b-button @click="showMovieDetails" variant="outline-primary">Details</b-button>
    </div>
  </b-card>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "MovieCard",
  data() {
    return {};
  },
  props: ["movie"],
  computed: {
    ...mapGetters(["currentMovie", "movieDetailsVisible"])
  },
  components: {},
  methods: {
    ...mapMutations(["setCurrentMovie", "setMovieDetailsVisible"]),
    showMovieDetails() {
      this.setCurrentMovie(this.movie);
      this.setMovieDetailsVisible(true);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>