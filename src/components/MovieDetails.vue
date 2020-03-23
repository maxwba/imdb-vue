<template>
  <div v-if="fetchinMovieDetail" class="content">
    <b-card class="m-4" img-top tag="article" style="max-width: 20rem;">
      <b-spinner label="Loading..."></b-spinner>
    </b-card>
  </div>
  <div v-else>
    <b-img :src="movieInfo.Poster" fluid alt="Responsive image"></b-img>
    <h1>{{movieInfo.Title}}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieDetails",
  data() {
    return {
      fetchinMovieDetail: false,
      movieInfo: {}
    };
  },
  props: ["movie"],
  async mounted() {
    this.fetchinMovieDetail = true;
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=d526ad92&i=${this.movie.imdbID}`
    );
    this.movieInfo = response.data;
    this.fetchinMovieDetail = false;
  },
  methods: {}
};
</script>

<style>
</style>